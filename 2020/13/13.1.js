const fs = require('fs')

let [timestamp, buses] = fs.readFileSync('input', 'utf-8').split('\n')
buses = buses.split(',').filter(bus => bus !== 'x').map(bus => parseInt(bus))

let waits = {}

buses.forEach(bus => waits[bus] = Math.ceil(timestamp/bus)*bus)

let [bus, wait] = Object.entries(waits).sort((a,b) => a[1]-b[1])[0]

console.log(bus*(wait-timestamp))