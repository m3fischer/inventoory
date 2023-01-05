import {generateHtmlHeader as htmlHeader} from './inventoory-part-header.view.js'
import {generaterHTMLFooter as htmlFooter} from './inventoory-part-footer.view.js'

export function generateEditView (item){
    let html = `
  
    ${htmlHeader()}    
    <main id="inventoory-app">
        <div class="container ">
            <div class="row">
                <div class="col s8 offset-s2">
                    <h1 class="left-align" id="main-h1-header">${item.name}</h1>
                </div>
            </div>
            <div class="row ">   
                <div class="col s8 offset-s2">    
                    ${generateHtmlEditForm(item)}         
                </div>
            </div>
        </div>
    </main>
    ${htmlFooter()}`
return html;
 
}

function generateHtmlEditForm(item){
    let keys = Object.keys(item)
    let value = Object.values(item)
    
   
    let htmlItem = `<form action="/save" method="POST" id="edit_form">`
    for (let count =0; count < keys.length; count++){
        htmlItem += `<label for="id-input-${keys[count]}">${keys[count]}</label>
        <input type="text" id="id-input-${keys[count]}" name="id-input-${keys[count]}" value="${value[count]}"><br><br>`
    }
    htmlItem += '<button type="submit" form="edit_form" value="Submit">Speichern</button>'
    htmlItem += '</form>'


return htmlItem

}