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
  const [catEnergy, setCatEnergy] = React.useState(null);

  React.useEffect(() => {
      getCatInfo(selectedCat).then(data => {setCatInfo(data); setCatEnergy(data[0].breeds[0].energy_level)})
  }, [selectedCat])



if(!catEnergy) return <h2>Loading...</h2>

  return (
    <div className="App">
      <header className="App-header">
        
        <CatDropdown catData={catData}  selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <CatInfo catInfo={catInfo} catEnergy={catEnergy} />
        
      </header>
    </div>
  );
}

export default App;
