// let angka = document.getElementById('angka');
// let deleteAll = document.getElementById('deleteAll');
// let deleteOne   = document.getElementById('deleteOne');
// let bagi = document.getElementById ('bagi');
// let kurang = document.getElementById ('kurang');
// let jumlah = document.getElementById ('jumlah'); 
// let kali = document.getElementById ('kali');
// let koma = document.getElementById ('koma');
// let samaDengan = document.getElementById ('samaDengan');
// let result = document.getElementById('result');
// let hasil = document.getElementById('hasil');


// angka.addEventListener("click", function(){
//     hasil.textContent = angka.value
// });

document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("hasil");
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            handleButtonClick(this.value);
        });
    }

    function handleButtonClick(value) {
        if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "Error";
            }
        } else if (value === "C" || value === "AC") {
            display.textContent = "0";
        } else {
            if (display.textContent === "0" || display.textContent === "Error") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    }
});
