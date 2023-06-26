//Input vars

const adj1 = document.getElementById('adj1');
const noun1 = document.getElementById('noun1');
const adj2 = document.getElementById('adj2');
const clothing = document.getElementById('clothing');
const bodyPart = document.getElementById('bodyPart');
const verb1 = document.getElementById('verb1');noun1
const food = document.getElementById('food');

//Mad lib display var
const madLibDisplay = document.querySelector('.mad-lib');

//From var
const form = document.querySelector('form');

// Mad lib story var
const story = `Once upon a time, there was a <strong>${adj1}</strong> <strong>${noun1}</strong> who loved to wear <strong>${adj2}</strong> <strong>${clothing}</strong>. One day, while walking down the street, they accidentally tripped over their own <strong>${bodyPart}</strong> and <strong>${verb1}</strong> into a nearby <strong>${food}</strong> truck.

The end.`;

//Event listener
form.addEventListener('submit', function(e) {
  event.preventDefault();

  if (adj1.value === '') {
    alert('Please fill out all fields');
    adj1.focus();
  } else if (adj1.value === '') {
    alert('Please fill out all fields');
    adj1.focus();
  } else if (adj1.value === '') {
    alert('Please fill out all fields');
    adj1.focus();
  } else if (noun1.value === '') {
    alert('Please fill out all fields');
    noun1.focus();
  } else if (adj2.value === '') {
    alert('Please fill out all fields');
    adj2.focus();
  } else if (clothing.value === '') {
    alert('Please fill out all fields');
    clothing.focus();
  } else if (bodyPart.value === '') {
    alert('Please fill out all fields');
    bodyPart.focus();
  } else if (verb1.value === '') {
    alert('Please fill out all fields');
    verb1.focus();
  } else if (food.value === '') {
    alert('Please fill out all fields');
    food.focus();
  } else {
    madLibStoryDisplay();
  }
  
});

function madLibStoryDisplay() {
  madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value)
}