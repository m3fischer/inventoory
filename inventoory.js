import http from 'http'
import fs from 'fs'
import url from 'url'
import {parse} from 'querystring'
import {generateFullItemList as httmldoc} from './views/inventoor-full-list.view.js'
import {generateSingleView as SingleView} from './views/inventoory-single.view.js'
import {generateEditView as editView } from './views/inventoory-single-edit.view.js'
import {createID} from './helpers/utils.js'

const hostname = '127.0.0.1'
const port = '3000'

//Ein Server erstellen ...
let server = http.createServer(OnUserRequest);
// ... und auf Port 3000 auf anfragen warten
server.listen(port,hostname, () => {console.log(`Server is Listening on ${hostname}:${port}`)})

//(Beispiel-)Daten aus JSON-Datei laden
let items;
let itemsMap = new Map();

const file_to_load = './data/items.json'

fs.readFile(file_to_load, (err, data) => {    
    items = JSON.parse(data);
    for(let i = 0; i < items.length; i++){
        let item_id = createID()
        if(items[i].id == undefined){
            items[i].id = item_id
            itemsMap.set(item_id, items[i])
        }
    }

    let newItemRaw = JSON.stringify(items);
    //let newItemRaw = JSON.stringify(itemsMap);
    fs.writeFile(file_to_load, newItemRaw, (err) => {console.log("Alles Super beim schreiben der Datei")})
})




let counter=0;
function OnUserRequest(req, res){

    console.log(counter)

    let parsedURL = url.parse(req.url, true)

    if(req.url === "/"){ //Das ist die Startseite
        //res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (httmldoc(items))
    } else if (req.url === "/ueber"){
        res.setHeader ('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end (`<h1>Das ist meine &Uumlber Mich Seite</h1> `)

    }
    else if (req.url === "/api"){
        res.statusCode = 200;
        res.end ()

    }
    else{ 
        let splitedURL = req.url.split('/')
        if(splitedURL.includes("delete") && splitedURL.length == 3){
            //delete items[0]
            const id_position = 2;
            let item_to_delete = splitedURL[id_position]
            items.splice(item_to_delete,1)
            res.end (httmldoc(items))

        }else if(splitedURL.includes("details") && splitedURL.length == 3){
            const id_position = 2;
            let item_to_show = splitedURL[id_position]
            items[item_to_show]
            console.log("details, id: " + item_to_show )
            let item = Object.values(items[item_to_show])
            res.end(SingleView(items[item_to_show]))

        }else if(splitedURL.includes("add") ){
            res.setHeader ('Content-Type', 'text/html');
            res.statusCode = 200;
            
            //Als Schablone nehmen wir das 0. Elemnent
            let newItem = {}
            let keys = Object.keys(items[0])
            for (let i = 0; i < keys.length; i++){
                newItem[keys[i]] = "";
            }

            // let newItem = {
            //     "name":"",
            //     "typ":"",
            //     "neupreis":"",
            //     "ort":""            
            // }

            newItem.id= createID()
            items.push(newItem)
            let item_to_show = items.length-1
            res.end(editView(items[item_to_show]))

        }
        else if (splitedURL.includes("edit") && splitedURL.length == 3) {
            res.setHeader ('Content-Type', 'text/html');
            res.statusCode = 200;
            const id_position = 2;
            let item_to_show = splitedURL[id_position]
            items[item_to_show]
            console.log("edit, id: " + item_to_show )
            res.end(editView(items[item_to_show]))

        }else if(splitedURL.includes("save") && req.method =="POST"){
            let formdata = []
            req.on('data', (chunk) => {
                formdata.push(chunk);
              })
            req.on('end', () => {
                formdata = Buffer.concat(formdata).toString();
                let form = parse(formdata);
                console.log(form)
                for (let i=0; i<items.length; i++){
                    if(items[i].id == form.id){
                        items[i] = form;    
                    }
                }                
                let keys = Object.keys(form)

                let newItemRaw = JSON.stringify(items);
                fs.writeFile(file_to_load, newItemRaw, (err) => {console.log("Alles Super beim schreiben der Datei")})
                res.writeHead(302,{location: '/', 'content-type':'text/html'})
                res.end (httmldoc(items))
    
            });
        }

        else{
            // Bei allen anderen habe ich einen Fehler => 404
            res.setHeader ('Content-Type', 'text/html');
            res.statusCode = 404;
            res.end (`<h1>404 <h1><h2>Ohh, da ist etwas schiefggelaufen</h2>`)
        }
    }
    counter++
}