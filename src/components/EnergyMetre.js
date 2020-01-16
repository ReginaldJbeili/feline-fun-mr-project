import React from 'react'

const EnergyMetre = props => {

    // const [catEnergy, setCatEnergy] = React.useState(5)
// console.log(props);
    const selectedCat = props.selectedCat
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
          <h3>{`Energy Level: ${props.catEnergy}/5`}</h3>  
        </div>
    )
}

export default EnergyMetre
