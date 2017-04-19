'use strict'
import axios from 'axios';

export const HISTORY = 'HISTORY';
export const FORECAST = 'FORECAST';
export const CURRENT = 'CURRENT';
export const NEW_SEARCH = 'NEW_SEARCH';

export const historySearch = weatherData => ({
    type: HISTORY,
    weatherData: weatherData
})

export const forecastSearch = forecastData => ({
    type: FORECAST,
    forecastData: forecastData
})

export const currWeatherSearch = currentData => ({
    type: CURRENT,
    currentData: currentData
})

export const newSearch = (formattedAddress) => ({
    type:  NEW_SEARCH,
    formattedAddress: formattedAddress
})

export const weatherHistory = (day, position) =>
    dispatch =>
        axios.post('/api/weather/history', {day: day, position: position})
        .then(res => dispatch(historySearch(res.data)))
        .catch(err => console.error(err))

export const weatherForecast = (day, position) =>
    dispatch =>
        axios.post('/api/weather/forecast', {day: day, position: position})
        .then(res => dispatch(forecastSearch(res.data)))
        .catch(err => console.error(err))

export const weatherCurrently = position =>
    dispatch =>
        axios.post('/api/weather/current', position)
        .then(res => dispatch(currWeatherSearch(res.data)))
        .catch(err => console.error(err))
