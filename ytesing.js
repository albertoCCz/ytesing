function ytesing(){
    var elementWithId       = document.getElementById("confirm-button");
    var elementWithIdExists = !!elementWithId;

    if (elementWithIdExists) {
        elementWithId.click();
    }
}

setInterval(ytesing, 500);