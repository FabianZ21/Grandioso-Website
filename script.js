
// let emptyText = ""
// let array = ["Hello",2,3,4,5,"text",7,8,9]
// let arrayIndex = 0

// function updateText(){
//     if(arrayIndex > 8){
//         arrayIndex = 0
//     }

//     document.getElementById("textToUpdate").innerHTML = array[arrayIndex]
//     arrayIndex += 1
// }


function appendButton(htmlElement, buttonName){
    let button = document.createElement("button")
    button.textContent = buttonName
    button.className = "navButton"
    htmlElement.append(button)
}

let buttonDiv = document.getElementById("buttonDiv")

let buttonNames = ["Home", "Catalog", "About Us"]

buttonNames.forEach(name => {
    appendButton(buttonDiv, name)
})

// buttonDiv.innerHTML = "placeholder"