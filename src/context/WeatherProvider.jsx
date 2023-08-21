import { useState, createContext } from "react";

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {


    
    const [search, setSearch] = useState({
        city: '',
        country: ''
    })

    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const checkWeather = data => {
        console.log(data)
    }

    return(
        <WeatherContext.Provider
            value={{
                search,
                dataSearch,
                checkWeather
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext