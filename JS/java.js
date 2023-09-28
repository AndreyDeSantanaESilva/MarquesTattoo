function toggleMode(){
    const html = document.documentElement 
   // if(html.classList.contains('claro')) {
   //    html.classList.remove('claro')
   //   } else {
   // html.classList.add('claro')    }
    html.classList.toggle('claro') //Resumo da função a cima. 
   // pegar a tag img
   const img = document.querySelector("#profile img")
   // substituir a imagem
   if (html.classList.contains("claro")) {
    //se estiver claro, add nova imagem
    img.setAttribute("src", "./CSS/Img/MRQS__TATTOO-removebg-preview.png")
   }
   // se tiver sem modo claro, manter a imagem normal 
   else{
    img.setAttribute("src", "./CSS/Img/Marques.jpeg")
   }
   


}
