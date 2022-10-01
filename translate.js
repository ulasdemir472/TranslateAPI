function Translate(word,language){
    this.apikey = APIKEY
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
    // Ajax 
    const endpoint = `https://api.mymemory.translated.net/get?q=${this.word}&langpair=tr|${this.language}&key=${this.apikey}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.responseData.translatedText;
            callback(null,text);
            
        }else{
            callback("Bir hata olustu",null);
        }

    }

    this.xhr.send();
};


Translate.prototype.changeParameters = function(newWord,newLang){
    this.word = newWord;
    this.language = newLang;
};








