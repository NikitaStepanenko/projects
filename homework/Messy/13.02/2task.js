// Select all the list items on the page and convert to array

// Filter for only the elements that contain the word 'Flexbox'

// map down to a list of time strings

// map to an array of seconds

// reduce to get total

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!

const list = Array.from(document.querySelectorAll("li"));
// const arr = [...list]

const filt = list.filter(x => x.textContent.includes('Flexbox').map(x => x.dataset.time);

for (x in map) {
  console.log(map[x]);
}
