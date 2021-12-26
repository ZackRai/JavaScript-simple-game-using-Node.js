const fs = require('fs')
const playerName = "jack" // the player id to put in player.json

let user = JSON.parse(fs.readFileSync('player.json'))
let register = ({id: playerName, money: 0, fish: 0})

var checkPlayer = user.some((getdata) => { return getdata.id === playerName })

if (checkPlayer === true) {
	return console.log(`${playerName} is already registered`)
} else {
	user.push(register)
	fs.writeFileSync('player.json', JSON.stringify(user))
	console.log(`successfully registered player ${playerName}`)
}