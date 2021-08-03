import './App.css';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ActualWeather from './components/ActualWeather';
import { geolocated } from "react-geolocated";

function App() {
  const [weather, setWeather] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (location) => {
    setQuery(location)

  }

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else if (navigator.geolocation && query === "") {

      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=aacb738b95b7c8ff58e0059ebf01e7e7`)
          .then(res => setWeather(res.data))
      });
    } else {
      console.log("here")
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=aacb738b95b7c8ff58e0059ebf01e7e7`)
        .then(res => setWeather(res.data))
    }

  }, [query])

  return (
    <div className="App">
      <Container>
        <Typography variant="h2" style={{ textAlign: "center", marginTop: "2rem" }}>Weather App </Typography>
        <Search handleSubmit={handleSubmit} />
        {
          (weather !== "") ?
            <ActualWeather weather={weather} coordinates={weather?.coord} /> :
            <p style={{ textAlign: "center" }}>
              Please enter the city name to get weather information
            </p>
        }
      </Container>

    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
