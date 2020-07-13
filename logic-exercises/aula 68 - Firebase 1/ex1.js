let time = 3725;

let hours = Math.floor(time / 60 / 60);
let minutes = Math.floor(time / 60) - (hours * 60);
let seconds = time % 60;

console.log(hours + "h", minutes + "m", seconds + "s");
