import Form from "./Form"
import Result from "./Result"
import useWeather from "../hooks/useWeather"

const WeatherApp = () => {

  const {result} = useWeather()
  return (
    <>
    <main className="two-col">
        <Form />

        {result?.name && <Result />}
    </main>
    </>
  )
}

export default WeatherApp