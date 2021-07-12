var input,heading;


function setup() 
{
  createCanvas(400, 400);
  
  background(109, 141, 222);

  input = createInput();
  input.position(20,100);

  heading = createElement('h4',"Enter any alphabet: ");
  heading.position(20,60);
 
}

function draw() {
  var value = input.value()

  switch(value){
    case 'a':
      console.log("This is a vowel");
      break;

    case 'e':
      console.log("This is a vowel");
      break;

    case 'i': 
    console.log("This is a vowel");
    break;

    case 'o':
      console.log("This is a vowel");
      break;

    case 'u':
      console.log("This is a vowel");
      break;

    default:
      console.log("This is not a vowel");
      break;

  }

  
}

