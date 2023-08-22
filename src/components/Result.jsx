import useWeather from "../hooks/useWeather"

const Result = () => {

    const {result} = useWeather()
    const {name, main} = result

    //to change kelvin temperature to celcius
    const kelvin = 273.15
  return (
    <div className="container">
        <h2>The climate on {name} is: </h2>    
        <p>
            Current Temperature: {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Min Temperature: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Max Temperature: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
       
    </div>
  )
}

export default Result