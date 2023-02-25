const formLogin = document.getElementById('login');
const inputEmail = document.getElementById('email');
const inputpassword = document.getElementById('password');

formLogin.addEventListener('submit',(e) =>{
    e.preventDefault()
    fetch('api/session/login',{
        method:'post',
        headers:{
            'content-type':'aplication/json'
        },
        body:JSON.stringify({UserEmail:inputEmail.value, password:inputpassword.value}),
    }).then(res => res.json()).then(data=>{
        window.alert(`Bienvenido ${data.UserEmail}`)
    }).catch((error) =>{
        window.alert('error al iniciar session')
    })
})