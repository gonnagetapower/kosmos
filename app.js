let solarysystem = [
    {
        name: "Venera",
        mass: 4.8e24,
        sunDistance: 108e6,
        hasRings: false,
    },
    {
        name: "Mercury ",
        mass: 3e23,
        sunDistance: 58e6,
        hasRings: false,
    },

    {
        name: "Earth",
        mass: 6e24,
        sunDistance: 149e6,
        hasRings: false,
    },
    {
        name: "Mars",
        mass: 6.4e23,
        sunDistance: 228e6,
        hasRings: false,
    },
    {
        name: "Jupiter",
        mass: 1.9e27,
        sunDistance: 778e6,
        hasRings: true,
    },
    {
        name: "Saturn",
        mass: 561e24,
        sunDistance: 1430e6,
        hasRings: true,
    },
    {
        name: "Uranus",
        mass: 8.6e25,
        sunDistance: 2871e6,
        hasRings: true,
    },
    {
        name: "Neptune",
        mass: 101e24,
        sunDistance: 4550e6,
        hasRings: true,
    },
]

//  Задание 3

let PlanetOrder = () => {
    return solarysystem.sort((a,b) => a.sunDistance > b.sunDistance ? 1 : -1 );
}

//  Задание 4

let checkRing = () => {
    for (let i=0; i <solarysystem.length; i++) {
        if (solarysystem[i].hasRings == true) {
            console.log(solarysystem[i])
        }
    }
}

//  Задание 5

let lowMaxMass = () => {
    arr = solarysystem.sort((a,b) => a.mass > b.mass ? 1 : -1 );
    return [arr[0].name, arr[arr.length-1].name];
}

// Задание 6

let minusPair = [];
let pairDistance = () => {
    arr = solarysystem.sort((a,b) => a.sunDistance > b.sunDistance ? 1 : -1 );
    for (let i=1; i<arr.length; i++) {
        let pair = arr[i].sunDistance - arr[i-1].sunDistance;
        console.log(pair);
        minusPair.push(pair);
    }
    console.log(`${minusPair[0]} - минимальное расстояние `)
    console.log(`${minusPair[minusPair.length -1]} - минимальное расстояние `)
}

// Задание 7 

let here = 0;

let sendingAstronaut = () => {
    arr = solarysystem.sort((a,b) => a.sunDistance > b.sunDistance ? 1 : -1 );
    let Earth = arr.find(item => item.mass == 6e24);
    console.log(Earth)
    for (let i=0; i<arr.length; i++) {
        if ( Earth.name == arr[i].name ) {
            console.log('Мы на земле')
            here = i;
        }
    } console.log("Летим от солнца") 
    for (here+1; here<arr.length; here++) {
        if ( 40e6 > (arr[here].sunDistance - arr[here-1].sunDistance)) {
          console.log(`запас хода 40 млн км ,долетели до ${arr[here+1].name}`)
        } 
        else if ( 150e6 > (arr[here].sunDistance - arr[here-1].sunDistance)) {
             console.log(`запас хода 150 млн км долетели до ${arr[here+1].name}`)
         }
         else if ( 1600e6 > (arr[here].sunDistance - arr[here-1].sunDistance)) {
            return (console.log(`запас хода 1600 млн км долетели до ${arr[here+1].name}`))
         }
    } 
}
