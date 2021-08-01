import './App.css';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ActualWeather from './components/ActualWeather';

function App() {
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = () => {
    setQuery(search.toLowerCase())

    console.log("before")
    setSearch("")
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=aacb738b95b7c8ff58e0059ebf01e7e7`)
      .then(res => setWeather(res.data))
    // console.log("effect")

  }, [query])
  return (
    <div className="App">
      <Container>
        <Typography variant="h2" style={{ textAlign: "center", marginTop: "2rem" }}>Weather App </Typography>
        <Search search={search} handleSearch={handleSearch} handleSubmit={handleSubmit} />
        {
          (query.length > 0) ?
            <ActualWeather weather={weather} coordinates={weather} /> :
            <p style={{ textAlign: "center" }}>
              Please enter the city name to get weather information
            </p>
        }
      </Container>

    </div>
  );
}

export default App;
