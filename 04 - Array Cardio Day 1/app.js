// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const f = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year >= 1500
);
console.table(f);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
inventors.map(getFullName);
function getFullName(item) {
  console.log(item.first, item.last);
}

// Array.prototype.sort()
// .sort() overwrites the original array
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a, b) => (a.year < b.year ? -1 : b.year < a.year ? 1 : 0));
console.table(inventors);

//inventors.sort((a, b) => (a.year < b.year ? 1 : b.year < a.year ? -1 : 0));
//This would sort in descending order

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

console.log(inventors.reduce(theSum, 0));
function theSum(total, inventors) {
  age = inventors.passed - inventors.year;
  return total + age;
}
// Another way, just reducing the lines with lambda expression
console.log(
  inventors.reduce((atotal, inventors) => {
    return atotal + inventors.passed - inventors.year;
  }, 0)
);

// 5. Sort the inventors by years lived

console.table(
  inventors.sort((a, b) => {
    return a.passed - a.year > b.passed - b.year ? -1 : 1;
  })
);

// =================================================================

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// open this link and use this code in its console

// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'))
// console.log(de)

// =================================================================

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// 7. sort Exercise
// Sort the people alphabetically by last name

console.table(
  people.sort((nameOne, nameTwo) =>
    nameOne.split(",")[1] > nameTwo.split(",")[1] ? 1 : -1
  )
);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// 8. Reduce Exercise
// Sum up the instances of each of these

const counter = {};

data.forEach((ele) => {
  if (counter[ele]) {
    counter[ele] += 1;
  } else {
    counter[ele] = 1;
  }
});

console.table(counter);
