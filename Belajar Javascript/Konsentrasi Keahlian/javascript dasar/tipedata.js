// Mendefinisikan beberapa variabel data diri
let nama  = 'adhan'                 // Nama pengguna
let usia = 14                       // Usia pengguna
let tinggiBadan = 167.9             // Tinggi badan dalam cm
let beratBadan                     // Belum diberi nilai saat ini
let pacar = 2                       // Jumlah pacar (dalam konteks lucu)

// Memberi nilai ke variabel beratBadan
beratBadan = 80

// Mengecek nilai pacar dan memberikan deskripsi berdasarkan jumlahnya
if(pacar == null){
    pacar = "belum punya"                 // Jika null (belum diisi)
} else if(pacar == 1) {
    pacar = "udh punya"                   // Jika punya 1
} else if(pacar == 2) {
    pacar = "udh punya dan aku cukup playboy"  // Jika 2, ditampilkan dalam konteks lucu
}

// Menghitung saldo akhir
let saldoAwal = 30000              // Saldo awal
let saldoTambahan = 9000           // Tambahan saldo
const saldoAkhir = saldoAwal + saldoTambahan  // Total saldo

// Menampilkan data diri dan status pacar ke dalam alert
alert(`nama saya adalah ${nama} usia saya ${usia} dan tinggi badan saya adalah ${tinggiBadan} 
dan berat badan saya adalah ${beratBadan} dan saya punya pacar ${pacar}`)

// Menampilkan informasi saldo
alert(`saya punya saldo sebesar ${saldoAwal} dan saldo tambahan sebesar ${saldoTambahan} jadi saldo yang saya miliki adalah ${saldoAkhir}`)