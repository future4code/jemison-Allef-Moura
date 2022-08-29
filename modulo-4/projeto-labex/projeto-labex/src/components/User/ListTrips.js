import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useRequestData } from '../../Hooks/CustomHooks'
import portal from '../../Assets/portal.gif'


function ListTrips() {
  const [travels, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/allef-souza-jemison/trips')
  const navigate = useNavigate()

  const goToSub = () => {
    navigate('/Subscribe')
  }
  const goToHome = () => {
    navigate('/')
  }
  const ListOfTravels = travels && travels?.map((item,index)=>{
    return(
      <ContainerListOfTravel2>
        <p key={index}>
          <span>
            Name:
          </span>
          {item.name}
        </p>
        <p>  
          <span>
            Description:
          </span>
         {item.description}
        </p>
        <p>
          <span>
            Planet:
          </span>
          {item.planet}
        </p>
        <p>
          <span>
            Duration:
          </span>
          {item.durationInDays}
        </p>
        <p>
          <span>
            Date:
          </span>
          {item.date}
        </p>
      </ContainerListOfTravel2>
  
   )
    
  }) 

  return (
    <>
     
      <ContainerListOfTravel>
        <h1>Travel list</h1>
        <div>
          <Div>
            <button onClick={goToHome}>HOME PAGE</button> 
            <button onClick={goToSub}>SUBSCRIBE</button> 
          
          </Div>
          {isLoading && 
            <Loading>
              <p>Loading Travels...</p>
              <img src={portal}/>
            
            </Loading>}
          {!isLoading && error && <p>Error Loading ...</p> }
          {!isLoading && travels && travels.length >0 && ListOfTravels}
        </div>
      </ContainerListOfTravel>
      
    </>
  )
}

export default ListTrips


//Styled


const ContainerListOfTravel = styled.div `
  background-color: #011640;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
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

const ContainerListOfTravel2 = styled.section `

  
    background-color:#010f2b ;
    border: 1px solid #010f2b;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 300px;
    height: 200px;
    box-shadow: 0.4em 0.4em 0.4em #8bcf21;
  

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