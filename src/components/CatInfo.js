import React from 'react'
import getCatInfo from '../utils/getCatInfo';

const CatInfo = () => {
    const [catInfo, setCatInfo] = React.useState(null);

    React.useEffect(() => {
        const breedId = 'drex';
        getCatInfo(breedId).then(data => setCatInfo(data))
    }, [])
    console.log(catInfo);

    if(!catInfo) return <h2>cat info loading...</h2>

    {const catEnergy = `energy ${catInfo[0].breeds[0].energy_level}`
    const socialNeeds = `social needs ${catInfo[0].breeds[0].social_needs}`
    const healthIssues = `health issues ${catInfo[0].breeds[0].health_issues}`
    console.log("this is all info we need", [catEnergy,socialNeeds,healthIssues]);
    }
    return (
        <div>
            <h1>{catInfo[0].breeds[0].name}</h1>
            <p>{catInfo[0].breeds[0].description}</p>
            <img src={catInfo[0].url} alt={`${catInfo[0].breeds[0].name} cat`}></img>
        </div>
    )
}

export default CatInfo
