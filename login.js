function tampil(){
    
    let nama = document.getElementById("nama").value
    let pw = document.getElementById("pw").value
    
    
    if (nama == "sofa" && pw == "123"){
        alert("Selamat Berhasil Login");
        window.location ="index.html";
    }
    
    else {
        alert("Anda Gagal");
    }
}
document.getElementById("login1").addEventListener("submit", function(event){
    event.preventDefault();
    tampil();
});
