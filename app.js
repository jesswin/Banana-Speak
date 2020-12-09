var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");
//var ServerURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
var ServerURL="https://api.funtranslations.com/translate/minion.json?text=";

btnTranslate.addEventListener("click", clickFunc);

function constructUrl(text) {
      console.log(ServerURL + text);
      return ServerURL + text;
      
}

function errorHandler(error) {
      console.log(error, "error occured");
      alert("An error Occured , Please Try after Sometime!");
}

function clickFunc() {
      var inputText = txtInput.value;
      fetch(constructUrl(inputText)).then(response => response.json()).then(json => {
            var textTranslated = json.contents.translated;
            outputDiv.innerText = textTranslated;
      }).catch(errorHandler);
      // we can access translated using [''] like maps
      // outputDiv.innerText="anannana "+ txtInput.value;
      // console.log(outputDiv.innerHTML);
}

txtInput.addEventListener("focusin",increaseHeight);
txtInput.addEventListener("blur",decreaseHeight);

function increaseHeight(){
document.querySelector("html").style.minHeight="200%";
}
function decreaseHeight(){
      document.querySelector("html").style.minHeight="100%";
}


