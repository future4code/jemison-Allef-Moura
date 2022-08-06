import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardContainer, DivPai, Div, DivMatch } from './Styles'
import button from '../Matchs/pngegg.png'


function ListOfPPL() {

    const [listMacth, setListMatch] = useState([])
    const [Match, setMatch] = useState([])
    const[matchPage, setMatchPage] = useState(false)


    const listOfMatch = Match?.map ((item, index) =>{
        return (
            <div key={index}>
                <img src={item.photo} alt='imagem do usuario'/>
                <p>{item.name}</p>
            </div>
        )
    })

   
   
    const urlMatchs = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
    const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear'
    const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person' 



    const serviceHeaders = {
        headers: 
            {Authorization: 'allef-jemison'}}
    
    
    const bodyYes ={
        "id":listMacth.id,
        "choice": true
    }
    
    const bodyNo = {
        "id": listMacth.id,
        "choice": false
    }



    const getProfileToChoose = () => {
        axios.get(url, serviceHeaders )
        .then((response) => {
            setListMatch(response.data.profile);
        })
    }

    const choosePerson = (e) =>{
        e.preventDefault()
        axios.post(urlPost, bodyYes, serviceHeaders)
        .then(() =>{
            getProfileToChoose()
        })
        .catch(() =>{
        })
        setListMatch('')
    }

    const choosePersonNo = (e) => {
        e.preventDefault()
        axios.post(urlPost, bodyNo, serviceHeaders)
        .then(() =>{
            getProfileToChoose()
        })
        .catch(() =>{
        })
        setListMatch('')    
    }

    const getMatches = (e) => {
        e.preventDefault()
        setMatchPage(!matchPage)
        axios.get(urlMatchs, serviceHeaders)
        .then((response) => {
            setMatch(response.data.matches);
        })
    }

    const clear = (e) => {
        e.preventDefault()
        axios.put(urlClear, serviceHeaders)
        .then((response) => {
            setMatch(response.data.matches)
        })
    }

    useEffect(()=>{
        getProfileToChoose()
    },[])

  return (
  
    <DivPai>
        <img width='50px' height='50px' src= {button}onClick={getMatches}/> 
        {matchPage ?
        <>
            <DivMatch>
                {listOfMatch}
            </DivMatch>
        
        
        </>
            
        
           
        :
        <>
       <CardContainer>
            
            <img src={listMacth.photo}  alt='imagem do usuario'/>
            <h2>{listMacth.name}</h2>
            <p>{listMacth.bio}</p>
            <h3>{listMacth.age}</h3>
            <button className='btn first1' onClick={choosePersonNo}>não match</button>
            <button className='btn first' onClick={choosePerson}>Match</button>
        </CardContainer>
       
        <Div>
            <button className='btt dell' onClick={clear}>Debug!</button>
        </Div>
      </>}
    </DivPai>
        
  )
}

export default ListOfPPL