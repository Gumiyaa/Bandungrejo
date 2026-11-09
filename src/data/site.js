export const nav = [
  { label: 'Beranda', to: '/', hash: '' },
  { label: 'Profil Desa', to: '/#profil', hash: '#profil' },
  { label: 'Pemerintahan', to: '/#kantor', hash: '#kantor' },
  { label: 'Layanan', to: '/layanan', hash: '' },
  { label: 'Data & Statistik', to: '/#transparansi', hash: '#transparansi' },
  { label: 'Potensi & UMKM', to: '/#potensi', hash: '#potensi' },
  { label: 'Berita', to: '/#berita', hash: '#berita' },
]

export const stats = [
  { value: '4.820', unit: 'Jiwa', label: 'Penduduk' },
  { value: '1.350', unit: 'KK', label: 'Terdata' },
  { value: '382,4', unit: 'Ha', label: 'Luas Wilayah' },
  { value: '78', unit: '%', label: 'Penduduk Produktif' },
  { value: '18 / 4', unit: '', label: 'RT / Dusun' },
]

export const budget = {
  year: '2024',
  totalIncome: 1482000000,
  totalSpend: 1410000000,
  remaining: 72000000,
  programs: [
    {
      name: 'Pembangunan Fisik, Irigasi & Rabat Beton',
      percent: 88,
      amount: 'Rp 540 juta',
      note: 'Normalisasi 3 pintu air sawah Dk. Bandung & jalan usaha tani 850 m.',
    },
    {
      name: 'Penyelenggaraan Pemerintahan & Siskudes',
      percent: 74,
      amount: 'Rp 380 juta',
      note: 'Operasional kantor balai desa, insentif RT/RW, dan digitalisasi SID.',
    },
    {
      name: 'Pemberdayaan Masyarakat & BUMDes',
      percent: 68,
      amount: 'Rp 290 juta',
      note: 'Bantuan bibit padi unggul organik dan modal usaha anyaman bambu.',
    },
    {
      name: 'Pembinaan Kemasyarakatan, Posyandu & Stunting',
      percent: 82,
      amount: 'Rp 200 juta',
      note: 'Pemberian Makanan Tambahan (PMT) balita, posbindu lansia, dan karang taruna.',
    },
  ],
}

export const news = [
  {
    category: 'Pertanian',
    date: '24 Oktober 2024',
    source: 'Dinas Pertanian',
    title: 'Panen Raya Padi Organik Gapoktan Margo Rukun Tembus 8,4 Ton per Hektare',
    excerpt:
      'Kelompok Tani Desa Bandungrejo berhasil membuktikan efektivitas pupuk kandang terfermentasi dan pengurangan pestisida kimia padi.',
    image: '/img/berita-1.jpg',
  },
  {
    category: 'Bantuan Sosial',
    date: '18 Oktober 2024',
    source: 'Kasi Kesejahteraan',
    title: 'Penyaluran BLT Dana Desa Tahap III Tepat Sasaran bagi 45 KPM',
    excerpt:
      'Pemerintah Desa menyerahkan bantuan langsung tunai tiga bulan sekaligus dengan pendampingan BPD dan Babinsa guna menopang lansia tunggal.',
    image: '/img/berita-2.jpg',
  },
  {
    category: 'Ekonomi Kreatif',
    date: '10 Oktober 2024',
    source: 'Pokja BUMDes',
    title: 'Pelatihan Digital Marketing & Ekspor bagi Pengrajin Anyaman Bambu',
    excerpt:
      'Bekerja sama dengan Universitas di Semarang, puluhan perajin muda dilatih membuat katalog e-commerce dan penetapan kemasan ramah lingkungan.',
    image: '/img/berita-3.jpg',
  },
]

export const products = [
  {
    tag: 'Oleh-oleh Khas',
    title: 'Beras Wangi & Beras Merah',
    desc: 'Beras organik varietas unggul hasil panen sawah tadah hujan Desa Bandungrejo.',
    price: 'Mulai Rp 14.000 / kg',
    image: '/img/produk-beras.jpg',
  },
  {
    tag: 'Peternakan',
    title: 'Ayam Kampung Tradisional',
    desc: 'Ayam kampung sehat dengan pakan alami dari kelompok ternak warga Dusun Bandung.',
    price: 'Rp 35.000 – Rp 60.000 / ekor',
    image: '/img/produk-ayam.jpg',
  },
  {
    tag: 'UMKM',
    title: 'Sentra Rempeyek & Keripik Gaduh',
    desc: 'Aneka rempeyek kacang, teri, dan keripik gaduh produksi ibu-ibu PKK Desa Bandungrejo.',
    price: 'Mulai Rp 12.000 / bungkus',
    image: '/img/produk-rempeyek.jpg',
  },
]

export const contacts = [
  {
    icon: 'users',
    title: 'Meja Konsultasi Tatap Muka',
    desc: 'Senin – Kamis (08.00 – 15.30 WIB)',
  },
  {
    icon: 'phone',
    title: 'Hotline Sekretariat Desa',
    desc: '(0291) 685-112 • Bebas Pulsa Lokal',
  },
  {
    icon: 'shield',
    title: 'Ambulans Siaga Desa 24 Jam',
    desc: 'Hubungi Piket: 0812-2590-4411',
  },
]
