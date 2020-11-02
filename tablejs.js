function show() {
    var num=Number(document.getElementById('num').value);
    for (var i=1;i<=10;i++)
    {
        var mul=document.getElementById('print');
        mul.innerHTML += (num*i) + "<br>"
    }
}