// =====================
// DOM Title dan Tombol
// =====================

// Mengganti judul halaman jadi "Adhann"
document.title = "Adhann"

// Mengambil elemen tombol berdasarkan id
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

// Menyimpan teks default untuk tombol 1
const defaultText = 'klik saya dongg'
btn1.textContent = defaultText

// Menambahkan style CSS langsung ke tombol 1
btn1.style.border = 'none'
btn1.style.padding = '34px'
btn1.style.background = 'yellow'


// =====================
// Fungsi Terkait Tombol 1
// =====================

// Fungsi yang akan dipanggil saat tombol diklik
function buttonClick() {
    btn1.style.background = 'tomato'  // Ubah warna background tombol
    const newText = document.createElement('h1') // Buat <h1> baru
    newText.textContent = 'HAI KAMU BERHASIL KLIK ITU'  // Isi teksnya
    body.append(newText) // Tambahkan ke body
}

// Fungsi untuk mengubah teks tombol
function ubahText() {
    btn1.textContent = 'ye keubahdeh'
}

// Fungsi untuk mengembalikan teks tombol ke semula
function oriText() {
    btn1.textContent = defaultText
}


// =====================
// Fungsi Terkait Tombol 2
// =====================

// Teks default untuk tombol 2
const defaultText2 = 'klik saya dongg'
btn2.textContent = defaultText2

// Membuat elemen <h1> yang akan digunakan saat tombol 2 diklik
const textBaru = document.createElement('h1')
body.append(textBaru) // Tambahkan ke body

// Fungsi untuk menampilkan teks dengan warna hitam sebelum kursor berpindah
function munculText() {
    textBaru.style.color = 'black'
    textBaru.textContent = "muncul lagi deh"
}

// Fungsi untuk mengubah warna teks jadi merah (tanpa mengubah isi teks) setelah kursor berpindah dari button 2
function oriiText() {
    textBaru.style.color = 'red'
}