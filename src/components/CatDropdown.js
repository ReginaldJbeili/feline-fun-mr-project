import React from 'react'
// import getAllCatBreeds from '../utils/getAllCatBreeds';

const CatDropdown = props => {


    if(!props.catData) {return <h2>Loading...</h2>}

    return (
        <div>
            <select value={props.selectedCat} onChange = {event => {  props.setSelectedCat(event.target.value) }}>
                    {props.catData.map( cats => {
                        
                        return (<option key={cats.id} value={cats.id}> {cats.name} </option>)
                    }

                    )}
            
            </select>
            <button id="chooseCatBtn"> Play the Game! </button>
        </div>
    )
    
}




export default CatDropdown
