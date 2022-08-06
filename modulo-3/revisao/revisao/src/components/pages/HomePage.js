import Card from '../Card/Card'
import Header from '../Header/Header'
import { HomePageContainer } from './styled'


function HomePage(props) {

  const {results}= props

  const renderList = results.map(char => {
    return (
      <Card
        img = {char.image}
        name = {char.name}
        species = {char.species}
        />
    )
  })
  return (
    <HomePageContainer>
      <Header/>
        <main>
          {renderList}
        </main>
    </HomePageContainer>
  )
}

export default HomePage