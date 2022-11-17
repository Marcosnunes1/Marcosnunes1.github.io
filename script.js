window.onload = () => {
    var favorito =document.querySelectorAll(".favoritos-1");
     
    for(let i = 0 ; i < favorito.length ; i++) {
         favorito[i].style.opacity = "0.4";
    }
  
    var on_1 = false;  
    var on_2 = false;
    var on_3 = false;
    var on_4 = false;
    var on_5 = false;
    var on_6 = false;
    var on_7 = false;

    favorito[0].onclick = () => {
          
        if ( on_1 == false) {
             favorito[0].style.opacity = 1;
             on_1 = true;
        }
        
        else {
              favorito[0].style.opacity = 0.4;
              on_1 = false;
        }
    }
    
    favorito[1].onclick = () => {
          
        if ( on_2 == false) {
             favorito[1].style.opacity = 1;
             on_2 = true;
        }
        
        else {
              favorito[1].style.opacity = 0.4;
              on_2 = false;
        }
    }
    favorito[2].onclick = () => {
          
        if ( on_3 == false) {
             favorito[2].style.opacity = 1;
             on_3 = true;
        }
        
        else {
              favorito[2].style.opacity = 0.4;
              on_3 = false;
        }
    }
    favorito[3].onclick = () => {
          
        if ( on_4 == false) {
             favorito[3].style.opacity = 1;
             on_4 = true;
        }
        
        else {
              favorito[3].style.opacity = 0.4;
              on_4 = false;
        }
    }
    favorito[4].onclick = () => {
          
        if ( on_5 == false) {
             favorito[4].style.opacity = 1;
             on_5 = true;
        }
        
        else {
              favorito[4].style.opacity = 0.4;
              on_5 = false;
        }
    }
    favorito[5].onclick = () => {
          
        if ( on_6 == false) {
             favorito[5].style.opacity = 1;
             on_6 = true;
        }
        
        else {
              favorito[5].style.opacity = 0.4;
              on_6 = false;
        }
    }
    favorito[6].onclick = () => {
          
        if ( on_7 == false) {
             favorito[6].style.opacity = 1;
             on_7 = true;
        }
        
        else {
              favorito[6].style.opacity = 0.4;
              on_7 = false;
        }
    }
        

}

function pesquisar(){
     const palavra = document.getElementsByClassName('barra')[0].value
     let items = document.getElementsByClassName('Item')

     if(palavra === ""){
          Array.from(items).map(item => item.style.display = 'flex')
     }
     else{
          let result = Array.from(items).filter(item => item.outerText.toLowerCase().includes(palavra.toLowerCase()))
          Array.from(items).map(item => item.style.display = 'none')
          Array.from(result).map(item => item.style.display = 'flex')
     }
}