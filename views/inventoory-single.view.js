import {generateHtmlHeader as htmlHeader} from './inventoory-part-header.view.js'
import {generaterHTMLFooter as htmlFooter} from './inventoory-part-footer.view.js'

export function generateSingleView(item){
    let html = ` 
    ${htmlHeader()}    
    <main id="inventoory-app">
        <div class="container ">
            <div class="row">
                <div class="col s12">
                    <h1 class="left-align" id="main-h1-header">${item.name}</h1>
                </div>
            </div>
            <div class="row ">       
                ${createSingleView(item)}         
                
            </div>
        </div>
    </main>
    ${htmlFooter()}      
`

return html;

};

function createSingleView(item){
    let div = ` <div>${item.name}</div>
                <div>${item.typ}</div>
                <div>${item.Neupreis}</div>
                <div>${item.Ort}</div>
    `

    return div
}