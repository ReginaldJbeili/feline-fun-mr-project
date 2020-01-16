import React from 'react'
import getCatInfo from '../utils/getCatInfo';

const CatInfo = () => {
    const [catInfo, setCatInfo] = React.useState(null);

    React.useEffect(() => {
        const breedId = 'drex';
        getCatInfo(breedId).then(data => setCatInfo(data))
    }, [])
    console.log(catInfo);
    return (
        <div>
            
        </div>
    )
}

export default CatInfo
