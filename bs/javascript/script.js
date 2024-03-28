document.getElementById("welcome").innerHTML= "Selamat Datang";
document.getElementById("nama").innerHTML= "<b>Ahmad</b>";
document.getElementById("email").innerText="ahmad@test.com";
console.log("hanya bisa dilihat di console");

// variabel
let nama=" ";
let email=" ";
let data = []//array;
// function
function tampil(){
    console.log("Button ditekan");
    nama = document.getElementById("txtNama").value;
    console.log(nama);

    // ubah konten <p id="nama"></p>
    document.getElementById("nama").innerHTML = nama;
    console.log("Button Email ditekan");
    email = document.getElementById("txtEmail").value;
    console.log(email);

    // ubah konten <p id="nama"></p>
    document.getElementById("email").innerHTML = email;
    
    // simpan ke array
    data.push(nama);
    console.log(data);
}