var counter = 0;

function ytesing(counter){
    var elementWithId       = document.getElementById("confirm-button");
    var elementWithIdExists = !!elementWithId;

    if (elementWithIdExists) {
        counter++;
        elementWithId.click();
        console.log(`Times used: ${counter}`);
    }
}

setInterval(ytesing, 1000, counter);