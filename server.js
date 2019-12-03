const express= require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false})); 
app.use(express.json());

app.use((req, res, next) => {
  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Content-Type', 'application/json')
  
    next()
  })


  app.listen(port,(err)=>{
      if(err) Console.log(err)

      console.log(`http://localhost:${port}`)
  })

  
app.get('/peoples/:id',(req,res)=>{
 
    let id = req.params.id
    let respuesta;
  axios.get(`https://swapi.co/api/people/${id}`).then(resp =>{
    respuesta = resp;
      console.log(respuesta)

     
  })

  res.status(200).send({respuesta});
  
    
});
  