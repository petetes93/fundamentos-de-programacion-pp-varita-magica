//! 1 evitar comportamiento

const href =document.querySelector('section')

href.addEventListener('click', function (event){
    event.preventDefault()
    console.log(href);
})

//! 2.1

const figuras = document.querySelectorAll('img')
for (let i = 0; i < figuras.length; i++) {
    figuras[i].addEventListener('click', function(event){
        event.target.src="assets/magic-1.gif"  
        
    })
     
}

//! 2.2

const text = document.querySelectorAll('section p')
for (let i = 0; i < text.length; i++) {
    
    text[i].addEventListener('click', function() {
        
    text[i].style.backgroundColor = "red"
    text[i].style.color = "yellow"
    })
        
}


//!2.3

const sec = document.querySelectorAll('section')
for (let i = 0; i < sec.length; i++) {
    
    sec[i].addEventListener('click', function() {
        
        sec[i].style.backgroundColor = "blue"
        
    })
        
}

//! 3.1
const figura = document.querySelectorAll('img')

figura.forEach(function (figura) {
    let url =  figura.src
    figura.addEventListener('mouseover', function(event){
        event.target.src="assets/abracadabra.gif"
    }),
    figura.addEventListener('mouseout', function(event){
        event.target.src= url
})
}
    
);



//!3.2

const texto1 = document.querySelectorAll('p')

texto1.forEach(function (texto1) {
    let txt =  texto1.style.backgroundColor
    let txt1 =  texto1.style.color
    texto1.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = "purple"
        event.target.style.color = "red"
    })
    texto1.addEventListener('mouseout', function(event){
        event.target.style.backgroundColor = txt
        event.target.style.color = txt1
    })
});

//!3.3


const sect = document.querySelectorAll('article')

sect.forEach(function (sect) {
    let txt =  sect.style.backgroundColor
   
    sect.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = "black"
        
    })
    sect.addEventListener('mouseout', function(event){
        event.target.style.backgroundColor = txt
        
    })
});












/*
const figura = document.querySelectorAll('img')
for (let i = 0; i < figuras.length; i++) {
    figura[i].addEventListener('mouseover', function(event){
        event.target.src="assets/abracadabra.gif"
          
    })
     
}
*/