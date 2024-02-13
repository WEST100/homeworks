function subtract(){
    let input1 = +document.querySelector(".input-1").value;
    let input2 = +document.querySelector(".input-2").value;

    let result = input1 - input2;

    document.querySelector(".result-1").innerText = input1 + " - " + input2 + " = " + result;
}

function multiply(){
    let input3 = +document.querySelector(".input-3").value;
    let input4 = +document.querySelector(".input-4").value;

    let result = input3 * input4;

    document.querySelector(".result-2").innerText = input3 + " * " + input4 + " = " + result;
}

function divide(){
    let input5 = Number(document.querySelector(".input-5").value);
    let input6 = Number(document.querySelector(".input-6").value);

    let result = input5 / input6;

    document.querySelector(".result-3").innerText = input5 + " / " + input6 + " = " + result;
}


function getMinutes(){
    let input7 = Number(document.querySelector(".input-7").value);

    let result = input7 * 60;

    document.querySelector(".result-4").innerText = input7 + " часа = " + result + " минут";
}

function calculateAverage(){
    let input8 = Number(document.querySelector(".input-8").value);
    let input9 = Number(document.querySelector(".input-9").value);
    let input10 = Number(document.querySelector(".input-10").value);

    let result1 = input8 + input9 + input10;
    let result2 = result1 / 3;

    document.querySelector(".result-5").innerText = input8 + "+" + input9 + "+" + input10 + "=" + result1 + "/3" + "=" + result2;
}




