import './App.css';
import Container from '@material-ui/core/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ActualWeather from './components/ActualWeather';

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=london&appid=aacb738b95b7c8ff58e0059ebf01e7e7')
      .then(res => setWeather(res.data))

  }, [])
  return (
    <div className="App">
      <Container>
        <Search />
        <ActualWeather weather={weather} />
      </Container>

    </div>
  );
}

export default App;
