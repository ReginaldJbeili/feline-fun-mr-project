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
        }, 1500)
        // return (() => clearInterval(energyCount))
        // const handleClickFeed = 
    
    },[selectedCat])


    const [disableFeed, setDisableFeed] = React.useState(false)
    const [disablePlay, setDisablePlay] = React.useState(false)

    return (
        <div>
          {/* <h3>{`Energy Level: ${props.catEnergy}/5`}</h3>   */}
          <span>Feed your cat before its' life runs out!</span>
          <progress max="5" value={`${props.catEnergy}`}></progress>
          <button disabled={disableFeed} onClick={() => {
                
                props.setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisableFeed(!disableFeed)
                setTimeout(() => {setDisableFeed(disableFeed)},1500)
                return prevCatEnergy +1
            })
            }}>FEED</button>
    
          <button disabled ={disablePlay} onClick={() => {
                props.setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisablePlay(!disablePlay)
                setTimeout(() => {setDisablePlay(disablePlay)},1000)
                return prevCatEnergy +1
          })
          }}>PLAY</button>
        </div>
    )
}

export default EnergyMetre
