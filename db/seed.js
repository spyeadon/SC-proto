const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Odysseus', email: 'odysseus@ithaca.gov', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedHistory = () => db.Promise.map([
  {address: 'Athens, Greece', user_id: 1},
  {address: 'Chicago, IL', user_id: 2},
  {address: 'Crete, Greece', user_id: 1},
  {address: '1600 Pennsylvania Ave NW, Washington, DC 20006', user_id: 2},
  {address: 'Forks, Washington', user_id: 1}
], history => db.model('history').create(history))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedHistory)
  .then(searches => console.log(`Seeded ${searches.length} searches OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
