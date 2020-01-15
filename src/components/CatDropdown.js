import React from 'react'
import getAllCatBreeds from '../utils/getAllCatBreeds';

const CatDropdown = () => {
    const [catData, setCatData] = React.useState(null);

    React.useEffect(() => {
        getAllCatBreeds().then(data => setCatData(data));
    }, []);

    console.log('This is all the cat data', catData);

    if (!catData) {return <h2>Loading...</h2>}

    return (
        <select>

                {catData.map( cats => {
                    return (<option key={cats.id}> {cats.name} </option>)
                }

                )}
        
        </select>
    )
}

export default CatDropdown
