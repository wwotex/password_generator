const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let gens = document.getElementsByClassName("generated")
let passLen = 15;

for(let i = 0; i < gens.length; i++){
    gens[i].addEventListener('click', function() {
        navigator.clipboard.writeText(gens[i].textContent)
    })
}

function generatePasswords(){
    for(let i = 0; i < gens.length; i++){
        let pass = ''
        for(let ch = 0; ch < 15; ch++ ){
            pass += characters[Math.floor(Math.random()*characters.length)]
        }
        gens[i].textContent = pass

    }
}
