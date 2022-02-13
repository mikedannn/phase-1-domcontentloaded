// Your code goes here

// set up DOMContentLoaded listener to detect when HTML document has loaded

// use event's callback function to target the paragraph element with id = "text" and replace text with "This is really cool!"


document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById('text');
    return element.innerHTML = `This is really cool!`;
  });
  

 