import React from 'react';
import './App.css';
import CatDropdown from './components/CatDropdown';
import CatInfo from './components/CatInfo';
import getAllCatBreeds from './utils/getAllCatBreeds'
import getCatInfo from './utils/getCatInfo'

const App = () => {
  const [catData, setCatData] = React.useState(null); 
  React.useEffect(() => {
      getAllCatBreeds().then(data => setCatData(data));
  }, []);

  const [catInfo, setCatInfo] = React.useState(null);
  const [selectedCat, setSelectedCat] = React.useState("abys")

  React.useEffect(() => {
      getCatInfo(selectedCat).then(data => {setCatInfo(data);})
  }, [selectedCat])


  return (
    <div className="App">
      <header className="App-header">
        
        <CatDropdown catData={catData}  selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <CatInfo catInfo={catInfo}  />
        
      </header>
    </div>
  );
}

export default App;
