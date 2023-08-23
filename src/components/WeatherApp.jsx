import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { result, loading, noResult } = useWeather();
  return (
    <>
      <main className="two-col">
        <Form />

        {loading ? <Loading /> : result?.name ? <Result /> : <p>{noResult}</p>}
      </main>
    </>
  );
};

export default WeatherApp;
