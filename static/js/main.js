
let form = document.querySelector('#todoForm'); 
console.log(form); 
let ul = document.querySelector('#todoList'); 

            
form.addEventListener('submit', e => {
e.preventDefault();   


let li = document.createElement('li'); 
li.classList.add('list-group-item');  
li.innerText = e.target.todoInput.value; 

li.addEventListener('mouseenter', function(e){  
    li.classList.add('active');         
});
 
li.addEventListener('mouseleave', function (e) {  
    li.classList.remove('active');         
});

li.addEventListener('click', function (e) {  
    li.classList.remove('active');          
    li.classList.toggle('disabled');       
    if (li.classList.contains('disabled')){
        li.style.textDecoration = 'line-through'
    }
    else {
        li.style.textDecoration = 'none'
    };
    
});
    
ul.appendChild(li);                      

    e.target.todoInput.value = '';
})

let button = document.querySelector('#clearAll'); 
console.log(button)                            
button.addEventListener('click', function (e) {  
    ul.innerHTML = '';                          
})



