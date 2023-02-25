const buttonNEXT = document.getElementById('next')
const buttonPREV = document.getElementById('prev')
const page = document.getElementById('page').innerText;

buttonNEXT.addEventListener('click', () =>{
    window.location.replace(`/products/?page=${parseInt(page)+1}`)
});

buttonPREV.addEventListener('click',()=>{
    window.location.replace(`/products/?page=${parseInt(page)-1}`)
});