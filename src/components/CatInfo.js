import React from 'react'
import EnergyMetre from './EnergyMetre'

const CatInfo = props => {


    if(!props.catInfo) return <h2>cat info loading...</h2>

    const catEnergy = props.catEnergy
    const setCatEnergy = props.setCatEnergy
    const selectedCat = props.selectedCat
    const socialNeeds = `social needs ${props.catInfo[0].breeds[0].social_needs}`
    const healthIssues = `health issues ${props.catInfo[0].breeds[0].health_issues}`
    console.log("this is all info we need", [catEnergy,socialNeeds,healthIssues]);
    
    if(catEnergy==0) {
        return (
            <div>
                <h1>YOU LOSE!</h1>
                <iframe src="https://giphy.com/embed/YmVNzDnboB0RQEpmLr" width="480" height="438" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/YmVNzDnboB0RQEpmLr"></a></p>
            </div>
        )
    }

    return (
        <div>
            <h1>{props.catInfo[0].breeds[0].name}</h1>
            <p>{props.catInfo[0].breeds[0].description}</p>
            <EnergyMetre catEnergy={catEnergy} setCatEnergy={setCatEnergy} selectedCat={selectedCat}/>
            <img src={props.catInfo[0].url} alt={`${props.catInfo[0].breeds[0].name} cat`}></img>
        </div>
    )
}

export default CatInfo
