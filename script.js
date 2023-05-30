// Declare your genre arrays here
let horror = ["https://pbs.twimg.com/media/FUViQIvX0AAz6eA?format=jpg&name=medium","https://www.pajiba.com/image/2019/ToniCollette2HereditaryA24.jpg", "https://www.photoshootmagazine.co.uk/wp-content/uploads/2017/07/cherylDSC_0492-web.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIvLKSOzIk0pvKf4xz8r_3YqZ7blmjaFAcg&usqp=CAU","https://media.tenor.com/R4n7Nlsdg9kAAAAi/uhm-scary.gif"]
let action = ["https://media.tenor.com/H65PE5iQ5LEAAAAj/fighting.gif","https://media.tenor.com/Ycutl55TxXQAAAAd/rrr-rrr-movie-review.gif", "https://media.tenor.com/gLST76zptxYAAAAC/shooting-gun-akshay-k.gif", "https://media.tenor.com/5aRLQRsYXJcAAAAM/the-origin-of-baahubali-prabhas.gif","https://media.tenor.com/rYS_KRYCPhgAAAAi/pikachu-pikachu-punch.gif"]
let comedy = ["https://media.tenor.com/L5OocKWNwlUAAAAM/smile-teeth.gif","https://www.bananaip.com/wp-content/uploads/2010/01/3-idiots-sequel-1.jpg", "https://media.tenor.com/iqO9qJDD-G4AAAAM/aamir-heroes.gif", "https://media.tenor.com/0ityQv4ij0MAAAAC/kareena-kapoor-aamir-khan.gif","https://media.tenor.com/8WF-fPxhfswAAAAi/funny.gif"]
// Make sure to declare your HTML elements as variables! 
let genreButton = document.querySelector(".genre-button")
let img = document.querySelector(".img")
let input2 = document.querySelector(".inputURL").value
let suggestButton = document.querySelector(".suggest-button")
let resetButton = document.querySelector(".reset")
let div = document.querySelector(".result")
// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
div.innerHTML = ""
  let input1 = document.querySelector(".movieChoice").value;
  if (input1 === "horror") {
    for (let item of horror) {
      div.insertAdjacentHTML("afterbegin", '<img src="' + item + '">');
    }
  } else if (input1 === "action") {
    for (let item of action) {
      div.insertAdjacentHTML("afterbegin", '<img src="' + item + '">')
    }
  } else if (input1 === "comedy") {
    for (let item of comedy) {
      div.insertAdjacentHTML("afterbegin", '<img src="' + item + '">')
    }
  } else {
    div.innerHTML = "Try again"
  };
}
suggestButton.onclick = function() {
  let input2 = document.querySelector(".inputURL").value
  horror.push(input2)
  action.push(input2)
  comedy.push(input2)
  inputURL.innerHTML = "your suggestion has been added."
console.log(horror)
  // clear the input value of the suggestion input box
  // show a message in the results container that tells the user their suggestion has been added
}
  resetButton.onclick = function(){
    div.innerHTML = ""
    input2.innerHTML = ""
  };
  
