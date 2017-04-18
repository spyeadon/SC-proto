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
    newDay.timezone = day.timezone;
    newDay.dayOfTheMonth = +day.moment.split(' ')[1].slice(0, -2);
    return newDay;
  })
  return newArray.sort(sortByTimestamp);
}
