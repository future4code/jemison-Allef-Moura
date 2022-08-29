import React, {useContext} from 'react'
import { AuthContext } from '../../context/auth'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../../Hooks/CustomHooks'
import portal from '../../Assets//portal.gif'
import ErrorIMG from '../../Assets/ErrorIMG.png'
function AdminHome() {
  const {logout} =  useContext(AuthContext)
  const handleLogout = () => {
    logout();
  }

  const [travels, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/allef-souza-jemison/trips/Mercury')
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  const goToCreate = () => {
    navigate('/createtravels')
  }

  const ListDetailsTravels = travels && travels?.map((item, index) =>{

  })

  return (
    <>
      <ContainerListOfTravel>
        <h1>Travel list</h1>
        <div>
          <Div>
            <button onClick={goToHome}>HOME PAGE</button> 
            <button onClick={goToCreate}>CREATE TRAVELS</button> 
            <button onClick={handleLogout}>LOGOUT</button>
          </Div>
          {isLoading && 
            <Loading>
              <p>Loading Travels...</p>
              <img src={portal}/>
            
            </Loading>}
          {!isLoading && error && 
          <ErrorCode>
            <img src={ErrorIMG}/>
            <p>Error 404</p>
            
          </ErrorCode> }
          {!isLoading && travels && travels.length >0 && ListDetailsTravels}
        </div>
      </ContainerListOfTravel>
    </>
  )
}

export default AdminHome


const ContainerListOfTravel = styled.div `
  background-color: #011640;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
 
  button {
  cursor: pointer;
  margin: 0 10px 0 5px;
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

  h1{
    font-family: 'Jolly Lodger';
    font-size: 50px;
    color: #8bcf21;
    }
  section {
    background-color:#010f2b ;
    border: 1px solid #010f2b;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 300px;
    height: 200px;
  }

  p{
    font-family:'Alumni Sans Pinstripe', cursive ;
    color: #8bcf21;
    font-size: 18px;
    padding: 2px;
    font-weight: 700;
  }

  span{
    font-family:'Alumni Sans Pinstripe', cursive ;
    color:#ffcb16 ;
    padding: 4px;
    font-weight: 700;
  }
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Loading = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  p{
    font-size: 30px;

  }

  img {
    width: 300px;
    height: 600px;
  }


`

const ErrorCode = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  p{
    font-size: 30px;
    

  }

  img {
    max-height:600px;
    
  }

`