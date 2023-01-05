/**
 * Generiert eine Einfache ID aus [A-Z]und [0-9]. Die ID ist per Default fünfstellig
 * @param {inter} length: Länge der zu generierenden ID. Default = 5 
 * @returns liefert eine einfache id zurück (=>String)
 */
export function createID(length = 5){
    let data="ABCDEFGHIJKLMOPQESTUVWXYZ0123456789"
    let id =""
    for(let i=0; i<length;i++){
        let nextChar = Math.floor((Math.random() * 100) % data.length)
        id += data.at(nextChar);
    }
    return id;
}