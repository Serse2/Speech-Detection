const body = document.querySelector('body')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//controllare il riconoscimento vocale dato in input
const recognition = new SpeechRecognition()
console.log(recognition)
//Definisce se il sistema di riconoscimento vocale deve restituire risultati intermedi (true) o solo risultati finali (false)
recognition.interimResults = true

//creo elemento p
let p = document.createElement('p')
//selezione il nodo del DOM nel quale inserire l'elemento creato
const words = document.querySelector('.words')
//inseriso l'elemento p all'interno di words
words.appendChild(p);

//inserire nuovo elemento p in words
function appendEl(){
    p = document.createElement('p')
    words.appendChild(p)
}

function changePage(url){
    window.location.href = `${url}`
}

recognition.addEventListener('result', (e) => {
let voice = [...(e.results)]
    .map(rec => rec[0])
    .map(rec => rec.transcript)
    .join()
    
p.textContent = voice

if(voice.includes('computer ricarica la pagina')){
    location.reload()
}

if(voice.includes('Vai su Facebook' || 'vai su Facebook')){
    changePage('https://it-it.facebook.com/');
}

if(voice.includes('Vai su Spotify' || 'vai su Spotify')){
    changePage('https://www.spotify.com/it/');
}

if(voice.includes('computer cambia colore di sfondo' || 'computer Cambia colore di sfondo')){
    body.style.background = '#21D4FD'
}
if(e.results[0].isFinal){
    appendEl()
}

});

//quando finisce una frase attivare una nuova registrazione
recognition.addEventListener('end', recognition.start)
recognition.start();