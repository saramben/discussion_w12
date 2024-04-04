

//Challenge 3: Both boxes must have radio buttons selected to move on. If one or both radio buttons isn’t selected create an alert

document.querySelector("#ch3form").addEventListener("submit", function(){
    let standing = document.querySelectorAll("input[name='#standing']:checked").length;
    let date = document.querySelectorAll("input[name='#gradDate']:checked").length;
    if (date==0|| standing==0) {
        alert("You must select both boxes to move on.");
        e.preventDefault();
    }
})


