function result(i,j) {
    if(i==j) {
        d=0;
    }
    else if (j==(i+1)%3) {
        d=-1;
    }else {
        d=1;
    }
    return d;
}
function print_output(d){
    var sp=document.createElement("span");
    sp.setAttribute("id", "label");
    sp.setAttribute("class","output");
    your_score=parseInt(document.getElementById("your_score").innerText);
    compter_score=parseInt(document.getElementById("comp_score").innerText);

    if (d==0) {
        bgcolor="blue";
        res="draw";
    }else if (d==1) {
        bgcolor="green";
        res="you won";
        your_score+=1;
    }else {
        bgcolor="red";
        res="you lost";
        compter_score+=1;
    }

    document.getElementById("your_score").innerText=your_score;
    document.getElementById("comp_score").innerText=compter_score

    document.getElementById("comp").style.backgroundColor=bgcolor;
    document.getElementById("comp").style.color="white";
    var text  = document.createTextNode(res);
    sp.appendChild(text);
    sp.style.backgroundColor=bgcolor;
    sp.style.color="white";
    document.getElementById("span").appendChild(sp);


}
function computerchose(j) {
    document.getElementById("span").innerHTML='';
    if (j==0) {
        d='rock';
    }else if (j==1) {
        d='paper';
    }else {
        d='scissors';
    }
    console.log(d);
    var sp = document.createElement("span");
    sp.setAttribute("class","output");
    sp.setAttribute("id","comp");
    var text  = document.createTextNode("computer chose "+d.toString());
    sp.appendChild(text);
    document.getElementById("span").appendChild(sp);

}
function get_result(i) {
    let min = 0;
    let max = 2;
    let j = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(j);
    computerchose(j);
    print_output(result(i,j));
}
document.getElementById("button1").addEventListener('click',()=>{
    get_result(0);
})
document.getElementById("button2").addEventListener('click',()=>{
    get_result(1);
})
document.getElementById("button3").addEventListener('click',()=>{
    get_result(2);
})