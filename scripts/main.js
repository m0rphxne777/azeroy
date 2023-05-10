let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/bounzen1.png') {
    myImage.setAttribute ('src','images/bounzen2.png');
  } else {
    myImage.setAttribute ('src','images/bounzen1.png');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('បញ្ចូល​ឈ្មោះ​របស់​អ្នក');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'ជំរាបសួរជនចម្លែកតាមឈ្មោះ ' + myName;
  }
}

if (!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'ជំរាបសួរជនចម្លែកតាមឈ្មោះ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

