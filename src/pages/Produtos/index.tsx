import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Produtos } from '../../types/produtos'
import '../../index.css'


const Produto = () => {
    const [produtos, setProdutos] = useState<any>([])

    
    useEffect(() =>{
    const token = localStorage.getItem("token")

    const headers = {
      'Authorization': `Bearer ${token}` 
    }
        axios.get("http://localhost:4000/products", {headers: headers})
    .then ( resposta => setProdutos(resposta.data))
    
    }, [])
    

  
  return (
    <div>
      {produtos.map((item: Produtos) => (
        <ul>
          <li>
          <p>
            Nome do produto:  {item.title}
          </p>
          <p>
            Preço: R$ {item.price}
          </p>
          <p className="width-image">
          <img src={item.image} alt=""/>
          </p>
          <p>
            {item.description}
          </p>
          </li>
        </ul>
        
      ))}
      
      
    </div>
  );
}

export default Produto;