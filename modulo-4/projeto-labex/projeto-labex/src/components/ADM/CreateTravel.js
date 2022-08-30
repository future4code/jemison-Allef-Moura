import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import styled from 'styled-components'
import { BASE_URL } from '../../MocksDados/mocks'
import axios from 'axios'
import {useForm} from '../../Hooks/CustomHooks'
import { TOKEN } from '../../MocksDados/mocks'

function CreateTravel() {
  const [form, onChange, clear ] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  }); 

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/allef-souza-jemison/trips', {
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZNeE1NNDVnMEFiMk9xUEszb0lWIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NjEyOTI4Nzh9.3v5dQGK0Dl6DZlgFqCMphkVonCZTNlDo5AMrXDlJPaU'
      }
    })
    .then((res)=>{
      console.log(res.data)
    }).catch((error)=>{
      console.log('deu ruim')
    })
    clear();
  }
  
  const {logout} =  useContext(AuthContext)
  const handleLogout = () => {
    logout();
  }
  
  const navigate = useNavigate()
  
  const goToHome = () => {
    navigate(-1)
  }


  return (
    <>
      
     
  <ContainerTravelSubs>
      <Div>
      <button onClick={goToHome}>BACK</button>
      <button onClick={handleLogout}>LOGOUT</button>
      </Div>
    <FormContainer>
      
      
      <form onSubmit={handleClick}>
      <h1>CREATE A TRAVEL</h1>
    
      <input
        type='text'
        placeholder='Travels name'
        name='name'
        value={form.name}
        onChange={onChange}
      />
      <select
        name='planets'
        value={form.planet}
        onChange={onChange}
      >
      <option label='Select a planet ...' selected='selected'/>
      <option value="Mercury">Mercury</option>
      <option value="Venus">Venus</option>
      <option value="Mars">Mars</option>
      <option value="Jupiter">Jupiter</option>
      <option value="Saturn">Saturn</option>
      <option value="Uranus">Uranus</option>
      <option value="Neptune">Neptune</option>
      

    </select>  
    
    
    <input
      type='date'
      min='2023-01-01'
      name='date'
      value={form.date}
      onChange={onChange}
    />
     <input
      type='text'
      placeholder='Description'
      name='description'
      value={form.description}
      onChange={onChange}
     />
   
    <input
      type='number'
      placeholder='Duration in days'
      name='durationInDays'
      value={form.durationInDays}
      onChange={onChange}
    />
   
    
      <button>SUBSCRIBE TO TRAVEL</button>
      </form>
    
    
      </FormContainer>
    </ContainerTravelSubs>
  </>
  )
}

export default CreateTravel


const ContainerTravelSubs = styled.div `
background-color: #011640;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

button {
cursor: pointer;
margin: 0 10px 10px 5px;
height: 30px;
padding: 0 6px 0 6px;
border-radius: 33px 33px 33px 33px;
color: white;
background-color: black;
font-family: 'Jolly Lodger', cursive;
font-size: 20px;
border: none;
}

button:hover{

color: black;
background-color:#8bcf21 ;
box-shadow: 3px 0 3px 3px #8bcf21 ;

}

`

const FormContainer = styled.section `
display: flex;
flex-direction: column;
width: 600px;
margin-bottom: 100px;
align-items: center;
justify-content: center;
padding: 0 2rem;
text-align: center;
h1{
font-family: "Jolly Lodger", cursive;
font-size: 40px;
color: #8bcf21;  
margin-bottom: 50px;
}

input, select {
height: 40px;
margin-bottom: 20px;
width: 300px;
border-radius: 33px 33px 33px 33px;
padding: 0 0 0 15px ;
border-color: #8bcf21;
font-family:'Alumni Sans Pinstripe', cursive ;
font-size: 23px;
font-weight: 900;
-webkit-appearance:none;

:hover {
border-color:#ffcb16;
}    
}

form{
background-color: #010f2b;
width: 100%;
max-width: 700px;
padding: 8.5rem;

}

`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
