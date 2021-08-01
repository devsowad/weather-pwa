import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { fetchWeather } from './API/weather';
import './App.css';
import WeatherCard from './WeatherCard';
import { LinearProgress } from '@material-ui/core';

const App = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const search = async e => {
    if (e.key !== 'Enter') return;

    setLoading(true);
    const data = await fetchWeather(query);
    setWeather(data);
    setLoading(false);

    document.getElementById('searchInput').focus();
    setQuery('');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        className='main-container'
      >
        <CssBaseline />

        <div>
          <TextField
            id='searchInput'
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            label='Search Location'
            variant='filled'
            className='search-input'
            disabled={loading}
          />

          {loading && <LinearProgress />}

          <WeatherCard weather={weather} />
        </div>
      </Grid>
    </Container>
  );
};

export default App;
