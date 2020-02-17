// Select all the list items on the page and convert to array

const list = Array.from(document.querySelectorAll("li"));

// Filter for only the elements that contain the word 'Flexbox'

const filt = list.filter(x => x.textContent.includes("Flexbox"));

// map down to a list of time strings

const map = filt
  .map(x => x.dataset.time)

  // map to an array of seconds

  .map(x => {
    time = x.split(":");
    return parseInt(time[0] * 60) + parseInt(time[1]);
  });

console.log(map);

// reduce to get total

answer = map.reduce((total, val) => total + val);

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!

console.log(answer);
