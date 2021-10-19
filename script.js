let randomNumber = [];
let total = 0;
for(i=0; i <= 4; i++){
    randomNumber[i] = Math.floor(Math.random() * 10) + 1;
}

checkGuess = () => {
    let userCheck = document.getElementById("guess").value;
    let total = 0;

    for(j=0; j < randomNumber.length; j++){
        if(randomNumber[j] == userCheck){
            total++;
        }
    }

    document.getElementById("result").innerHTML += " " + total + " times";
    document.getElementById("result").hidden = false;
    document.getElementById("myForm").hidden = true;
    
}

