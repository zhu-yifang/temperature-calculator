// convert different temperature units
function convertTemp(temp, from, to) {
  if (from === 'C' && to === 'F') {
    return temp * 9 / 5 + 32;
  } else if (from === 'F' && to === 'C') {
    return (temp - 32) * 5 / 9;
  } else {
    return temp;
  }
}

function getInput() {
    let temp = document.getElementById('temp').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    return {temp, from, to};
}

function run() {
    let {temp, from, to} = getInput();
    let result = convertTemp(temp, from, to);
    console.log(result);
    document.getElementById('result').innerHTML = result;
}

function test() {
    console.log("hello");
}