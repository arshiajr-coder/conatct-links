
function inputChange(){
    let messageBoxValue = event.target.value
    if (messageBoxValue.length == 0) {
        console.log(messageBoxValue);
        document.querySelector(".send-icon").classList.add("hidden")
        document.querySelector(".link-voice").classList.remove("hidden")
    } else{
        document.querySelector(".send-icon").classList.remove("hidden")
        document.querySelector(".link-voice").classList.add("hidden")
    }
}

function editPost(){
    
}