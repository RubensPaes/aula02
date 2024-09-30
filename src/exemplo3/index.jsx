import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState();

  useEffect(() => { 

    const   buscarUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0])
    }
buscarUsuario()
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
     
          <li>
          <h1>{usuario?.gender}</h1>
          </li>   
          
          <li>
          <h1>{usuario?.name.title}</h1>  <h1>{usuario?.name.first}</h1>  <h1>{usuario?.name.last}</h1> 
          </li>

      
          <li>
          <h1>{usuario?.email}</h1>
          </li>  
          <li>
          <h1>{usuario?.phone}</h1>
          </li>
          <li>
          <h1>{usuario?.login.username}</h1>
          </li>
        
      </ul>
    </>
  );
}
