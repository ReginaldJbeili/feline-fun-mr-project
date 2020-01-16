import React from 'react'
import getAllCatBreeds from '../utils/getAllCatBreeds';

const CatDropdown = () => {
    const [catData, setCatData] = React.useState(null);

    React.useEffect(() => {
        getAllCatBreeds().then(data => setCatData(data));
    }, []);

    console.log('This is all the cat data', catData);

    if (!catData) {return <h2>Loading...</h2>}

    // // use chosenCat.value to find the selected cat
    // let chosenCat = document.getElementById("chosenCat");
    // let chooseCatBtn = document.getElementById("chosenCatBtn");

    // chooseCatBtn.addEventListener('click', ()=> {
        
    //     console.log("This is the cat I choose!", chosenCat)
    // })
    return (
        <div>
            <select id="chosenCat">
                    {catData.map( cats => {
                        return (<option key={cats.id}> {cats.name} </option>)
                    }

                    )}
            
            </select>
            <button id="chooseCatBtn"> Play the Game! </button>
        </div>
    )
    
}




export default CatDropdown
