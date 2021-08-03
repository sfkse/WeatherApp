import './App.css';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ActualWeather from './components/ActualWeather';

function App() {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");


  const handleSubmit = (location) => {
    setQuery(location)

  }
  // console.log("create comps")


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=aacb738b95b7c8ff58e0059ebf01e7e7`)
      .then(res => setWeather(res.data))
      .catch(err => {
        alert("Entry is not valid");
      });
    // console.log("effect")

  }, [query])

  // console.log(weather)
  return (
    <div className="App">
      <Container>
        <Typography variant="h2" style={{ textAlign: "center", marginTop: "2rem" }}>Weather App </Typography>
        <Search handleSubmit={handleSubmit} />
        {
          (query !== "") ?
            <ActualWeather weather={weather} coordinates={weather?.coord} /> :
            <p style={{ textAlign: "center" }}>
              Please enter the city name to get weather information
            </p>
        }
      </Container>

    </div>
  );
}

export default App;
