function create(words) {
   let content = document.getElementById('content');
   

   for(let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      div.appendChild(p);
      content.appendChild(div);
      p.innerText = word;

      p.style.display = 'none';
      div.addEventListener('click', ()=> {p.style.display = 'block'})

   }
 
}