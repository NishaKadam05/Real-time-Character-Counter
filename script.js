function Counter(){
    const txt=document.getElementById("text");
    const totalChar=document.getElementById("total")
    const remaining=document.getElementById("rem");
    const maxChar=50;

    txt.addEventListener("input",function(){
        const len=txt.value.length;
        totalChar.innerHTML="Total Characters : "+len;
        remaining.textContent="Remaining : "+(maxChar-len);
        if(len>=maxChar)
        {
            txt.value=txt.value.substring(0,maxChar);
            remaining.innerHTML="Total Characters : "+0;
            totalChar.innerHTML="Remaining : "+50;
        }
    })
}

