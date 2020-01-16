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
