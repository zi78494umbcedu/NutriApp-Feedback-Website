//allowed applications' names
var texts = ["chrome", "gmail", "music"];
//getting key of the element
var keys= document.getElementById('key');
//options in the dropdown of label modality 
var mods = ["default", "min_info", "linear", "html"];
//getting key of modality element
var app = document.getElementById('mod');
//key for the submit button
var but=document.getElementById('sb');

//function for displaying the label on click
function label(){
    //application name input caseless 
    var appName = (key.value).toLowerCase();
    //application name not entered wrong or empty submission
    if(texts.indexOf(appName)==-1){
        document.write(keys.value+" <b> Please enter the name of an application</b>");
    } 
    //application name allowed and default label design selected
    else  {
        //default label design
        if(mods.indexOf(app.value)===0){
            document.write('<div style="text-align:center"><img src="/Users/ashwingupta/eclipse-workspace/NutriApp-Feedback-Website/labels/default.png" style="width:300px;height:1000px;" alt="Google Chrome Linear Design"></div>');
        //minimum and html modality
        }else if(mods.indexOf(app.value)=== 1){
            document.write('<div style="text-align:center"><img src="/Users/ashwingupta/eclipse-workspace/NutriApp-Feedback-Website/labels/minimum.png" style="width:300px;height:700px;" alt="Google Chrome Linear Design"></div>');
        }
        else if(mods.indexOf(app.value)===3){
            //document.write('');
            var url="/Users/ashwingupta/Downloads/main.html"
            document.write("<a href='"+url+"'>LINK</a>");
        }
        //application name allowed and linear label design selected
        else{
            document.write('<div style="text-align:center"><img src="/Users/ashwingupta/eclipse-workspace/NutriApp-Feedback-Website/labels/linear.png" style="width:750px;height:300px;" alt="Google Chrome Linear Design"></div>');
        } 
    }
}
//click event trigger
but.addEventListener('click', label);