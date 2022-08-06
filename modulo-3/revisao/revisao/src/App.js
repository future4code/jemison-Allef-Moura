import HomePage from './components/pages/HomePage';
import DetailsPage from './components/DetalsPage/DetailsPage';
import { GlobalStyle } from './GlobalStyle';
import { results } from './Data/data';




function App() {
  return (
    <div>
      <GlobalStyle/>
      <HomePage results={results}/>
    
    </div>
  );
}

export default App;
