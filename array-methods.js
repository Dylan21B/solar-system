console.log("hello Dylan")
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetEl = document.getElementById("postPlanets");

let upperCase = planets.map(function(word){
    return(word.charAt(0).toUpperCase() +word.slice(1));
});

planets.forEach(function(item) {
      planetEl.innerHTML += `<p>${item}</p>`;
});

upperCase.forEach(function(item) {
    planetEl.innerHTML += `<p>${item}</p>`;
});

function hasE() {
    for (var i = 0; i < planets.lenght; i++){
        if (planets[i].includes("e") === true) {
            return planets[i];
    }
  }
}

// console.log(planets.filter(hasE));


console.log("works so far")

console.log(upperCase);

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]