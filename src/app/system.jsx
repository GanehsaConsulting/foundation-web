import { FaBowlFood, FaPeopleRoof, FaPeopleCarryBox, FaCheckDouble } from "react-icons/fa6";

export const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Aktivitas & Artikel", href: "/post" },
    { label: "Program", href: "/program" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" }
];

// Hero Section
export const heroSection = {
    title: "Makan Gratis, Masa Depan Berkualitas",
    subtitle: "Program makan siang gratis untuk siswa SD hingga SMA/SMK sebagai upaya mendukung pendidikan dan kesehatan anak Indonesia.",
    buttonText: "Lihat Program",
    imageUrl: "/images/hero-anak-makan.jpg"
};

// Keunggulan Program
export const keunggulanSection = [
    {
        icon: <FaBowlFood />,
        title: "Gizi Seimbang",
        description: "Menu harian disusun oleh ahli gizi untuk mendukung tumbuh kembang anak."
    },
    {
        icon: <FaPeopleRoof />,
        title: "Tepat Sasaran",
        description: "Diberikan kepada siswa dari keluarga prasejahtera yang diverifikasi oleh sekolah dan dinas sosial."
    },
    {
        icon: <FaPeopleCarryBox />,
        title: "Kolaboratif",
        description: "Bekerja sama dengan warung lokal dan kantin sekolah untuk pemberdayaan ekonomi."
    },
    {
        icon: <FaCheckDouble />,
        title: "Terukur",
        description: "Pelaporan data distribusi makanan dilakukan setiap minggu melalui sistem terintegrasi."
    }
];

// Tentang Yayasan
export const tentangSection = {
    name: "Yayasan Aksata Cendekia Nusantara",
    established: 2021,
    mission: "Mewujudkan generasi sehat dan cerdas melalui pemenuhan gizi bagi pelajar secara berkelanjutan.",
    vision: "Indonesia tanpa kelaparan di bangku sekolah.",
    description: "Kami adalah mitra pelaksana resmi dari program pemerintah untuk makan gratis siswa SD–SMA/SMK, dengan fokus pada transparansi, keberlanjutan, dan keberpihakan pada yang membutuhkan."
};

// Program
export const programSection = {
    name: "Program Makan Gratis Pelajar",
    target: "Siswa SD hingga SMA/SMK dari keluarga tidak mampu",
    activeCities: ["Jakarta Timur", "Bekasi", "Yogyakarta", "Bandung"],
    currentBeneficiaries: 1280,
    goal2026: 5000,
    menuType: "Nasi + lauk + sayur + buah + air mineral",
    schedule: "Senin – Jumat, pukul 11.00 – 13.00"
};

export const programOverview = {
    description: `Program ini merupakan bagian dari kebijakan pemerintah dalam menjamin gizi seimbang bagi pelajar dari keluarga prasejahtera. Makanan didistribusikan melalui kantin sekolah dan mitra warung lokal setiap hari sekolah.`,
    tujuan: [
        "Menurunkan angka kelaparan di lingkungan sekolah.",
        "Mendukung konsentrasi belajar siswa.",
        "Meningkatkan partisipasi dan semangat belajar."
    ],
    sasaran: "Siswa SD, SMP, dan SMA/SMK dari keluarga tidak mampu, berdasarkan data dari sekolah dan dinas sosial."
};


// Lokasi Aktif
export const lokasiSection = [
    {
        kota: "Jakarta Timur",
        sekolah: 12,
        siswa: 380
    },
    {
        kota: "Bekasi",
        sekolah: 8,
        siswa: 300
    },
    {
        kota: "Yogyakarta",
        sekolah: 6,
        siswa: 260
    },
    {
        kota: "Bandung",
        sekolah: 5,
        siswa: 340
    }
];

// Kontak
export const kontakSection = {
    alamat: "Jl. H. Nawi No. 88, Jakarta Selatan, DKI Jakarta",
    telepon: "021-1234567",
    whatsapp: "0812-3456-7890",
    email: "info@aksatacendekia.or.id",
    instagram: "@aksata.cendekia"
};


export const footer = {
    description: "Yayasan Piring Harapan adalah organisasi nirlaba yang membantu siswa dari keluarga prasejahtera mendapatkan makanan bergizi setiap hari.",
    links: [
        { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
        { label: "Syarat & Ketentuan", href: "/syarat" }
    ],
    socials: {
        instagram: "https://instagram.com/piringharapan",
        facebook: "https://facebook.com/piringharapan",
        whatsapp: "https://wa.me/6281234567890",
        email: "info@piringharapan.org"
    },
    address: "Jl. Kebahagiaan No.1, Jakarta Selatan"
};

export const ctaSection = {
    title: "Satu Piring Hari Ini, Masa Depan Mereka Esok",
    text: "Donasi Rp10.000 dapat menyediakan satu porsi makan bergizi. Yuk, jadi bagian dari gerakan #PiringHarapan!",
    button: {
        label: "Donasi Sekarang",
        href: "/donasi"
    }
};

export const donationStats = {
    mealsServed: 12435,
    schoolsSupported: 12,
    activeVolunteers: 87
};


export const DataArticles = [
    {
        id: 1,
        status: "published",
        highlight: true,
        category: "Teknologi",
        title: "Inovasi Teknologi dalam Pengolahan Ikan: Meningkatkan Kualitas dan Efisiensi",
        content: "<p>Di era modern ini, industri pengolahan ikan mengalami transformasi besar berkat kemajuan teknologi. Inovasi teknologi tidak hanya meningkatkan kualitas produk ikan tetapi juga memperbaiki efisiensi proses produksi. Berikut adalah beberapa terobosan terbaru dalam pengolahan ikan yang patut diperhatikan.</p><p><strong>1. Sistem Otomatisasi dan Robotik</strong></p><p>Penggunaan sistem otomatisasi dan robotik dalam pengolahan ikan telah merevolusi cara produk ikan diproses. Mesin pemotong ikan otomatis dan robot pengemas mengurangi ketergantungan pada tenaga kerja manusia, mengurangi kesalahan, dan meningkatkan kecepatan produksi. Ini memungkinkan pengolahan ikan dalam jumlah besar dengan konsistensi tinggi.</p><p><strong>2. Teknologi Pemantauan Kualitas</strong></p><p>Teknologi pemantauan kualitas seperti sensor cerdas dan sistem pengolahan data real-time membantu dalam memastikan produk ikan memenuhi standar kualitas yang ketat. Sensor ini dapat mendeteksi perubahan suhu, kelembaban, dan kontaminan lainnya, memberikan informasi langsung kepada pengelola untuk mengambil tindakan segera jika ada masalah.</p><p><strong>3. Proses Filtrasi dan Pembersihan yang Canggih</strong></p><p>Inovasi dalam teknologi filtrasi dan pembersihan ikan sangat penting untuk memastikan bahwa produk akhir bebas dari kontaminan dan memiliki umur simpan yang lebih lama. Teknologi filtrasi modern menggunakan sistem ultrafiltrasi dan nanofiltrasi yang lebih efisien dalam menghilangkan partikel halus dan mikroba dari produk ikan.</p><p><strong>4. Teknologi Pengemasan Berbasis Atmosfer Terubah</strong></p><p>Pengemasan ikan dengan teknologi atmosfer terubah (MAP) telah meningkatkan daya tahan dan kesegaran produk. Dengan mengontrol komposisi gas di dalam kemasan, teknologi ini memperlambat proses pembusukan dan memperpanjang umur simpan ikan. Ini juga membantu dalam mempertahankan kualitas dan rasa produk.</p><p><strong>5. Inovasi dalam Manajemen Rantai Pasokan</strong></p><p>Teknologi manajemen rantai pasokan yang berbasis data dan analitik membantu industri pengolahan ikan dalam mengoptimalkan aliran produk dari kapal penangkap ikan ke fasilitas pengolahan dan distribusi. Dengan memanfaatkan sistem pelacakan dan analitik, perusahaan dapat mengurangi pemborosan, mengelola persediaan lebih baik, dan memastikan produk sampai ke konsumen dalam kondisi terbaik.</p><p><strong>6. Penggunaan Teknologi Berbasis Kecerdasan Buatan (AI)</strong></p><p>Kecerdasan Buatan (AI) dan pembelajaran mesin kini diterapkan dalam berbagai aspek pengolahan ikan. Dari prediksi permintaan pasar hingga pemantauan kualitas dan deteksi cacat produk, AI memberikan wawasan yang membantu dalam pengambilan keputusan yang lebih baik dan mengurangi kesalahan manusia.</p><p><strong>Kesimpulan</strong></p><p>Inovasi teknologi dalam pengolahan ikan menawarkan peluang besar untuk meningkatkan kualitas produk dan efisiensi proses produksi. Dengan mengadopsi teknologi terbaru, industri perikanan dapat mengatasi tantangan masa depan, memenuhi permintaan pasar yang terus berkembang, dan memberikan produk berkualitas tinggi kepada konsumen.</p>",
        excerpt: "Teknologi terbaru dalam pengolahan ikan memberikan kualitas dan efisiensi yang lebih tinggi.",
        thumbnailImage: "https://images.unsplash.com/photo-1474917518260-23f84bd71c75?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-06T14:00:00Z",
        updatedAt: "2024-07-06T14:00:00Z",
        tags: ["teknologi", "pengolahan", "ikan", "otomatisasi"],
        view: 1250
    },
    {
        id: 2,
        status: "published",
        highlight: false,
        category: "Lingkungan",
        title: "Perlindungan Lingkungan: Upaya Kami untuk Konservasi Laut",
        content: "<p><strong>Perlindungan Lingkungan: Upaya Kami untuk Konservasi Laut</strong></p><p>Konservasi laut adalah tanggung jawab bersama yang memerlukan komitmen dan tindakan dari semua pihak, baik itu individu, komunitas, maupun perusahaan. Di tengah tantangan global terkait perubahan iklim, polusi, dan penangkapan ikan yang tidak berkelanjutan, kami berkomitmen untuk melindungi ekosistem laut dan mendukung upaya konservasi dengan berbagai langkah strategis. Berikut adalah beberapa upaya kami dalam menjaga keberlanjutan lingkungan laut.</p>",
        excerpt: "Perusahaan kami berkomitmen untuk konservasi laut dan perlindungan lingkungan.",
        thumbnailImage: "https://images.unsplash.com/photo-1640806878940-1e3e0eea2afe?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-07T15:00:00Z",
        updatedAt: "2024-07-07T15:00:00Z",
        tags: ["lingkungan", "konservasi", "laut", "keberlanjutan"],
        view: 890
    },
    {
        id: 3,
        status: "published",
        highlight: false,
        category: "Lingkungan",
        title: "Kebijakan Baru untuk Perlindungan Terumbu Karang di Laut",
        content: "<p><strong>Kebijakan Baru untuk Perlindungan Terumbu Karang di Laut</strong></p><p>Terumbu karang adalah salah satu ekosistem laut yang paling vital dan kaya akan keanekaragaman hayati. Mereka berfungsi sebagai rumah bagi banyak spesies laut dan memberikan berbagai manfaat ekosistem yang penting, mulai dari perlindungan pantai hingga penyediaan sumber daya ekonomi bagi komunitas pesisir.</p>",
        excerpt: "Kebijakan terbaru pemerintah untuk melindungi terumbu karang di lautan akan berpengaruh besar pada keberlangsungan ekosistem laut.",
        thumbnailImage: "https://images.unsplash.com/photo-1640399678969-8e9993093449?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-08T09:00:00Z",
        updatedAt: "2024-07-08T09:00:00Z",
        tags: ["kebijakan", "terumbu karang", "perlindungan", "ekosistem"],
        view: 756
    },
    {
        id: 4,
        status: "published",
        highlight: true,
        category: "Produk",
        title: "Pengenalan Produk Ikan Segar: Menyajikan Kualitas Terbaik dari Laut",
        content: "<p><strong>Pengenalan Produk Ikan Segar: Menyajikan Kualitas Terbaik dari Laut</strong></p><p>Di dunia kuliner, ikan segar sering kali menjadi pilihan utama untuk memastikan hidangan yang lezat dan bergizi. Kualitas ikan segar tidak hanya memengaruhi rasa dan tekstur, tetapi juga kesehatan dan kepuasan konsumen.</p>",
        excerpt: "Peluncuran produk ikan segar terbaru kami membawa kualitas terbaik langsung dari laut ke meja makan Anda.",
        thumbnailImage: "https://images.unsplash.com/photo-1635843134523-48433763fce7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-09T10:00:00Z",
        updatedAt: "2024-07-09T10:00:00Z",
        tags: ["produk", "ikan segar", "kualitas", "kuliner"],
        view: 1420
    },
    {
        id: 5,
        status: "published",
        highlight: false,
        category: "Komunitas",
        title: "Peran Nelayan Tradisional dalam Pelestarian Sumber Daya Laut",
        content: "<p><strong>Peran Nelayan Tradisional dalam Pelestarian Sumber Daya Laut</strong></p><p>Nelayan tradisional memainkan peran yang sangat penting dalam pelestarian sumber daya laut. Meskipun mereka sering kali menggunakan metode yang telah diwariskan secara turun-temurun, kontribusi mereka terhadap keberlanjutan dan konservasi laut tidak bisa dianggap remeh.</p>",
        excerpt: "Nelayan tradisional memiliki peran penting dalam menjaga keberlanjutan sumber daya laut melalui praktik tradisional mereka.",
        thumbnailImage: "https://images.unsplash.com/photo-1534532022510-1d839b268414?q=80&w=3035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-11T12:00:00Z",
        updatedAt: "2024-07-11T12:00:00Z",
        tags: ["nelayan", "tradisional", "pelestarian", "komunitas"],
        view: 634
    },
    {
        id: 6,
        status: "published",
        highlight: true,
        category: "Akuakultur",
        title: "Tantangan dan Peluang dalam Industri Akuakultur Modern",
        content: "<p><strong>Tantangan dan Peluang dalam Industri Akuakultur Modern</strong></p><p>Industri akuakultur modern menghadapi berbagai tantangan, tetapi juga membuka banyak peluang untuk inovasi dan pertumbuhan. Dengan teknologi terbaru dan pendekatan berkelanjutan, sektor ini dapat berkembang pesat.</p>",
        excerpt: "Industri akuakultur modern menghadapi berbagai tantangan, tetapi juga membuka banyak peluang untuk inovasi dan pertumbuhan.",
        thumbnailImage: "https://plus.unsplash.com/premium_photo-1661962278758-d529030366fb?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-13T14:00:00Z",
        updatedAt: "2024-07-13T14:00:00Z",
        tags: ["akuakultur", "industri", "modern", "inovasi"],
        view: 978
    },
    {
        id: 7,
        status: "published",
        highlight: false,
        category: "Iklim",
        title: "Perubahan Iklim dan Dampaknya terhadap Populasi Ikan",
        content: "<p><strong>Perubahan Iklim dan Dampaknya terhadap Populasi Ikan</strong></p><p>Perubahan iklim merupakan tantangan global yang mempengaruhi berbagai aspek kehidupan, termasuk ekosistem laut dan populasi ikan. Suhu global yang meningkat, perubahan pola curah hujan, dan pergeseran suhu laut memiliki dampak signifikan terhadap kesehatan dan distribusi populasi ikan di seluruh dunia.</p>",
        excerpt: "Perubahan iklim memberikan dampak signifikan terhadap populasi ikan dan kesehatan ekosistem laut.",
        thumbnailImage: "https://images.unsplash.com/photo-1656980900851-a4a01e592c5c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-14T15:00:00Z",
        updatedAt: "2024-07-14T15:00:00Z",
        tags: ["perubahan iklim", "populasi ikan", "ekosistem", "dampak"],
        view: 1156
    },
    {
        id: 8,
        status: "published",
        highlight: true,
        category: "Acara",
        title: "Festival Kuliner Laut Banda: Merayakan Kekayaan Laut dengan Keluarga",
        content: "<p><strong>Festival Kuliner Laut Banda: Merayakan Kekayaan Laut dengan Keluarga</strong></p><p>Indonesia, sebagai negara kepulauan dengan kekayaan laut yang melimpah, memiliki berbagai festival budaya yang merayakan hasil laut dan keanekaragaman kulinernya. Salah satu festival yang menonjol adalah Festival Kuliner Laut Banda, sebuah acara tahunan yang diadakan di Kepulauan Banda, Maluku.</p>",
        excerpt: "Festival Kuliner Laut Banda tahunan hadir kembali dengan berbagai hidangan laut yang lezat dan acara seru untuk seluruh keluarga.",
        thumbnailImage: "https://plus.unsplash.com/premium_photo-1666302129041-71b6d6124093?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-07-15T15:00:00Z",
        updatedAt: "2024-07-15T15:00:00Z",
        tags: ["festival", "kuliner", "laut", "keluarga"],
        view: 2134
    },
    {
        id: 9,
        status: "published",
        highlight: true,
        category: "Lingkungan",
        title: "Meningkatkan Kualitas Air Laut: Inisiatif dan Solusi Terkini",
        content: "<p>Kualitas air laut adalah faktor kunci dalam menjaga kesehatan ekosistem laut dan kesejahteraan masyarakat pesisir. Di Indonesia, sebagai negara kepulauan dengan garis pantai yang panjang, kualitas air laut sangat penting untuk ekosistem laut, perikanan, dan pariwisata.</p>",
        excerpt: "Inisiatif terbaru untuk meningkatkan kualitas air laut akan membantu menjaga kesehatan ekosistem laut.",
        thumbnailImage: "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-01T00:00:00.000Z",
        updatedAt: "2024-08-01T00:00:00.000Z",
        tags: ["kualitas air", "lingkungan", "inisiatif", "teknologi"],
        view: 1567
    },
    {
        id: 10,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Workshop Pemeliharaan Terumbu Karang untuk Komunitas Lokal",
        content: "<p>Workshop pemeliharaan terumbu karang merupakan inisiatif penting untuk melibatkan komunitas lokal dalam upaya konservasi laut. Program ini dirancang khusus untuk memberikan pengetahuan praktis kepada masyarakat pesisir tentang cara merawat dan melestarikan ekosistem terumbu karang yang sangat vital bagi kehidupan laut.</p>",
        excerpt: "Program pelatihan untuk masyarakat pesisir dalam merawat dan melestarikan terumbu karang.",
        thumbnailImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-15T09:00:00Z",
        updatedAt: "2024-08-15T09:00:00Z",
        tags: ["workshop", "terumbu karang", "komunitas", "konservasi"],
        view: 445
    },
    {
        id: 11,
        status: "published",
        highlight: true,
        category: "Activity",
        title: "Kampanye Bersih Pantai: Aksi Nyata untuk Laut yang Lebih Sehat",
        content: "<p>Kampanye bersih pantai merupakan gerakan kolektif yang bertujuan untuk mengurangi pencemaran laut dan meningkatkan kesadaran masyarakat tentang pentingnya menjaga kebersihan ekosistem pesisir. Kegiatan ini melibatkan partisipasi aktif dari berbagai elemen masyarakat untuk menciptakan perubahan nyata.</p>",
        excerpt: "Gerakan massal pembersihan pantai yang melibatkan ribuan relawan dari berbagai kalangan.",
        thumbnailImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-16T06:30:00Z",
        updatedAt: "2024-08-16T06:30:00Z",
        tags: ["kampanye", "bersih pantai", "relawan", "lingkungan"],
        view: 1789
    },
    {
        id: 12,
        status: "published",
        highlight: false,
        category: "Teknologi",
        title: "Teknologi AI dalam Monitoring Kesehatan Ekosistem Laut",
        content: "<p>Penggunaan teknologi AI dalam monitoring ekosistem laut membuka era baru dalam konservasi maritim. Sistem cerdas ini mampu menganalisis data kompleks dari berbagai sensor untuk memberikan insight yang akurat tentang kondisi kesehatan laut dan prediksi perubahan lingkungan.</p>",
        excerpt: "Implementasi kecerdasan buatan untuk memantau dan menganalisis kondisi kesehatan laut secara real-time.",
        thumbnailImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-17T11:15:00Z",
        updatedAt: "2024-08-17T11:15:00Z",
        tags: ["AI", "monitoring", "ekosistem laut", "teknologi"],
        view: 892
    },
    {
        id: 13,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Program Edukasi Laut untuk Generasi Muda",
        content: "<p>Program edukasi laut untuk generasi muda merupakan investasi jangka panjang dalam pelestarian ekosistem maritim. Melalui pendekatan pembelajaran yang interaktif dan menyenangkan, program ini bertujuan menanamkan nilai-nilai konservasi laut sejak dini.</p>",
        excerpt: "Inisiatif pendidikan komprehensif untuk menumbuhkan kesadaran lingkungan laut pada anak-anak dan remaja.",
        thumbnailImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-18T14:20:00Z",
        updatedAt: "2024-08-18T14:20:00Z",
        tags: ["edukasi", "generasi muda", "konservasi", "program"],
        view: 567
    },
    {
        id: 14,
        status: "published",
        highlight: true,
        category: "Produk",
        title: "Inovasi Kemasan Ramah Lingkungan untuk Produk Laut",
        content: "<p>Pengembangan kemasan ramah lingkungan untuk produk laut menjadi solusi inovatif dalam mengatasi krisis pencemaran plastik. Teknologi terbaru ini menggunakan bahan biodegradable yang dapat terurai secara alami tanpa meninggalkan residu berbahaya bagi ekosistem laut.</p>",
        excerpt: "Terobosan baru dalam teknologi kemasan biodegradable untuk mengurangi limbah plastik di laut.",
        thumbnailImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-19T10:45:00Z",
        updatedAt: "2024-08-19T10:45:00Z",
        tags: ["kemasan", "ramah lingkungan", "biodegradable", "inovasi"],
        view: 1234
    },
    {
        id: 15,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Festival Diving dan Fotografi Bawah Laut Tahunan",
        content: "<p>Festival diving dan fotografi bawah laut merupakan perayaan keindahan dunia bawah laut yang menggabungkan aktivitas rekreasi dengan misi konservasi. Event ini menarik para penyelam dan fotografer dari seluruh dunia untuk mengabadikan pesona kehidupan laut Indonesia.</p>",
        excerpt: "Acara tahunan yang memadukan keindahan diving dengan seni fotografi untuk mempromosikan pariwisata laut berkelanjutan.",
        thumbnailImage: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-20T08:00:00Z",
        updatedAt: "2024-08-20T08:00:00Z",
        tags: ["festival", "diving", "fotografi", "pariwisata"],
        view: 823
    },
    {
        id: 16,
        status: "published",
        highlight: false,
        category: "Lingkungan",
        title: "Penelitian Dampak Mikroplastik terhadap Ikan Konsumsi",
        content: "<p>Penelitian tentang dampak mikroplastik terhadap ikan konsumsi menjadi semakin urgent mengingat tingginya tingkat pencemaran plastik di perairan. Studi ini menganalisis bagaimana partikel mikroplastik mempengaruhi kesehatan ikan dan potensi risikonya bagi konsumen.</p>",
        excerpt: "Studi komprehensif tentang pengaruh pencemaran mikroplastik pada kesehatan ikan dan keamanan pangan.",
        thumbnailImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-21T13:30:00Z",
        updatedAt: "2024-08-21T13:30:00Z",
        tags: ["mikroplastik", "penelitian", "ikan konsumsi", "keamanan pangan"],
        view: 945
    },
    {
        id: 17,
        status: "published",
        highlight: true,
        category: "Teknologi",
        title: "Peluncuran Aplikasi Mobile untuk Pelaporan Pencemaran Laut",
        content: "<p>Aplikasi mobile untuk pelaporan pencemaran laut merupakan inovasi teknologi yang memberdayakan masyarakat dalam upaya perlindungan lingkungan. Platform ini memungkinkan pelaporan cepat dan akurat tentang kasus pencemaran untuk respons yang lebih efektif.</p>",
        excerpt: "Platform digital yang memudahkan masyarakat untuk melaporkan kasus pencemaran laut secara real-time.",
        thumbnailImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-22T09:15:00Z",
        updatedAt: "2024-08-22T09:15:00Z",
        tags: ["aplikasi mobile", "pelaporan", "pencemaran laut", "digital"],
        view: 1456
    },
    {
        id: 18,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Turnamen Memancing Berkelanjutan: Sport Fishing dengan Prinsip Konservasi",
        content: "<p>Turnamen memancing berkelanjutan menghadirkan konsep baru dalam dunia sport fishing yang menggabungkan kompetisi dengan misi konservasi. Event ini mempromosikan praktik catch and release untuk mempertahankan populasi ikan laut yang sehat.</p>",
        excerpt: "Kompetisi memancing yang mengedepankan praktik catch and release untuk menjaga populasi ikan.",
        thumbnailImage: "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-23T07:00:00Z",
        updatedAt: "2024-08-23T07:00:00Z",
        tags: ["turnamen", "memancing", "berkelanjutan", "konservasi"],
        view: 678
    },
    {
        id: 19,
        status: "published",
        highlight: false,
        category: "Teknologi",
        title: "Pengembangan Bioplastik dari Limbah Hasil Laut",
        content: "<p>Pengembangan bioplastik dari limbah hasil laut merupakan solusi inovatif yang mengatasi dua masalah sekaligus: pengelolaan limbah industri perikanan dan pencemaran plastik. Teknologi ini mengubah limbah organik menjadi material yang berguna dan ramah lingkungan.</p>",
        excerpt: "Inovasi teknologi yang mengubah limbah kulit ikan dan cangkang menjadi bioplastik ramah lingkungan.",
        thumbnailImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-24T12:00:00Z",
        updatedAt: "2024-08-24T12:00:00Z",
        tags: ["bioplastik", "limbah", "hasil laut", "ramah lingkungan"],
        view: 789
    },
    {
        id: 20,
        status: "published",
        highlight: true,
        category: "Iklim",
        title: "Ekspedisi Penelitian Laut Dalam: Menemukan Spesies Baru di Palung Mariana Indonesia",
        content: "<p>Ekspedisi penelitian laut dalam yang dilakukan di perairan Indonesia telah menghasilkan penemuan spektakuler berupa puluhan spesies baru yang sebelumnya tidak diketahui ilmu pengetahuan. Penemuan ini menunjukkan betapa kayanya keanekaragaman hayati laut Indonesia yang masih menyimpan banyak misteri.</p>",
        excerpt: "Tim peneliti internasional berhasil menemukan lebih dari 20 spesies baru di kedalaman laut Indonesia.",
        thumbnailImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-25T10:30:00Z",
        updatedAt: "2024-08-25T10:30:00Z",
        tags: ["ekspedisi", "penelitian", "laut dalam", "spesies baru"],
        view: 2345
    },
    {
        id: 21,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Kompetisi Inovasi Teknologi Laut untuk Startup",
        content: "<p>Kompetisi inovasi teknologi laut untuk startup menjadi wadah bagi para entrepreneur muda untuk mengembangkan solusi teknologi inovatif dalam bidang maritim. Event ini mendorong lahirnya startup-startup yang fokus pada penyelesaian tantangan industri kelautan modern.</p>",
        excerpt: "Ajang kompetisi untuk mendorong inovasi teknologi maritim dari para entrepreneur muda.",
        thumbnailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-26T14:00:00Z",
        updatedAt: "2024-08-26T14:00:00Z",
        tags: ["kompetisi", "startup", "teknologi laut", "inovasi"],
        view: 654
    },
    {
        id: 22,
        status: "published",
        highlight: true,
        category: "Lingkungan",
        title: "Proyek Restorasi Mangrove Terbesar di Asia Tenggara",
        content: "<p>Proyek restorasi mangrove terbesar di Asia Tenggara merupakan inisiatif ambisius yang dipimpin Indonesia untuk memulihkan ekosistem mangrove yang telah rusak. Program ini melibatkan kolaborasi regional yang bertujuan menanam jutaan pohon mangrove dalam lima tahun ke depan.</p>",
        excerpt: "Indonesia memimpin proyek restorasi mangrove terbesar yang melibatkan 5 negara ASEAN.",
        thumbnailImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-27T08:45:00Z",
        updatedAt: "2024-08-27T08:45:00Z",
        tags: ["restorasi", "mangrove", "asia tenggara", "kolaborasi"],
        view: 1876
    },
    {
        id: 23,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Kelas Memasak Seafood untuk Chef Profesional",
        content: "<p>Kelas memasak seafood untuk chef profesional dirancang untuk meningkatkan keahlian kuliner dalam mengolah hasil laut. Program ini menghadirkan master chef internasional yang akan berbagi teknik-teknik canggih dalam pengolahan seafood berkualitas tinggi.</p>",
        excerpt: "Program pelatihan intensif teknik memasak seafood dengan standar internasional untuk chef profesional.",
        thumbnailImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-28T16:20:00Z",
        updatedAt: "2024-08-28T16:20:00Z",
        tags: ["kelas memasak", "seafood", "chef profesional", "pelatihan"],
        view: 543
    },
    {
        id: 24,
        status: "published",
        highlight: true,
        category: "Teknologi",
        title: "Breakthrough: Energi Terbarukan dari Gelombang Laut",
        content: "<p>Breakthrough dalam teknologi energi terbarukan dari gelombang laut menandai era baru dalam pemanfaatan sumber daya laut untuk energi bersih. Inovasi ini berpotensi menjadi solusi berkelanjutan untuk kebutuhan energi pesisir Indonesia yang ramah lingkungan.</p>",
        excerpt: "Teknologi revolusioner untuk menghasilkan listrik dari energi gelombang laut pertama di Indonesia.",
        thumbnailImage: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-29T11:10:00Z",
        updatedAt: "2024-08-29T11:10:00Z",
        tags: ["energi terbarukan", "gelombang laut", "breakthrough", "teknologi"],
        view: 1987
    },
    {
        id: 25,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Seminar Internasional Kebijakan Laut dan Perubahan Iklim",
        content: "<p>Seminar internasional kebijakan laut dan perubahan iklim mempertemukan para ahli, pembuat kebijakan, dan aktivis lingkungan dari berbagai negara. Event ini membahas strategi global dalam menghadapi dampak perubahan iklim terhadap ekosistem laut.</p>",
        excerpt: "Forum diskusi global tentang strategi kebijakan maritim dalam menghadapi tantangan perubahan iklim.",
        thumbnailImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-30T09:00:00Z",
        updatedAt: "2024-08-30T09:00:00Z",
        tags: ["seminar", "internasional", "kebijakan laut", "perubahan iklim"],
        view: 765
    },
    {
        id: 26,
        status: "published",
        highlight: false,
        category: "Teknologi",
        title: "Sistem Early Warning untuk Tsunami Berbasis AI",
        content: "<p>Sistem early warning untuk tsunami berbasis AI merupakan inovasi teknologi yang meningkatkan kemampuan prediksi dan respons terhadap ancaman tsunami. Sistem ini menggunakan machine learning untuk menganalisis data seismik secara real-time dengan akurasi tinggi.</p>",
        excerpt: "Pengembangan sistem peringatan dini tsunami yang menggunakan kecerdasan buatan untuk akurasi prediksi yang lebih tinggi.",
        thumbnailImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-08-31T13:25:00Z",
        updatedAt: "2024-08-31T13:25:00Z",
        tags: ["early warning", "tsunami", "AI", "prediksi"],
        view: 1123
    },
    {
        id: 27,
        status: "published",
        highlight: true,
        category: "Teknologi",
        title: "Peluncuran Kapal Riset Laut Bertenaga Hidrogen Pertama",
        content: "<p>Peluncuran kapal riset laut bertenaga hidrogen pertama menandai milestone penting dalam pengembangan teknologi maritim ramah lingkungan. Kapal ini akan menjadi platform penelitian yang tidak menghasilkan emisi karbon dalam operasionalnya.</p>",
        excerpt: "Indonesia meluncurkan kapal penelitian laut pertama yang menggunakan teknologi fuel cell hidrogen.",
        thumbnailImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-09-01T10:15:00Z",
        updatedAt: "2024-09-01T10:15:00Z",
        tags: ["kapal riset", "hidrogen", "ramah lingkungan", "teknologi"],
        view: 1654
    },
    {
        id: 28,
        status: "published",
        highlight: false,
        category: "Activity",
        title: "Program Magang Mahasiswa di Industri Perikanan Modern",
        content: "<p>Program magang mahasiswa di industri perikanan modern memberikan kesempatan belajar langsung tentang teknologi terkini dalam bidang perikanan. Program ini menjembatani gap antara teori akademis dengan praktek industri yang sesungguhnya.</p>",
        excerpt: "Kesempatan magang untuk mahasiswa kelautan dan perikanan di fasilitas industri berteknologi tinggi.",
        thumbnailImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-09-02T15:40:00Z",
        updatedAt: "2024-09-02T15:40:00Z",
        tags: ["magang", "mahasiswa", "perikanan", "industri"],
        view: 432
    },
    {
        id: 29,
        status: "published",
        highlight: false,
        category: "Lingkungan",
        title: "Discovery: Bakteri Laut Pemakan Plastik dari Perairan Indonesia",
        content: "<p>Penemuan bakteri laut pemakan plastik dari perairan Indonesia membuka harapan baru dalam penanganan krisis pencemaran plastik di laut. Bakteri ini memiliki kemampuan unik untuk menguraikan polimer plastik menjadi senyawa yang tidak berbahaya bagi lingkungan.</p>",
        excerpt: "Penemuan bakteri unik yang mampu menguraikan sampah plastik di laut, berpotensi menjadi solusi pencemaran.",
        thumbnailImage: "https://images.unsplash.com/photo-1579781354171-45f67f0d8f18?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2024-09-03T12:50:00Z",
        updatedAt: "2024-09-03T12:50:00Z",
        tags: ["bakteri", "pemakan plastik", "discovery", "pencemaran"],
        view: 1345
    }
];