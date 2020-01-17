import React from 'react'
import EnergyMetre from './EnergyMetre'

const CatInfo = props => {

    if(!props.catInfo) return <h2>cat info loading...</h2>

    const catEnergy = props.catEnergy
    const setCatEnergy = props.setCatEnergy
    const selectedCat = props.selectedCat
    
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
            <h1>{props.catInfo[0].breeds[0].name}</h1>
            <p>{props.catInfo[0].breeds[0].description}</p>
            </div>
            <EnergyMetre catEnergy={catEnergy} setCatEnergy={setCatEnergy} selectedCat={selectedCat}/>
            <img src={props.catInfo[0].url} alt={`${props.catInfo[0].breeds[0].name} cat`}></img>
        </div>
    )
}

export default CatInfo
