const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText= "It was 86 fahrenheit outside, so :insertx: went for a walk. I went to  :inserty:, straight to Snarf Burger, then :insertz:. got this big milkshake from EJ, and he looked handsome — :insertx: the wieght was 200 pounds, and it was a snowday.";
const insertX= ["Willy the Goblin Big Daddy Father Christmas"];
const insertY = ["the soup kitchen Disneyland the White House"];
const insertz = ["spontaneously combusted melted into a puddle on the sidewalk turned into a slug and crawled away"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

let xItem=randomValueFromArray(insertX)
let yItem=randomValueFromArray(insertY)
let zItem=randomValueFromArray(insertz)

newStory= newStory.replaceAll(":insertx:", xItem)
newStory= newStory.replace(":inserty:", yItem)
newStory= newStory.replace(":insertz:", zItem)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("EJ",name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight = weight + "stone";
    let temperature =  Math.round((94-32)*(5/9));
    temperature = temperature + "centrigrade"
    newStory = newStory.replace("200 pounds",weight);
    newStory = newStory.replace("94 fahrenheit",temperature)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}