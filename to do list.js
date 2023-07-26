var input=document.getElementById("itemadd");
var list=document.getElementById("disp");
function addItems(){
    if(input.value==""){
        alert("Type something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
        let br=document.createElement("br");
        br.innerHTML="\n";
        list.appendChild(br);
        let br1=document.createElement("br");
        br1.innerHTML="\t";
        list.appendChild(br1);
        let br2=document.createElement("br");
        br2.innerHTML="\t";
        list.appendChild(br2);
    }
    input.value="";
}
list.addEventListener("click",function(e){
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);
