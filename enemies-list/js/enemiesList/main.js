console.log("My Enemies List!")
console.log("----------------")

const GetEnemies = [
    {
        FirstName: "Joshua",
        LastName: "Flowers",
        Offenses: [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        IsReallyHated: true
    },
    {
        FirstName: "Darth",
        LastName: "Vader",
        Offenses: [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        IsReallyHated: false
    },
    {
        FirstName: "Betty",
        LastName: "RudeLady",
        Offenses: [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in the line at the grocery store",
            "Poor conversationalist"
        ],
        IsReallyHated: true
    },
    {
        FirstName: "Leon",
        LastName: "Peck",
        Offenses: [
            "Keeps giving me a hotplate"
        ],
        IsReallyHated: false
    },
]

const enemies = GetEnemies

for (const myEnemy of enemies) {

    if (myEnemy.IsReallyHated) {
        console.log(`${myEnemy.FirstName} ${myEnemy.LastName} Really, really dislike!`)
    } 
    else {
        console.log(`${myEnemy.FirstName} ${myEnemy.LastName}`)
    }
    
}
