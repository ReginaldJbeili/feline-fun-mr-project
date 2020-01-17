import React from 'react'
import EnergyMetre from './EnergyMetre'

const CatInfo = ({catInfo,catEnergy,setCatEnergy,selectedCat}) => {

    if(!catInfo) return <h2>cat info loading...</h2>

    const socialNeeds = `social needs ${catInfo[0].breeds[0].social_needs}`
    const healthIssues = `health issues ${catInfo[0].breeds[0].health_issues}`
    console.log("this is all info we need", [socialNeeds,healthIssues]);
    
    if(catEnergy===0) {
        return (
            <div>
                <h1 className="lose">YOU LOSE!</h1>
                <iframe title="you lose" src="https://giphy.com/embed/YmVNzDnboB0RQEpmLr" 
                        width="480" 
                        height="438" 
                        frameBorder="0"
                         allowFullScreen>
                </iframe>
            </div>
        )
    }

    return (
        <div>
            <div className="frame">
            <h1>{catInfo[0].breeds[0].name}</h1>
            <p>{catInfo[0].breeds[0].description}</p>
            </div>
            <EnergyMetre catEnergy={catEnergy} setCatEnergy={setCatEnergy} selectedCat={selectedCat}/>
            <img src={catInfo[0].url} alt={`${catInfo[0].breeds[0].name} cat`}></img>
        </div>
    )
}

export default CatInfo
