/* tugas 8 javascript */
// Muhammad Rizwan

function biodata(){
    var siswa = {
        nama : 'Emma Watson',
        nim : 82456474,
        fakultas : 'Desain Komunikasi Visual',
        alamat : 'jl.Bhineka II, Jakarta Timur'
    }

    // isi semua objek
    console.log(siswa);

    // sebelum dirubah
    console.log('sebelum dirubah :',siswa.alamat);

    // setelah dirubah
    siswa.alamat = 'jl.Cendana V, Jakarta Selatan'
    console.log('setelah dirubah :',siswa);
}

biodata();