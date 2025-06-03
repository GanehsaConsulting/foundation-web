import { visi, misi } from "@/app/system"
import { Title } from "./title"

export const VisiMisi = () => {
    return (
        <main className="margin my-10">
            <section>
                {/* Hero Section with Parallax Effect */}
                <div className="relative overflow-hidden rounded-main mb-20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-main/20 via-transparent to-brand-accent/20 z-10" />
                    <img
                        className="w-full h-[40vh] md:h-[45vh] object-cover transition-transform duration-1000 group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Visi Misi"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />
                    
                    {/* Floating Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="text-center text-white">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                                Visi & Misi
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 animate-slide-up">
                                Bersama Membangun Masa Depan Indonesia
                            </p>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-brand-main/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl animate-pulse delay-500" />
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
                    {[
                        { icon: "🎯", label: "Target", value: "1 Juta", desc: "Siswa Terlayani" },
                        { icon: "🍽️", label: "Makan", value: "365 Hari", desc: "Setiap Tahun" },
                        { icon: "🏫", label: "Sekolah", value: "1000+", desc: "Mitra Sekolah" },
                        { icon: "🤝", label: "Gotong", value: "Royong", desc: "Bersama" }
                    ].map((stat, idx) => (
                        <div key={idx} className="group relative">
                            <div className="p-4 md:p-6 bg-gradient-to-br from-brand-base/40 to-brand-base/20 backdrop-blur-lg rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-main to-brand-accent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
                                
                                <div className="relative text-center">
                                    <div className="text-2xl md:text-3xl mb-2 md:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-brand-main to-brand-accent bg-clip-text text-transparent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                                        {stat.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visi Section with Enhanced Design */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-main/20 to-brand-accent/20 rounded-full mb-6">
                            <span className="text-2xl">🎯</span>
                            <span className="text-lg font-semibold bg-gradient-to-r from-brand-main to-brand-accent bg-clip-text text-transparent">
                                Visi Kami
                            </span>
                        </div>
                    </div>
                    
                    <div className="relative max-w-5xl mx-auto">
                        {/* Background Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-main/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl" />
                        
                        <div className="group relative p-8 md:p-12 bg-gradient-to-br from-brand-base/60 to-brand-base/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-700">
                            {/* Card glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-main via-brand-accent to-brand-main rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-lg" />
                            
                            <div className="relative">
                                {/* Vision Icon with Animation */}
                                <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mb-8 mx-auto bg-gradient-to-br from-brand-main/30 to-brand-accent/30 rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                                    <span className="text-4xl md:text-6xl">🎯</span>
                                </div>
                                
                                {/* Vision Text with Enhanced Typography */}
                                <div className="relative">
                                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-main to-brand-accent rounded-full opacity-40" />
                                    <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed pl-8 bg-gradient-to-tr from-brand-invert via-brand-invert to-brand-accent bg-clip-text text-transparent">
                                        "{visi}"
                                    </p>
                                </div>
                                
                                {/* Bottom accent elements */}
                                <div className="flex justify-center gap-2 mt-8">
                                    <div className="h-1 w-8 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-60" />
                                    <div className="h-1 w-12 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-80" />
                                    <div className="h-1 w-8 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Section */}
                <div className="flex items-center justify-center mb-24">
                    <div className="flex items-center gap-4">
                        <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent to-brand-main opacity-60" />
                        <div className="p-3 bg-gradient-to-br from-brand-main/20 to-brand-accent/20 rounded-full">
                            <span className="text-2xl">✨</span>
                        </div>
                        <div className="w-16 md:w-24 h-0.5 bg-gradient-to-l from-transparent to-brand-accent opacity-60" />
                    </div>
                </div>

                {/* Misi Section with Zigzag Layout */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-accent/20 to-brand-main/20 rounded-full mb-6">
                            <span className="text-2xl">🚀</span>
                            <span className="text-lg font-semibold bg-gradient-to-r from-brand-accent to-brand-main bg-clip-text text-transparent">
                                Misi Kami
                            </span>
                        </div>
                    </div>

                    {/* Zigzag/Staircase Layout */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="space-y-8 md:space-y-12">
                            {misi.map((misiItem, idx) => (
                                <div key={idx} className="relative">
                                    {/* Zigzag positioning */}
                                    <div className={`flex ${idx % 2 === 0 ? 'justify-start md:justify-start' : 'justify-end md:justify-end'}`}>
                                        <div className={`w-full max-w-md md:max-w-lg transform transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${
                                            idx % 2 === 0 ? 'md:ml-0' : 'md:mr-0'
                                        }`}>
                                            {/* Card with enhanced styling */}
                                            <div className="group relative">
                                                <div className={`relative p-6 md:p-8 bg-gradient-to-br from-brand-base/70 to-brand-base/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/40 hover:shadow-3xl transition-all duration-700 transform ${
                                                    idx % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                                } hover:rotate-0`}>
                                                    {/* Card glow effect */}
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-main via-brand-accent to-brand-main rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-lg" />
                                                    
                                                    <div className="relative">
                                                        {/* Mission Number Badge */}
                                                        <div className={`flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-brand-main to-brand-accent rounded-2xl text-white font-bold text-2xl transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-xl ${
                                                            idx % 2 === 0 ? 'ml-0' : 'ml-auto'
                                                        }`}>
                                                            {idx + 1}
                                                        </div>
                                                        
                                                        {/* Mission Title */}
                                                        <div className={`mb-4 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                                            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-brand-main to-brand-accent bg-clip-text text-transparent mb-2">
                                                                Misi {idx + 1}
                                                            </h3>
                                                        </div>
                                                        
                                                        {/* Mission Text */}
                                                        <p className={`text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-200 font-medium ${
                                                            idx % 2 === 0 ? 'text-left' : 'text-right'
                                                        }`}>
                                                            {misiItem}
                                                        </p>
                                                        
                                                        {/* Bottom decorative elements */}
                                                        <div className={`flex gap-1 mt-6 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                                            <div className="h-1 w-8 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-60" />
                                                            <div className="h-1 w-12 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-80" />
                                                            <div className="h-1 w-8 bg-gradient-to-r from-brand-main to-brand-accent rounded-full opacity-60" />
                                                        </div>

                                                        {/* Card number indicator */}
                                                        <div className={`absolute top-4 text-xs font-bold text-brand-main/40 ${
                                                            idx % 2 === 0 ? 'right-4' : 'left-4'
                                                        }`}>
                                                            0{idx + 1}
                                                        </div>
                                                    </div>

                                                    {/* Hover reveal icon */}
                                                    <div className={`absolute -top-4 w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-main rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-lg ${
                                                        idx % 2 === 0 ? '-right-4' : '-left-4'
                                                    }`}>
                                                        <span className="text-white text-sm">✨</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Lines for Zigzag Effect */}
                                    {idx < misi.length - 1 && (
                                        <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 z-10">
                                            <div className="relative">
                                                {/* Vertical line */}
                                                <div className="w-0.5 h-16 bg-gradient-to-b from-brand-main/40 to-brand-accent/40 mx-auto" />
                                                
                                                {/* Horizontal connector */}
                                                <div className={`absolute top-8 w-32 h-0.5 bg-gradient-to-r from-brand-accent/30 to-brand-main/30 ${
                                                    idx % 2 === 0 ? 'left-0' : 'right-0'
                                                }`} />
                                                
                                                {/* Connection dot */}
                                                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-brand-main to-brand-accent rounded-full border-2 border-white dark:border-gray-900">
                                                    <div className="absolute inset-0 bg-brand-main rounded-full animate-ping opacity-30" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step number indicator (large background) */}
                                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 text-8xl font-black opacity-5 pointer-events-none z-0 ${
                                        idx % 2 === 0 ? '-right-16' : '-left-16'
                                    }`}>
                                        {idx + 1}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute top-20 left-10 w-32 h-32 bg-brand-main/5 rounded-full blur-3xl" />
                            <div className="absolute top-60 right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-20 left-20 w-36 h-36 bg-brand-main/5 rounded-full blur-3xl" />
                        </div>
                    </div>

                    {/* Mission Summary */}
                    <div className="text-center mt-16">
                        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-brand-main/10 to-brand-accent/10 rounded-2xl border border-brand-main/20">
                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Lima langkah strategis yang membentuk fondasi kuat dalam mencapai visi kami untuk Indonesia yang bebas dari kelaparan di kalangan siswa.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Background decorative elements */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-main/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    
                    <div className="group relative p-8 md:p-12 bg-gradient-to-br from-brand-accent/20 to-brand-main/20 backdrop-blur-lg rounded-3xl border border-brand-main/30 transition-all duration-700 hover:shadow-2xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-main to-brand-accent rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-lg" />
                        
                        <div className="relative text-center">
                            {/* Icon with Animation */}
                            <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-6 mx-auto bg-gradient-to-br from-brand-main/30 to-brand-accent/30 rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                                <span className="text-3xl md:text-4xl">🤝</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-main to-brand-accent bg-clip-text text-transparent">
                                Bersama Kita Wujudkan
                            </h3>
                            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                                Indonesia yang bebas dari kelaparan di kalangan siswa, demi masa depan yang lebih cerah bagi generasi penerus bangsa. Mari bergabung dalam misi mulia ini!
                            </p>
                            
                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="group/btn px-8 py-3 bg-gradient-to-r from-brand-main to-brand-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <span className="flex items-center gap-2">
                                        <span>Bergabung Sekarang</span>
                                        <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                </button>
                                
                                <button className="px-8 py-3 border-2 border-brand-main/50 text-brand-main font-semibold rounded-xl hover:bg-brand-main/10 transition-all duration-300 transform hover:scale-105">
                                    Pelajari Lebih Lanjut
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Section */}
                <div className="mt-20 text-center">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        {[...Array(5)].map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r from-brand-main to-brand-accent opacity-60 animate-pulse`}
                                style={{ animationDelay: `${idx * 200}ms` }}
                            />
                        ))}
                    </div>
                    
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        "Setiap anak berhak mendapatkan makanan bergizi untuk masa depan yang lebih baik"
                    </p>
                </div>
            </section>
        </main>
    )
}