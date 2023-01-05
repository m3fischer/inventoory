export function generateHtmlHeader(){
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inventoory</title>

        <!--materializecss-->
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.0/dist/css/materialize.min.css">
        
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.0/dist/js/materialize.min.js"></script>
            

        <!--Zuletzt meine eigenen Styles => naeher am Objekt-->
        <link rel="stylesheet" href="styles/mystyles.css">
    </head>
    <body>
    <div class="container" > 
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">logo</a>
                <a href="#" data-target="mobile-nav-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <!--Das Menu in der Desktop Ansicht-->
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Inventar</a></li>
                    <li id="btn_settings_Desktop"><a href="#">Einstellungen</a></li>
                </ul>
            </div>
        </nav>
        <!-- Das Hamburger-Menu in der mobile Ansicht-->
        <ul class="sidenav" id="mobile-nav-menu">
            <li><a href="#">Inventar</a></li>
            <li id="btn_settings_mobile"><a href="#">Einstellungen</a></li>
        </ul>
    </div>`

    return html;
}