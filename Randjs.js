function randNum() {
    var a=Math.ceil(11*(Math.random()));
    if(a==document.getElementById("Num")){
        alert("Your answer is Right! \nCorrect answer is "+a);
    }
    else{
        alert("Your answer is wrong! \nCorrect answer is "+a);
    }
}