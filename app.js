const outputWord = document.getElementById("outputWord"); //çevirinin gösterileceği yer
const sel = document.getElementById("language");
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    // Change
    document.getElementById("language").onchange = function(){
        //arayüz
        const ui = new UI(sel.value,sel.options[sel.selectedIndex].text)
    }


}

const translate = new Translate(document.getElementById("word").value,sel.value);

function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,sel.value);
    translate.translateWord(function(err,response){
        if(err){
            console.error(err);
        }
        else{
            outputWord.innerText = response;
            console.log();
        }

    });

    e.preventDefault();
}




