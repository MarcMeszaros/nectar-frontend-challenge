const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const colors = require('colors')
const jsonServer = require('json-server')

// write the db (aka endpoints) to file if it doesn't exit
let db = null;
if (!fs.existsSync(path.join(__dirname, 'db.json'))) {
    // generate the db
    const endpointFiles = fs.readdirSync(path.join(__dirname, 'endpoints'));
    db = endpointFiles.reduce((o, filename) => {
        const endpointName = filename.substring(0, filename.lastIndexOf('.'))
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'endpoints', filename), 'utf8'))
        return {...o, [endpointName]: data};
    }, {});
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db));
    console.log('Created the "mock/db.json" file. Delete this file to clear the database.'.green)
} else {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'))
    console.log('Using existing "mock/db.json" file. Delete this file to clear the database.'.cyan)
}

// print out some stats
console.log('Total locations:', `${db.locations.length}`.green);
console.log('Total products:', `${db.inventory.length}`.green);
console.log('Total devices:', `${db.devices.length}`.green);
console.log('Products with devices:', `${_.countBy(db.inventory, 'hasCap').true}`.green)

// start the mock server
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('\nJSON Server is running...')
})
