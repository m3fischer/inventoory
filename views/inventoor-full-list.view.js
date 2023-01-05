import {generateHtmlHeader as htmlHeader} from './inventoory-part-header.view.js'
import {generaterHTMLFooter as htmlFooter} from './inventoory-part-footer.view.js'

export function generateFullItemList(items){
    let html = `
    ${htmlHeader()}    
    
    <main id="inventoory-app">
        <div class="container ">
            <div class="row">
                <div class="col s12">
                    <h1 class="left-align" id="main-h1-header">Alle Deine Dinge</h1>
                </div>
            </div>
            <div class="row ">       
            ${createHTMLTable(items)}         
                
            </div>
        </div>
    </main>
    
    ${htmlFooter()}`

return html;

};

function createHTMLTable(items){
    let headerNames = Object.keys(items[0])
    let htmlHeader=""
    //Als erstes die Überschriften aus dem Objekt laden
    for (let i = 0; i < headerNames.length; i++){
        htmlHeader = htmlHeader + ` <th>${headerNames[i]}</th>`
    }
    //Dann spalten mnanuell ergaenzen
    htmlHeader = htmlHeader + "<th>Edit</th>"

    //Jetzt Zeilenweise die Tabelle aufbauen
    let htmlRow = ""
    for (let linenumber = 0; linenumber<items.length; linenumber++){    

        // Je Item wird eine neue Zeile (=> Table-Row: tr) in der Tabelle angelgt   
        // mit mit J Iterator bewegen wir uns von oben nach unten
        let currItems = Object.values(items[linenumber])
        htmlRow = htmlRow + "<tr>"
        for(let k = 0; k< currItems.length; k++){
            //Jede Zeile besteht aus mehreren Spalten
            // mit mit k-Iterator bewegen wir uns von links nach rechts
            htmlRow = htmlRow + `<td>${currItems[k]}</td>`
        }
        //Am Ende einer Zeile den Edit Button manuell ergänzen
        htmlRow = htmlRow + `<td><a href="/details/${linenumber}">Anzeigen</a></td>`
        htmlRow = htmlRow + `<td><a href="/edit/${linenumber}">bearbeiten</a></td>`
        htmlRow = htmlRow + `<td><a href="/delete/${linenumber}">löschen</a></td>`

        // Die Zeile der Tabelle schließen. 
        htmlRow = htmlRow + "</tr>"
    }

    let htmlTable = `<table class="striped highlight responsive-table">
        <thead><tr>${htmlHeader}</tr></thead>
        <tbody>${htmlRow}</tbody>
    </table>`    

    //Wir liefern die Fertige Tabelle zurück
    return htmlTable;
}