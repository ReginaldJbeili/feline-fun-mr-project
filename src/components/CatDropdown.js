import React from 'react'
import getAllCatBreeds from '../utils/getAllCatBreeds';

const CatDropdown = () => {
    const [catData, setCatData] = React.useState(null);

    React.useEffect(() => {
        getAllCatBreeds().then(data => setCatData(data));
    }, []);

    console.log('This is all the cat data', catData);

    return (
        <div>
            
        </div>
    )
}

export default CatDropdown
