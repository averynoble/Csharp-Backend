console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const Roll = (min, max) => {
    min = Math.ceil(1)
    max = Math.floor(6)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll()
    let die2 = Roll()

    let message = `${die1} + ${die2} == ${die1 + die2}`.toString()

    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)

    switch (message) {
    
        case 1:
            dieString = "one";
            break;
        case 2: 
            dieString = "two";
            break;
        case 3: 
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }
}
