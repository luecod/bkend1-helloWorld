// importar expres desde express
const express = require('express')

//esta variable es una aplicaicon de backend creada
const app = express()

//la ruta que vamos a ubicar, es donde vamos a enviar la respuesta
// app.get('/user', (peticion, respuesta) => {
//   console.log('hola')
//   respuesta.json({
//     message: 'Hola mundo'
//   })
// })

// app.post('/user', (peticion, respuesta) => {
//   respuesta.json({
//     message: 'Adios gente bonita'
//   })
// })




// actividad About me
app.post('/hobbies', (peticion, respuesta) => {
  respuesta.json({
    message: ['jugar', 'ver series y anime', 'configurar mi Pc']
  })
})

app.patch('/jobs', (peticion, respuesta) => {
  respuesta.json({
    message: ['globant', 'twitter', 'facebook', 'google']
  })
})

app.get('/me', (peticion, respuesta) => {
  respuesta.json({message: 'Luis Valladolid'})
})

app.delete('/me', (peticion, respuesta) => {
  respuesta.json({message: '25 años'})
})

app.post('/me', (peticion, respuesta) => {
  respuesta.json({message: 'Ecuador'})
})



// aqui se configura el puerto en el que vamos a estar escuchando
//? localhost:9000
app.listen(9000, () => {
  //esto solo se va a mostrar cuando la api este funcionando, si hay un problema no funcionará
  console.log('El servidor se inicio en http://localhost:9000')
}) 
