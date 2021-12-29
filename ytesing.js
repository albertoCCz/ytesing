var counter = 0;

function yesing(counter){
    var elementWithId       = document.getElementById("confirm-button");
    var elementWithIdExists = !!elementWithId;

    if (elementWithIdExists) {
        counter++;
        elementWithId.click();
        console.log(`Times used: ${counter}`);
    }
}

setInterval(yesing(counter), 1000);