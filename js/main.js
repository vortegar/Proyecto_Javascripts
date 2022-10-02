console.log("Contenido del DOM cargado")
document.addEventListener("DOMContentLoaded", paginaCargada)

function paginaCargada() { 

    var textArea = document.getElementById('origen')
    var divDestino = document.getElementById("destino")

    
    var parrafo = document.createElement("p")
    var strong = document.createElement("strong")
    var br = document.createElement("br")
    
    textArea.appendChild(parrafo)

    parrafo.insertAdjacentHTML ('afterbegin', "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>")
    textArea.value = parrafo.textContent

    //parrafo.appendChild(strong)
    //parrafo.appendChild(br)
    
    parrafo.textContent = "Este contenido está listo para ser editado y pasarlo abajo."

    var btnReemplazar = document.getElementById("btn-reemplazar")
    var btnAgregar = document.getElementsByClassName("btn-agregar")
    var btnVaciar = document.getElementsByClassName("btn-vaciar")
    var btnConvertiTextMayusculas = document.getElementsByClassName ("btn-convertir-a-mayusculas")
    var btnConvertiTextMinusculas = document.querySelector ("button")

    
    
    btnReemplazar.disabled = false
    btnAgregar[0].disabled = false
    btnAgregar[1].disabled = false
    btnAgregar[2].disabled = false
    btnAgregar[3].disabled = false
    
    btnVaciar[0].disabled = false
    btnConvertiTextMayusculas[0].disabled = false
    btnConvertiTextMinusculas.disabled = false
    
    /* Text area */ 
    
    btnReemplazar.addEventListener ("click", () => {textArea.value=divDestino.textContent})
    btnAgregar[0].addEventListener("click", () => {divDestino.textContent=textArea.value})
    btnAgregar[1].addEventListener("click", () => {for (var i = 0; i < 5; i++) {divDestino.textContent+=textArea.value}})
    btnAgregar[2].addEventListener("click", () => {for (var i = 0; i < 10; i++) {divDestino.textContent+=textArea.value}})
    btnAgregar[3].addEventListener("click",() =>{
    var repeticiones= prompt('Numero de veces a repetir')
    repeticiones=parseInt(repeticiones)
    for(var i=0; i<repeticiones; i++)
    {
        destino.textContent+= textArea.value
    }
})

/* DIV */ 

    btnVaciar[0].addEventListener("click", () => {divDestino.textContent = ""})
    
    btnConvertiTextMayusculas[0].addEventListener("click", () =>  
    {divDestino.textContent=divDestino.textContent.toUpperCase()})

    btnConvertiTextMinusculas.addEventListener ("click", () => {divDestino.textContent=divDestino.textContent.toLowerCase()})




}



var collection = document.getElementsByTagName("li");
var text = "[Ok]"
for (var i = 0; i < collection.length; i++) {
    text +='\n'+collection[i].tagName;
}
console.log(text)













































