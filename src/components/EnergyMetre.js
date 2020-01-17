import React from 'react'

const EnergyMetre = props => {
    
    // const [catEnergy, setCatEnergy] = React.useState(5)
// console.log(props);
    const selectedCat = props.selectedCat;
    React.useEffect(() => {
        
        const energyCount = setInterval(() => {
            props.setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy === 0) {clearInterval(energyCount)
                return prevCatEnergy = 0}
                return prevCatEnergy-1
            })
        }, 1000)
        // return (() => clearInterval(energyCount))
    
    },[selectedCat])


    return (
        <div>
          <progress max="5" value={`${props.catEnergy}`}></progress>
          <div className="btnFlex">
            <button className="feedBtn" onClick={(e) => {
                    e.preventDefault()
                    props.setCatEnergy(prevCatEnergy => {
                    if(prevCatEnergy>0 && prevCatEnergy < 5) 
                    return prevCatEnergy +1
                })
            }}>FEED</button>
                <button className="playBtn" onClick={(e) => {
                    e.preventDefault()
                    props.setCatEnergy(prevCatEnergy => {
                    if(prevCatEnergy>0 && prevCatEnergy < 5) 
                    return prevCatEnergy +1
                })
            }}>PLAY</button>
          </div>
        </div>
    )
}

export default EnergyMetre
