'use strict'
import axios from 'axios';

export const NEW_SEARCH = 'NEW_SEARCH';

export const newSearch = weatherData => ({
    type: NEW_SEARCH,
    weatherData: weatherData
})

export const weatherAPIThunk = position =>
     dispatch =>
        axios.post('/api/weather', position)
        .then(res => dispatch(newSearch(res)))
        .catch(err => console.error(err))
