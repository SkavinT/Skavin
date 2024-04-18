let data = ["Alfredo", "David", "Felix"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index) {
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
}

let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

// local storage
npm.innerHTML = localStorage.getItem("npm");
nama.innerHTML = localStorage.getItem("nama");

// dataarray
let hobi = ["baca", "game", "code"];
localStorage.setItem["hobi", hobi];
localStorage.setItem["myhobi", JSON.stringify(hobi)];

// data object
let mhs = { npm: 222240117, nama: "Joe" };

// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    { kode_mk: "SI0001", nama_mk: "Pemograman Web" },
    { kode_mk: "SI0002", nama_mk: "PAB" },
];


// tampilkan nama mk pemograman web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));

for (const [index, data] of lsNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampilkan data mk ke dalam listMK
    document.getElementById("listMK").innerHTML += `<li>${data.nama_mk} ${data.nama_mk}</li>`;
}