import React from 'react'

const EnergyMetre = ({catEnergy,setCatEnergy,selectedCat}) => {
    
    // const [catEnergy, setCatEnergy] = React.useState(5)
// console.log(props);
    React.useEffect(() => {
        
        const energyCount = setInterval(() => {
            setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy === 0) {clearInterval(energyCount)
                return prevCatEnergy = 0}
                return prevCatEnergy-1
            })
        }, 1500)
        // return (() => clearInterval(energyCount))
    
    },[selectedCat])


    const [disableFeed, setDisableFeed] = React.useState(false)
    const [disablePlay, setDisablePlay] = React.useState(false)

    return (
        <div>
          <progress max="5" value={`${catEnergy}`}></progress>
          <div className="btnFlex">
              <button className="feedBtn" disabled={disableFeed} onClick={() => {
                
              setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisableFeed(!disableFeed)
                    setTimeout(() => {setDisableFeed(disableFeed)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                    setDisableFeed(!disableFeed)
                    setTimeout(() => {setDisableFeed(disableFeed)},1500)
                return prevCatEnergy +1
            })
            }}>FEED</button>
    
          <button className="playBtn" disabled ={disablePlay} onClick={() => {
                setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisablePlay(!disablePlay)
                    setTimeout(() => {setDisablePlay(disablePlay)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisablePlay(!disablePlay)
                setTimeout(() => {setDisablePlay(disablePlay)},1000)
                return prevCatEnergy +1
          })
          }}>PLAY</button>
          </div>
        </div>
    )
}

export default EnergyMetre
