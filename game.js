const fs = require('fs')
const player = "jack" // the player id of player.json you want to use

let user = JSON.parse(fs.readFileSync('player.json'))

var checkPlayer = user.some((getdata) => { return getdata.id === player })
if (checkPlayer === false) return console.log(`player ${player} is not registered`)

var play_fishing = false // to play the fishing game
var sell_fish = false // to sell the fish

function addFish (id, fishAmount) {
                    var found = false
                    Object.keys(user).forEach((i) => {
                        if(user[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        user[found].fish += fishAmount
                        fs.writeFileSync('player.json',JSON.stringify(user))
                    }
                }

function sellFish (id, fishAmount) {
                    var found = false
                    Object.keys(user).forEach((i) => {
                        if(user[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
			            if (user[found].fish < fishAmount)  return console.log(`the player ${player} doesn't have ${fishAmount} fish`)
			            var fish_price = 20
			            var sell_the_fish = fish_price * fishAmount
                        user[found].fish -= fishAmount
			            user[found].money += sell_the_fish
                        fs.writeFileSync('player.json',JSON.stringify(user))
			            console.log(`player ${player} managed to sell ${fishAmount} lbs fish at a price of $${sell_the_fish}`)
                    }
                }

if (sell_fish == true) sellFish(player, 10) // player.json id, fish amount
if (play_fishing == true) {
    console.log("starting to fishing")
    setTimeout(() => { console.log("fishing...") }, 2000)
    setTimeout(() => { console.log("fishing...") }, 4000)
    setTimeout(() => { console.log("fishing...") }, 6000)
    setTimeout(() => { 
        console.log("done")
        const fish = Math.floor(Math.random() * 50) + 1
        console.log(`player ${player} just got ${fish} fish from fishing`)
        addFish(player, fish)
    }, 7000)

} else {
    console.log("there are no game to play")
}