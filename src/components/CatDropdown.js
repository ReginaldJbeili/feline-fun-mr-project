import React from 'react'
// import getAllCatBreeds from '../utils/getAllCatBreeds';

const CatDropdown = ({catData, selectedCat, setSelectedCat}) => {


    if(!catData) {return <h2>Loading...</h2>}

    return (
        <div>
      
            <select className="select" 
                    aria-label="Select Cat" 
                    value={selectedCat} 
                    onChange = {event => {  setSelectedCat(event.target.value) }}>
                    {catData.map( cats => {

                        return (<option key={cats.id} value={cats.id}> {cats.name} </option>)
                    }
                    )}
            
            </select>
        </div>
    )
    
}




export default CatDropdown
