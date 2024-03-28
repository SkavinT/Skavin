// function tambah() {
//     var nilaiA = document.getElementById('nilaiA').value;
//     var nilaiB = document.getElementById('nilaiB').value;
//     var hitung=Number(nilaiA) + Number(nilaiB);
//     document.getElementById('hasil').innerHTML = hitung;
// }
// function kurang(){
//     var nilaiA = document.getElementById('nilaiA').value;
//     var nilaiB = document.getElementById('nilaiB').value;
//     var hitung= Number(nilaiA) - Number(nilaiB);
//     document.getElementById('hasil').innerHTML = hitung;
// }
// function kali(){
//     var nilaiA = document.getElementById('nilaiA').value;
//     var nilaiB = document.getElementById('nilaiB').value;
//     var hitung= Number(nilaiA) * Number(nilaiB);
//     document.getElementById('hasil').innerHTML = hitung;
// }
// function bagi(){
//     var nilaiA = document.getElementById('nilaiA').value;
//     var nilaiB = document.getElementById('nilaiB').value;
//     var hitung= Number(nilaiA) / Number(nilaiB);
//     document.getElementById('hasil').innerHTML = hitung;
// }
let Angka1 = document.getElementById('nilaiA');
let Angka2 = document.getElementById('nilaiB');
let hasil = document.getElementById('hasil');

function hitung(operator){
    if (operator == "tambah"){
        hasil.innerHTML = Number(Angka1.value) + Number(Angka2.value);
    } else if (operator == "kurang") {
        hasil.innerHTML = Number(Angka1.value) - Number(Angka2.value);
    } else if (operator == "kali"){
        hasil.innerHTML = Number(Angka1.value) * Number(Angka2.value);
    } else if (operator == "bagi"){
        hasil.innerHTML = Number(Angka1.value) / Number(Angka2.value);
    }
    
}
