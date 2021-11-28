function pinGenerator() {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return pinGenerator();
    }
};

// generate and display pin
document.getElementById ('gererate-pin').addEventListener('click', function () {
    const pin = pinGenerator();
    document.getElementById('display-pin').value = pin;
    document.getElementById('time-left').style.display = 'block';
    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-fail').style.display = 'none';
});

// typePin
document.getElementById('key-pad').addEventListener('click', function(event) {
    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-fail').style.display = 'none';
    const number = event.target.innerText;
    const typedPin = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            typedPin.value = '';
        }
    }
    else {
        const previousTypedPIn = typedPin.value;
        const newTypedPin = previousTypedPIn + number;
        typedPin.value = newTypedPin;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    // debugger
    const generatedPinId = document.getElementById('display-pin');
    const generatedPin = generatedPinId.value;
    const typedPinId = document.getElementById('typed-numbers');
    const typedPin = typedPinId.value;
    const successMessage = document.getElementById('notify-success');
    const failureMessage = document.getElementById('notify-fail');
    const timeLeft = document.getElementById('time-left');
    const tiemId = document.getElementById('time');

    if (generatedPin == typedPin) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
        generatedPinId.value = '';
        typedPinId.value = '';
        timeLeft.style.display = 'none';
    }
    else if (generatedPin != typedPin) {
        timeLeft.style.display = 'block';
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
        typedPinId.value = '';
        
        let time = parseInt(document.getElementById('time').innerText);
        if (time > 1){
            document.getElementById('time').innerText = time - 1;
        }
        else {
            location.reload();
            // generatedPinId.value = '';
            // failureMessage.style.display = 'none';
            // timeLeft.style.display = 'none';
        }

    }
});