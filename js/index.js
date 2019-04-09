function GetData() {

    var name = document.querySelector(".name").value;

    var surname = document.querySelector(".surname").value;

    var amount = parseInt(document.querySelector(".amount").value);

    var period = parseInt(document.querySelector(".period").value);

    var id = parseInt(document.querySelector(".id").value);


    Validate(name, surname, amount, period, id);

}

function GetPersentRate(){

    var percent_input = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".percent_input").innerHTML = percent_input;

   
    function InputData() {
    var name_input = document.querySelector(".name").value;
    document.querySelector(".name_input").innerHTML = name_input;

    var surname_input = document.querySelector(".surname").value;
    document.querySelector(".surname_input").innerHTML = surname_input;

    var amount_input = parseInt(document.querySelector(".amount").value);
    document.querySelector(".amount_input").innerHTML = amount_input + " $";

    var period_input = parseInt(document.querySelector(".period").value);
    document.querySelector(".period_input").innerHTML = period_input + " months";

    var id_input = parseInt(document.querySelector(".id").value);
    document.querySelector(".id_input").innerHTML = id_input;

    var your_percent_input = amount_input * percent_input / 100;
    document.querySelector(".your_percent_input").innerHTML = Number(your_percent_input).toFixed(0) + " $";

    var total_amount_input = amount_input + your_percent_input;
    document.querySelector(".total_amount_input").innerHTML = Number(total_amount_input).toFixed(0) + " $";

    var amount_month_input = (amount_input + your_percent_input) / period_input;
    document.querySelector(".amount_month_input").innerHTML = Number(amount_month_input).toFixed(0) + " $";

}
return InputData();
}

function Validate(name, surname, amount, period, id) {

    console.log("Name:  ", name);
    console.log("Surname:  ", surname);
    console.log("Amount:  ", amount);
    console.log("Period:  ", period);
    console.log("ID Number:  ", id);

    if (name.length < 3 || name.length > 16) {
        var error = document.querySelector(".error");
        error.innerHTML = "Incorrect input Name";
        console.log("Incorrect input Name");
    }

    else if (surname.length < 3 || surname.length > 16) {
        var error = document.querySelector(".error");
        error.innerHTML = "Incorrect input Surname";
        console.log("Incorrect input Surname");
    }

    else if (amount > 50000) {
        var error = document.querySelector(".error");
        error.innerHTML = "Too much money";
    }

    else if (period > 24 || period < 6) {
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid Period of Credit";
    }

    else {
        var name = name;
        console.log("SUCCSSES!");
        GetPersentRate();
       
    }

}
