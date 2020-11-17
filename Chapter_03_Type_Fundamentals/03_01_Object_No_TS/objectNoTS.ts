const animal = { 
    name: "Rex",
    species: "Dog",
    age: 5,
    speak: () => console.log("Woof!")
}

function callAnimalSpeak(animal) {
    animal.speak();
}

callAnimalSpeak(animal);