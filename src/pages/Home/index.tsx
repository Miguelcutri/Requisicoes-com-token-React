import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () =>{

const usuario = useRef<HTMLInputElement>(null)
const senha = useRef<HTMLInputElement>(null)


const cadastrar= () => {
  

  const requisicao ={
    email: usuario.current?.value,
    password: senha.current?.value
  }

  axios.post('http://localhost:4000/users', requisicao)
  .then (resposta => localStorage.setItem("token", resposta.data.accessToken))
}


return (
  <div className="App">
    <input type="text" placeholder="Usuario" ref={usuario}/>
    <input type="password" placeholder="Senha" ref={senha}/>
    <button onClick={cadastrar}><Link to={"/produto"}>cadastrar</Link></button>


  </div>
);
}

export default Home;