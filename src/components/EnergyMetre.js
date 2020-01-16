import React from 'react'

const EnergyMetre = props => {

    const [catEnergy, setCatEnergy] = React.useState(5)
// console.log(props);
    React.useEffect(() => {
        const energyCount = setInterval(() => {
            setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy === 0) {clearInterval(energyCount)
                return prevCatEnergy = 0}
                return prevCatEnergy-1
            })
        }, 1000)
        // return (() => clearInterval(energyCount))
    },[])
    return (
        <div>
          <h3>{`Energy Level: ${catEnergy}/5`}</h3>  
        </div>
    )
}

export default EnergyMetre
