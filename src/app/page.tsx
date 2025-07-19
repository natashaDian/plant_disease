// src/app/page.tsx
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg-home.png"
          alt="Background Image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-emerald-900/70"></div>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LeafIcon className="h-8 w-8 text-green-600" />
            <span className="text-xl font-semibold text-green-800">LeafGuard</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-green-800 hover:text-green-600 hover:transition-all duration-200">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600 hover:transition-all duration-200">Tutorial</a>
            <a href="#" className="text-gray-600 hover:text-green-600 hover:transition-all duration-200">Profile</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Deteksi Penyakit <br />
              <span className="text-white">Tanaman Lewat Foto!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Upload gambar daun tanamanmu dan biarkan sistem kami menganalisinya
              secara otomatis menggunakan teknologi kecerdasan buatan. Dapatkan hasil
              deteksi penyakit disertai tingkat keyakinan dan saran penanganan yang
              praktis—hanya dalam hitungan detik.
            </p>
            
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md">
              Coba Sekarang
            </button>
          </div>

          <div className="relative">
            <div>
              <div className="bg-gradient-to-b from-[#437057]/90 to-[#97B067]/50 rounded-xl  aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <UploadIcon className="mx-auto h-12 w-12 text-green-400 mb-4" />
                  <p className="text-gray-500">Upload foto daun tanaman Anda</p>
                  <p className="text-sm text-gray-400 mt-2">Format: JPG, PNG (max 10MB)</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
              AI Siap Menganalisis
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <SpeedIcon className="h-8 w-8 text-green-600" />,
              title: "Cepat",
              desc: "Hasil dalam 5 detik"
            },
            {
              icon: <AccuracyIcon className="h-8 w-8 text-green-600" />,
              title: "Akurat",
              desc: "Tingkat akurasi hingga 95%"
            },
            {
              icon: <SolutionIcon className="h-8 w-8 text-green-600" />,
              title: "Solusi Praktis",
              desc: "Rekomendasi penanganan"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Custom Icons
function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115l-.78 2.77h6.782l-.78-2.77C19.478 14.95 21 12.687 21 10.115 21 6.185 16.97 3 12 3zm0 2c3.87 0 7 2.14 7 5.115 0 1.647-.98 3.13-2.5 4.027v.5l.465.693.535-.347C18.52 14.18 19 12.68 19 11.115 19 7.14 15.87 5 12 5z"/>
    </svg>
  );
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5M12 4v12m-4-4l4 4 4-4"/>
    </svg>
  );
}

function SpeedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 12l3-3m-6 6l4 4m5-11a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}

function AccuracyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}

function SolutionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  );
}