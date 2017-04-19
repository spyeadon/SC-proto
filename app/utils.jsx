function sortByTimestamp(a, b) {
  //will require refactoring in case weather spans multiple months and moments includes day numbers like 29, 30... and 1, 2, 3 and months like April.. and June
  var nameA = a.moment.toUpperCase();
  var nameB = b.moment.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // values must be equal
  return 0;
}

export function formatData(dataArr) {
  let newDay = {}
  let newArray =  dataArr.map(day => {
    newDay = Object.assign({}, day.currently);
    newDay.moment = day.moment;
    let month = day.chartKey.split('/')[0];
    let dayNum = day.chartKey.split('/')[1];
    newDay.chartKey = +`${month}.${dayNum}`;
    newDay.timezone = day.timezone;
    newDay.dayOfTheMonth = +day.moment.split(' ')[1].slice(0, -2);
    newDay.dayMonth = `${newDay.moment.split(' ')[0]} ${newDay.dayOfTheMonth}`
    return newDay;
  })
  return newArray.sort(sortByTimestamp);
}

export function formatHourlyWeather(todaysWeather) {
  let formattedWeather = Object.assign({}, todaysWeather.currently);
  formattedWeather.hourly = []
  formattedWeather.hourly.push(todaysWeather.hourly.data[9]);
  formattedWeather.hourly[formattedWeather.hourly.length - 1].hour = '9am';
  formattedWeather.hourly.push(todaysWeather.hourly.data[12]);
  formattedWeather.hourly[formattedWeather.hourly.length - 1].hour = 'Noon';
  formattedWeather.hourly.push(todaysWeather.hourly.data[15]);
  formattedWeather.hourly[formattedWeather.hourly.length - 1].hour = '3pm';
  formattedWeather.hourly.push(todaysWeather.hourly.data[18]);
  formattedWeather.hourly[formattedWeather.hourly.length - 1].hour = '6pm';
  formattedWeather.hourly.push(todaysWeather.hourly.data[21]);
  formattedWeather.hourly[formattedWeather.hourly.length - 1].hour = '9pm';
  formattedWeather.summary = todaysWeather.hourly.summary;
  return formattedWeather;
}
