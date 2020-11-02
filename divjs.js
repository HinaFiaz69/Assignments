function mul() {
    var num1=document.getElementById("Num1").value;
    var num2=document.getElementById("Num2").value;
    var ans=num1*num2;
    alert("multiplication: "+num1+" * "+num2+" = "+ans);
}
function div() {
    var num1=document.getElementById("Num1").value;
    var num2=document.getElementById("Num2").value;
    var ans=num1/num2;
    if (num2=='0') {
        alert("Denominator could not be zero!");
    }
    else{
    alert("division "+num1+" / "+num2+" = "+ans);
    }
}