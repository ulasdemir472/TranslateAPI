function UI(language,text){
    const image = document.getElementById("outputImage");
    const langText = document.getElementById("outputLanguage"); 

    image.src = `images/${language}.png`;
    langText.innerText = text;
}













