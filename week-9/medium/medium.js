const cutPizzaSlices = numOfSlices => {
    return function(numOfPeople){
        const sharedSlices = numOfSlices / numOfPeople
        return `Each person gets ${sharedSlices.toPrecision(3)} slices of pizza`
    }
}

let sharePizza = cutPizzaSlices(8)


console.log(sharePizza(2));
console.log(sharePizza(3));