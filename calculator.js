

try {
    
    // console.log("hello");
    let abc="";
    let buttons=document.querySelectorAll('.btn');
    // let msn=[];
    
    Array.from(buttons).forEach((button)=>{
        // msn.push(button.innerHTML);
        // alert(msn);
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML=="="){
                let s=document.querySelector('.input-field').value.toString();
                let sh=eval(s);
                // alert(sh);
            document.querySelector('.input-field').value=sh;
                // abc=sh;
                // alert(abc);

            }
            else if(e.target.innerHTML=="C"){
                abc="";
            document.querySelector('.input-field').value=abc;

            }
            else if(e.target.innerHTML=="CE"){
                abc=Array.from(document.querySelector('.input-field').value);
                abc.pop();
                let h=abc.toString();
                let k=h.replace(/,/g,'');
            document.querySelector('.input-field').value=k;
                // alert(abc);
            }
            else{
                abc=document.querySelector('.input-field').value + e.target.innerHTML;
            document.querySelector('.input-field').value=abc;
            }
            
            
        })
    })

} catch (error) {
    alert(error.message);
}
