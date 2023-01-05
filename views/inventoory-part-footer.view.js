export function generaterHTMLFooter(){
let html = `
    <footer class="container page-footer blue-grey darken-3">    
        <div class="row">
        <div class="col l6 s12">
            <h5 class="white-text">Deine smarte Inventarverwaltung</h5>
            <p class="grey-text text-lighten-4">Verwealte alle Deine Dinge. Einfach da wo Du bist</p>
        </div>
        
        </div>
        
        <div class="footer-copyright blue-grey darken-4">
            <div class="container">
                <div class="row">
                    <div class="col s4"> © 2023 inventoory</div>
                    <div class="col s4 offset-s4">
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>  
            </div>
        </div>
    </footer>


    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });   
    </script>
    </body>
    </html>`
   
return html
}