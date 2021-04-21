import express, { request, response } from "express";

const app = express();

app.get("/", (request,response) =>{
   return  response.json({
      resposta : "Olá"
   })
});

app.post("/users",(request,response)=>{
   return response.json({mensege : "Usuario salvo com sucesso"})
});
app.listen(3333,() => console.log("Server is running port 3333"));