const exercise = a => {
    return function(){
        return `todays exercise is ${a}`
    }
    
}

let swim = exercise("swimming")
let run = exercise("running")

console.log(swim())
console.log(run())


