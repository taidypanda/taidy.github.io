// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/haha.jpg') {
      myImage.setAttribute ('src','images/haha2.jpg');
	} else {
	  myImage.setAttribute ('src','images/haha.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');
//
// function setUserName() {
//   var myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.innerHTML = '王海艳小笨猪, ' + myName;
// }
//
// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.innerHTML = '王海艳小笨猪, ' + storedName;
// }
//
myButton.onclick = function() {
  // setUserName();
    alert('海艳就是猪！！！哈哈哈！！！');
}


var siteButton = document.querySelector('site');
siteButton.onclick = function () {
    alert('goto site');
}