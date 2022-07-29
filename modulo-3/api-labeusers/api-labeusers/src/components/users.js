import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Users() {
    //Variaveisda API
    const [users, setUsers] = useState([]);
    const [input,setInput] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    

    const handleinput = (e) => {
        setInput(e.target.value)
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const allUsers = users.map((user, index) => {
        return (
            <li key={index}>
                {user.name}
                <button onClick={() => delUser(user.id)}>deletar</button>
            </li>
        )
    })

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users?'
    const serviceHeaders = {
        headers: {
            Authorization: 'allef-souza-jemison'
        }
    }

    //REQUISIÇÃO GET
    const getAllUsers = () => {
        axios.get(url, serviceHeaders )
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error.response.data))
    }

    useEffect(() => {
        getAllUsers()
    },[])

    //REQUISIÇÃO POST 

    const body = {
        name: input,
        email: inputEmail
    }

    const postUser = (e) => {
        e.preventDefault();


        axios.post(url, body, serviceHeaders)
        .then((response) => {
            getAllUsers()
            alert('Usuário cadastrado com sucesso!')
            setInput('')
        }).catch((error) => {
            alert('Tente novamente!')
        })
        
    }


    //Deletar 


    const delUser = (id) => {
        
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, serviceHeaders)
        .then((response) => {
            getAllUsers()
            alert('Deletado com sucesso!')

        }).catch((error) => {
            alert('Tente novamente!')
            console.log(error.response)
        })
    }

  return (
    <div>
        {allUsers}
        <form>
            <input 
                type='text'
                placeholder='insira o seu nome.'
                value={input}
                onChange={handleinput}
            />
            <input 
                type='text'
                placeholder='Insira seu email.'
                value={inputEmail}
                onChange={handleInputEmail}
            />
            <button onClick={postUser}>Adicionar</button>
        </form>
    </div>
  )
}

export default Users