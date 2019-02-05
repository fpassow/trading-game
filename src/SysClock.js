import {tick} from './actions'

//This module is a sytem clock for the game world. It feeds TICK actions into Redux. 
//It can run at two speeds, one speed when the player's ship is at see,
//and a slower speed when it is in port and the player is buying and selling cargo.

let inPortSlowdown = 100
let inPortCounter = 0
let inPort = true
let disp = null

export function setInPort(ip) {
    inPort = ip
}

export function isInPort() {
    return inPort
}

export function startClockWithDispatch(dispatch) {
    disp = dispatch
    setInterval(click, 10)
}

function click() {
    if (!inPort) {
        disp(tick())
    } else {
        inPortCounter++
        if (inPortCounter >= inPortSlowdown) {
            inPortCounter = 0
            disp(tick())
        }
    }
}