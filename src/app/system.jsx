export const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Program", href: "/program" },
    { label: "Artikel & Aktifitas", href: "/artikel" },
    { label: "Kontak", href: "/kontak" }
];

export const identity = {
    name: "Yayasan Piring Harapan",
    tagline: "Setiap Anak Berhak Makan dengan Layak",
    description:
        "Yayasan Piring Harapan adalah organisasi nirlaba yang menyediakan program makan gratis bagi siswa SD hingga SMA dari keluarga kurang mampu. Kami percaya bahwa gizi yang cukup adalah fondasi dari pendidikan dan masa depan yang cerah.",
    founded: "2021",
    location: "Jakarta Selatan, Indonesia",
    legal_number: "AHU-0023456.AH.01.04.Tahun 2021",
    programs: [
        {
            title: "Makan Bareng Gratis",
            description:
                "Program inti kami menyediakan makan siang bergizi secara gratis di sekolah-sekolah mitra, mulai dari SD hingga SMA. Tujuannya adalah untuk mendukung tumbuh kembang anak dan mencegah kelaparan di lingkungan sekolah.",
            image: "/images/program-makan-bareng.jpg",
        },
        {
            title: "Dapur Komunitas",
            description:
                "Kami bekerja sama dengan warga lokal untuk membangun dapur komunitas di area sekitar sekolah. Dapur ini dikelola bersama oleh relawan dan orang tua murid.",
            image: "/images/dapur-komunitas.jpg",
        },
        {
            title: "Donasi Piring Harapan",
            description:
                "Kampanye penggalangan dana terbuka untuk mendukung pembiayaan bahan makanan, operasional dapur, dan distribusi makanan ke sekolah-sekolah.",
            image: "/images/donasi.jpg",
        },
    ],
    contact: {
        email: "info@piringharapan.org",
        phone: "+62 812 3456 7890",
        whatsapp: "https://wa.me/6281234567890",
        address: "Jl. Kebahagiaan No.1, Jakarta Selatan",
        instagram: "@piringharapan",
        facebook: "fb.com/piringharapan",
    },
};

// site.config.ts atau constants.ts

export const siteMeta = {
    title: "Yayasan Piring Harapan",
    description: "Program makan bareng gratis untuk siswa SD hingga SMA dari keluarga kurang mampu.",
    url: "https://piringharapan.org",
    ogImage: "/images/og-image.jpg"
};


export const heroSection = {
    headline: "Makan Bareng Gratis untuk Masa Depan Cerah",
    subheadline: "Kami menyediakan makan siang bergizi gratis untuk siswa SD hingga SMA yang membutuhkan.",
    ctaText: "Dukung Sekarang",
    ctaHref: "/donasi",
    image: "/images/hero.jpg"
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
