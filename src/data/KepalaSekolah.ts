import { DataMapel, Guru, Kelas, Siswa } from "@/types/KepalaSekolah";

export const MataPelajaran: DataMapel[] = [
  {
    name: "Matematika",
    kode: "MTK001",
    kelas: "X IPA 1",
    kkm: 75,
    pengampu: "Budi Santoso, S.Pd",
  },
  {
    name: "Bahasa Indonesia",
    kode: "BIN002",
    kelas: "X IPA 1",
    kkm: 70,
    pengampu: "Siti Rahmawati, S.Pd",
  },
  {
    name: "Bahasa Inggris",
    kode: "BING003",
    kelas: "X IPA 1",
    kkm: 70,
    pengampu: "Ahmad Wijaya, S.Pd",
  },
  {
    name: "Fisika",
    kode: "FIS004",
    kelas: "X IPA 1",
    kkm: 75,
    pengampu: "Dr. Rina Kusuma, M.Pd",
  },
  {
    name: "Kimia",
    kode: "KIM005",
    kelas: "X IPA 1",
    kkm: 75,
    pengampu: "Dewi Lestari, S.Si",
  },
  {
    name: "Biologi",
    kode: "BIO006",
    kelas: "X IPA 1",
    kkm: 75,
    pengampu: "Hendra Gunawan, S.Pd",
  },
  {
    name: "Sejarah Indonesia",
    kode: "SEJ007",
    kelas: "X IPA 1",
    kkm: 70,
    pengampu: "Ratna Sari, S.Pd",
  },
  {
    name: "Pendidikan Agama Islam",
    kode: "PAI008",
    kelas: "X IPA 1",
    kkm: 75,
    pengampu: "Ustadz Muhammad Ali, S.Ag",
  },
  {
    name: "Pendidikan Pancasila",
    kode: "PPK009",
    kelas: "X IPA 1",
    kkm: 70,
    pengampu: "Yuli Andriani, S.Pd",
  },
  {
    name: "Seni Budaya",
    kode: "SBD010",
    kelas: "X IPA 1",
    kkm: 70,
    pengampu: "Eko Prasetyo, S.Sn",
  },
];

export const dataKelas: Kelas[] = [
  {
    name: "X IPA 1",
    wali_kelas: "Budi Santoso, S.Pd",
    ketua_kelas: "Ahmad Fauzi",
    tingkat: 10,
    jumlah_laki_laki: 18,
    jumlah_perempuan: 18,
  },
  {
    name: "X IPA 2",
    wali_kelas: "Siti Rahmawati, S.Pd",
    ketua_kelas: "Dina Amelia",
    tingkat: 10,
    jumlah_laki_laki: 16,
    jumlah_perempuan: 20,
  },
  {
    name: "X IPS 1",
    wali_kelas: "Ahmad Wijaya, S.Pd",
    ketua_kelas: "Reza Prasetya",
    tingkat: 10,
    jumlah_laki_laki: 15,
    jumlah_perempuan: 21,
  },
  {
    name: "X IPS 2",
    wali_kelas: "Dewi Lestari, S.Si",
    ketua_kelas: "Maya Putri",
    tingkat: 10,
    jumlah_laki_laki: 14,
    jumlah_perempuan: 22,
  },
  {
    name: "XI IPA 1",
    wali_kelas: "Dr. Rina Kusuma, M.Pd",
    ketua_kelas: "Bintang Ramadhan",
    tingkat: 11,
    jumlah_laki_laki: 17,
    jumlah_perempuan: 19,
  },
  {
    name: "XI IPA 2",
    wali_kelas: "Hendra Gunawan, S.Pd",
    ketua_kelas: "Sari Wulandari",
    tingkat: 11,
    jumlah_laki_laki: 19,
    jumlah_perempuan: 17,
  },
  {
    name: "XI IPS 1",
    wali_kelas: "Ratna Sari, S.Pd",
    ketua_kelas: "Adi Nugroho",
    tingkat: 11,
    jumlah_laki_laki: 16,
    jumlah_perempuan: 20,
  },
  {
    name: "XI IPS 2",
    wali_kelas: "Yuli Andriani, S.Pd",
    ketua_kelas: "Fitri Handayani",
    tingkat: 11,
    jumlah_laki_laki: 13,
    jumlah_perempuan: 23,
  },
  {
    name: "XII IPA 1",
    wali_kelas: "Eko Prasetyo, S.Sn",
    ketua_kelas: "Rizki Maulana",
    tingkat: 12,
    jumlah_laki_laki: 20,
    jumlah_perempuan: 16,
  },
  {
    name: "XII IPA 2",
    wali_kelas: "Ustadz Muhammad Ali, S.Ag",
    ketua_kelas: "Anisa Rahma",
    tingkat: 12,
    jumlah_laki_laki: 18,
    jumlah_perempuan: 18,
  },
  {
    name: "XII IPS 1",
    wali_kelas: "Linda Margaretha, S.Pd",
    ketua_kelas: "Farhan Hakim",
    tingkat: 12,
    jumlah_laki_laki: 15,
    jumlah_perempuan: 21,
  },
  {
    name: "XII IPS 2",
    wali_kelas: "Bambang Suryanto, S.Pd",
    ketua_kelas: "Nadia Azzahra",
    tingkat: 12,
    jumlah_laki_laki: 14,
    jumlah_perempuan: 22,
  },
];

export const dataSiswa: Siswa[] = [
  {
    name: "Ahmad Fauzi",
    nisn: "0051234567",
    absen: "01",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Aisyah Putri",
    nisn: "0051234568",
    absen: "02",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Budi Prasetyo",
    nisn: "0051234569",
    absen: "03",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Citra Dewi",
    nisn: "0051234570",
    absen: "04",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Dani Firmansyah",
    nisn: "0051234571",
    absen: "05",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Eka Wulandari",
    nisn: "0051234572",
    absen: "06",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Fajar Nugroho",
    nisn: "0051234573",
    absen: "07",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Gita Anggraini",
    nisn: "0051234574",
    absen: "08",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Hendra Saputra",
    nisn: "0051234575",
    absen: "09",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },
  {
    name: "Intan Permata",
    nisn: "0051234576",
    absen: "10",
    kelas_sekarang: "X IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
    ],
  },

  // Siswa Kelas X IPA 2
  {
    name: "Dina Amelia",
    nisn: "0051234577",
    absen: "01",
    kelas_sekarang: "X IPA 2",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
    ],
  },
  {
    name: "Joni Prasetyo",
    nisn: "0051234578",
    absen: "02",
    kelas_sekarang: "X IPA 2",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
    ],
  },
  {
    name: "Kartika Sari",
    nisn: "0051234579",
    absen: "03",
    kelas_sekarang: "X IPA 2",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
    ],
  },
  {
    name: "Lukman Hakim",
    nisn: "0051234580",
    absen: "04",
    kelas_sekarang: "X IPA 2",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
    ],
  },
  {
    name: "Maya Sinta",
    nisn: "0051234581",
    absen: "05",
    kelas_sekarang: "X IPA 2",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
    ],
  },

  // Siswa Kelas X IPS 1
  {
    name: "Reza Prasetya",
    nisn: "0051234582",
    absen: "01",
    kelas_sekarang: "X IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
    ],
  },
  {
    name: "Nina Aprilia",
    nisn: "0051234583",
    absen: "02",
    kelas_sekarang: "X IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
    ],
  },
  {
    name: "Oscar Ramadhan",
    nisn: "0051234584",
    absen: "03",
    kelas_sekarang: "X IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
    ],
  },
  {
    name: "Putri Rahayu",
    nisn: "0051234585",
    absen: "04",
    kelas_sekarang: "X IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
    ],
  },
  {
    name: "Qori Andika",
    nisn: "0051234586",
    absen: "05",
    kelas_sekarang: "X IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
    ],
  },

  // Siswa Kelas XI IPA 1
  {
    name: "Bintang Ramadhan",
    nisn: "0041234567",
    absen: "01",
    kelas_sekarang: "XI IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
    ],
  },
  {
    name: "Sari Wulandari",
    nisn: "0041234568",
    absen: "02",
    kelas_sekarang: "XI IPA 1",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
    ],
  },
  {
    name: "Toni Hermawan",
    nisn: "0041234569",
    absen: "03",
    kelas_sekarang: "XI IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
    ],
  },
  {
    name: "Umi Kalsum",
    nisn: "0041234570",
    absen: "04",
    kelas_sekarang: "XI IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
    ],
  },
  {
    name: "Vino Mahendra",
    nisn: "0041234571",
    absen: "05",
    kelas_sekarang: "XI IPA 1",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
    ],
  },

  // Siswa Kelas XII IPA 1
  {
    name: "Rizki Maulana",
    nisn: "0031234567",
    absen: "01",
    kelas_sekarang: "XII IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
      {
        name: "XII IPA 1",
        wali_kelas: "Eko Prasetyo, S.Sn",
        ketua_kelas: "Rizki Maulana",
      },
    ],
  },
  {
    name: "Winda Safitri",
    nisn: "0031234568",
    absen: "02",
    kelas_sekarang: "XII IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 2",
        wali_kelas: "Hendra Gunawan, S.Pd",
        ketua_kelas: "Sari Wulandari",
      },
      {
        name: "XII IPA 1",
        wali_kelas: "Eko Prasetyo, S.Sn",
        ketua_kelas: "Rizki Maulana",
      },
    ],
  },
  {
    name: "Xavier Pratama",
    nisn: "0031234569",
    absen: "03",
    kelas_sekarang: "XII IPA 1",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
      {
        name: "XII IPA 1",
        wali_kelas: "Eko Prasetyo, S.Sn",
        ketua_kelas: "Rizki Maulana",
      },
    ],
  },
  {
    name: "Yuni Astuti",
    nisn: "0031234570",
    absen: "04",
    kelas_sekarang: "XII IPA 1",
    kelas: [
      {
        name: "X IPA 1",
        wali_kelas: "Budi Santoso, S.Pd",
        ketua_kelas: "Ahmad Fauzi",
      },
      {
        name: "XI IPA 1",
        wali_kelas: "Dr. Rina Kusuma, M.Pd",
        ketua_kelas: "Bintang Ramadhan",
      },
      {
        name: "XII IPA 1",
        wali_kelas: "Eko Prasetyo, S.Sn",
        ketua_kelas: "Rizki Maulana",
      },
    ],
  },
  {
    name: "Zaki Mubarak",
    nisn: "0031234571",
    absen: "05",
    kelas_sekarang: "XII IPA 1",
    kelas: [
      {
        name: "X IPA 2",
        wali_kelas: "Siti Rahmawati, S.Pd",
        ketua_kelas: "Dina Amelia",
      },
      {
        name: "XI IPA 2",
        wali_kelas: "Hendra Gunawan, S.Pd",
        ketua_kelas: "Sari Wulandari",
      },
      {
        name: "XII IPA 1",
        wali_kelas: "Eko Prasetyo, S.Sn",
        ketua_kelas: "Rizki Maulana",
      },
    ],
  },

  // Siswa Kelas X IPS 2
  {
    name: "Maya Putri",
    nisn: "0051234587",
    absen: "01",
    kelas_sekarang: "X IPS 2",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
    ],
  },
  {
    name: "Abdul Rahman",
    nisn: "0051234588",
    absen: "02",
    kelas_sekarang: "X IPS 2",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
    ],
  },
  {
    name: "Bella Safira",
    nisn: "0051234589",
    absen: "03",
    kelas_sekarang: "X IPS 2",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
    ],
  },
  {
    name: "Chandra Wijaya",
    nisn: "0051234590",
    absen: "04",
    kelas_sekarang: "X IPS 2",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
    ],
  },
  {
    name: "Dewi Maharani",
    nisn: "0051234591",
    absen: "05",
    kelas_sekarang: "X IPS 2",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
    ],
  },

  // Siswa Kelas XI IPS 1
  {
    name: "Adi Nugroho",
    nisn: "0041234572",
    absen: "01",
    kelas_sekarang: "XI IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
      {
        name: "XI IPS 1",
        wali_kelas: "Ratna Sari, S.Pd",
        ketua_kelas: "Adi Nugroho",
      },
    ],
  },
  {
    name: "Elsa Permatasari",
    nisn: "0041234573",
    absen: "02",
    kelas_sekarang: "XI IPS 1",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
      {
        name: "XI IPS 1",
        wali_kelas: "Ratna Sari, S.Pd",
        ketua_kelas: "Adi Nugroho",
      },
    ],
  },
  {
    name: "Ferdi Setiawan",
    nisn: "0041234574",
    absen: "03",
    kelas_sekarang: "XI IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
      {
        name: "XI IPS 1",
        wali_kelas: "Ratna Sari, S.Pd",
        ketua_kelas: "Adi Nugroho",
      },
    ],
  },

  // Siswa Kelas XII IPS 1
  {
    name: "Farhan Hakim",
    nisn: "0031234572",
    absen: "01",
    kelas_sekarang: "XII IPS 1",
    kelas: [
      {
        name: "X IPS 1",
        wali_kelas: "Ahmad Wijaya, S.Pd",
        ketua_kelas: "Reza Prasetya",
      },
      {
        name: "XI IPS 1",
        wali_kelas: "Ratna Sari, S.Pd",
        ketua_kelas: "Adi Nugroho",
      },
      {
        name: "XII IPS 1",
        wali_kelas: "Linda Margaretha, S.Pd",
        ketua_kelas: "Farhan Hakim",
      },
    ],
  },
  {
    name: "Anisa Rahma",
    nisn: "0031234573",
    absen: "02",
    kelas_sekarang: "XII IPS 1",
    kelas: [
      {
        name: "X IPS 2",
        wali_kelas: "Dewi Lestari, S.Si",
        ketua_kelas: "Maya Putri",
      },
      {
        name: "XI IPS 2",
        wali_kelas: "Yuli Andriani, S.Pd",
        ketua_kelas: "Fitri Handayani",
      },
      {
        name: "XII IPS 1",
        wali_kelas: "Linda Margaretha, S.Pd",
        ketua_kelas: "Farhan Hakim",
      },
    ],
  },
];

export const dataGuru: Guru[] = [
  {
    name: "Budi Santoso, S.Pd",
    nip: "196501011990031001",
    no_telepon: "081234567801",
  },
  {
    name: "Siti Rahmawati, S.Pd",
    nip: "197002151991032002",
    no_telepon: "081234567802",
  },
  {
    name: "Ahmad Wijaya, S.Pd",
    nip: "196803101989031003",
    no_telepon: "081234567803",
  },
  {
    name: "Dr. Rina Kusuma, M.Pd",
    nip: "197505201998022001",
    no_telepon: "081234567804",
  },
  {
    name: "Dewi Lestari, S.Si",
    nip: "198001052005012002",
    no_telepon: "081234567805",
  },
  {
    name: "Hendra Gunawan, S.Pd",
    nip: "197208151995121001",
    no_telepon: "081234567806",
  },
  {
    name: "Ratna Sari, S.Pd",
    nip: "198203102006042003",
    no_telepon: "081234567807",
  },
  {
    name: "Ustadz Muhammad Ali, S.Ag",
    nip: "197612201999031002",
    no_telepon: "081234567808",
  },
  {
    name: "Yuli Andriani, S.Pd",
    nip: "198507152010012004",
    no_telepon: "081234567809",
  },
  {
    name: "Eko Prasetyo, S.Sn",
    nip: "197909282003121001",
    no_telepon: "081234567810",
  },
  {
    name: "Linda Margaretha, S.Pd",
    nip: "198304152008012005",
    no_telepon: "081234567811",
  },
  {
    name: "Bambang Suryanto, S.Pd",
    nip: "197106101994121002",
    no_telepon: "081234567812",
  },
  {
    name: "Drs. Hadi Purnomo",
    nip: "196408171988031003",
    no_telepon: "081234567813",
  },
  {
    name: "Nurul Hidayah, S.Pd",
    nip: "198609202011012006",
    no_telepon: "081234567814",
  },
  {
    name: "Fahmi Firmansyah, S.Kom",
    nip: "199001152015031004",
    no_telepon: "081234567815",
  },
  {
    name: "Sri Wahyuni, S.Pd",
    nip: "197811252002122003",
    no_telepon: "081234567816",
  },
  {
    name: "Agus Setiawan, S.Pd",
    nip: "196912052000031001",
    no_telepon: "081234567817",
  },
  {
    name: "Fitria Rahmadani, M.Pd",
    nip: "198805102012012007",
    no_telepon: "081234567818",
  },
  {
    name: "Doni Kurniawan, S.Pd",
    nip: "197704182001121003",
    no_telepon: "081234567819",
  },
  {
    name: "Maya Indah Sari, S.Psi",
    nip: "198912152014012008",
    no_telepon: "081234567820",
  },
  {
    name: "Ridwan Kamil, S.Pd",
    nip: "197003201993031002",
    no_telepon: "081234567821",
  },
  {
    name: "Ani Suryani, S.Pd",
    nip: "198106252006042004",
    no_telepon: "081234567822",
  },
  {
    name: "Joko Widodo, S.Pd",
    nip: "196807151990031004",
    no_telepon: "081234567823",
  },
  {
    name: "Lilis Suryani, S.Pd",
    nip: "198402182009012005",
    no_telepon: "081234567824",
  },
  {
    name: "Imam Susanto, S.Pd",
    nip: "197510102000121001",
    no_telepon: "081234567825",
  },
];
