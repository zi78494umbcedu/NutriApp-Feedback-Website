var texts = ["chrome", "gmail", "music"];
var keys= document.getElementById('key')
var but=document.getElementById('sb')

function label(){
    if(texts.indexOf(key.value)==-1){
        document.write(Keys.value+" <b>Not Found</b>");
    }
    else if (texts.indexOf(key.value)==0||1||2){
        document.write('<div style="text-align:center"><img src="/Users/ashwingupta/Desktop/ESL_research/designs/linear.png" style="width:750px;height:300px;" alt="Google Chrome Linear Design"></div>');
    }
}
but.addEventListener('click', label);
