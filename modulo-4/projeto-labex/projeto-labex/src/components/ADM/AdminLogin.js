import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


function AdminHome() {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault()

    
  }

  const navigate = useNavigate();

    const goToAdminHome = () => {
      navigate ('/AdminHome')
    } 
  
    const goToHome = () => {
      navigate(-1)
  }


  return (
    <DivAdm>
      
      <FormContainer>
        <ButtonHome onClick={goToHome}>Home</ButtonHome>
        <form onSubmit={handleSubmit}>
          <h1>Login Admin</h1>
          <div>
            <label htmlFor='Email'>
              <input  
              type="email"  
              name='email' 
              id='email' 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </label>
          </div>
          <div> 
            <label htmlFor='Password'>
              <input  
              type="password" 
              name='password' 
              id='password' 
              placeholder='Passworld'
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>
          <div className='divButton'>
            <ButtonEnter onClick={goToAdminHome}>Enter</ButtonEnter>
          </div>
        </form>
      </FormContainer>
    </DivAdm>
  )
}

export default AdminHome


const DivAdm = styled.div `
  background-color: #011640;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`

const FormContainer = styled.section `
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
  h1{
    font-family: "Jolly Lodger", cusrive;
    font-size: 60px;
    color: #8bcf21;  
    margin-bottom: 50px;
  }

  input {
    height: 30px;
    margin-bottom: 20px;
    width: 250px;
    border-radius: 33px 33px 33px 33px;
    padding: 8px;
    border-color: #8bcf21;
    font-family:'Alumni Sans Pinstripe', cursive ;
    font-size: 18px;
    font-weight: bold;
    
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

  button {
    padding: 0.3rem;
    width: 80px;
  }
`

const ButtonHome = styled.button `
  cursor: pointer;
  margin: 0 10px 0 5px;
  height: 30px;
  padding: 0 6px 0 6px;
  border-radius: 33px 33px 33px 33px;
  color: white;
  background-color: black;
  font-family: 'Jolly Lodger', cursive;
  font-size: 24px;
  border: none;
  margin-bottom: 30px;
  


  :hover{
    
    color: black;
    background-color:#8bcf21 ;
    box-shadow: 3px 0 3px 3px #8bcf21 ;
    
  }

`

const ButtonEnter = styled.button `
   cursor: pointer;
  margin: 0 10px 0 5px;
  height: 30px;
  padding: 0 6px 0 6px;
  border-radius: 33px 33px 33px 33px;
  color: white;
  background-color: black;
  font-family: 'Jolly Lodger', cursive;
  font-size: 24px;
  border: none;
  margin-bottom: 30px;
  


  :hover{
    
    color: black;
    background-color:#8bcf21 ;
    box-shadow: 3px 0 3px 3px #8bcf21 ;
    
  }

`