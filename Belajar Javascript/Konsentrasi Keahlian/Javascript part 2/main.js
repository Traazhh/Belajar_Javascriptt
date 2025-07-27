// =====================
// Bagian Title Document
// =====================

// Menampilkan judul halaman di konsol
// console.log(document.title)

// Mengubah title halaman
// document.title = "Tuturu"

// Menampilkan title baru
// console.log(document.title)


// =====================
// Append Element ke Body
// =====================

// Menampilkan seluruh isi body di konsol
console.log(document.body)

// Menyimpan referensi ke elemen <body>
const body = document.body

// Menambahkan teks langsung ke body (sebagai node teks)
body.append("Hello World")

// Membuat elemen <h1> baru dan mengatur isinya
const h1 = document.createElement('h1')
h1.textContent = 'INI H1 WKWKW'

// Membuat elemen <p> baru
const namaSaya = document.createElement('p')
namaSaya.innerHTML = 'HAalo rek'

// Membuat elemen <b> (bold) baru
const namaKamu = document.createElement('b')
namaKamu.innerText = 'Anjayyyy'

// Menambahkan ketiga elemen ke dalam body
body.append(h1)
body.append(namaSaya)
body.append(namaKamu)  