function addMore(){
    document.getElementById('error').innerHTML='';
    let name =document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="please enter a value"
    }else{
      let box = document.getElementById('box');
      let li = document.createElement('li');
      li.textContent=name;
      let a= document.createElement('a');
      a.textContent="x";
      a.href="javasript:void(0)";
      a.className="remove";
      li.appendChild(a)
     
      //for insert an element and append element 
      let pos= box.firstElementChild;
      if (pos == null){
   box.appendChild(li);
      }else{
   box.insertBefore(li, pos);
      }

   
     
    }
    document.getElementById('name').value=" "
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
})