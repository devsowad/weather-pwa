import { Badge, Card, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import './Weather.css';

const WeatherCard = ({ weather }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Card className='weather-card'>
      {weather.main ? (
        <>
          <Badge badgeContent={weather.sys.country} color='primary'>
            <Typography variant='h6'>{weather.name}</Typography>
          </Badge>
          <div className='weather-temp'>
            <Badge badgeContent='&deg;C'>
              <Typography variant='h3'>
                {Math.round(weather.main.temp)}
              </Typography>
            </Badge>
          </div>
          <div className='weather-image'>
            <img
              src={`https://openweathermap.org/img/wn/${
                weather.weather[0].icon
              }@${matches ? 2 : 4}x.png`}
              alt={weather.weather[0].description}
            />
            <Typography variant='button'>
              {weather.weather[0].description}
            </Typography>
          </div>
        </>
      ) : (
        <Typography variant='h6'>
          Search location to get weather information
        </Typography>
      )}
    </Card>
  );
};

export default WeatherCard;
