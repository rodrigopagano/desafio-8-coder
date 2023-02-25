let loginregister = document.getElementById('loginRegister')
let nombre = document.getElementById('nombreRegister')
let apellido = document.getElementById('apellidoRegister')
let email = document.getElementById('emailRegister')
let password = document.getElementById('passwordRegister')

loginregister.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(nombre.value)
    console.log(apellido.value)
    console.log(email.value)
    console.log(password.value)
    fetch('api/session/resgister',{
        method:'post',
        headers:{
            'content-type':'aplication/json',
        },
        body:JSON.stringify({
            firstName:nombre.value,
            lastName:apellido.value,
            UserEmail:email.value,
            password:password.value
        }),
    }).then (res => res.json()).then(data=>{
        console.log(data)
        window.alert('usuario creado')
        window.location.href='/login'
    }).catch((error)=>{
        window.alert('error al iniciar session')
    })
})