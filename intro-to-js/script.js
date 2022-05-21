window.onload = function() {
    // start
    let starterDiv = document.getElementById('starter-div')
    let firstHeading = document.createElement('h2')
    firstHeading.innerText = 'This is a H2 created with Javascript'
    firstHeading.classList.add('js-header')

    starterDiv.appendChild(firstHeading)

    let secondHeading = document.createElement('h2')
    secondHeading.innerText = "This is another H2 created with JS!"
    secondHeading.classList.add('js-header')

    starterDiv.appendChild(secondHeading)
    // end
}


function showName(){
    console.log('showName');
    // start
    let name = document.getElementById('name').value;document.getElementById('greeting-text').innerText = 'Hi ' + name;
    // end
}

function changeColour(colour) {
    // start

    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start

    // end
}
