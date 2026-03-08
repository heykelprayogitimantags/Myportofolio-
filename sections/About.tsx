import React from 'react';

const About = () => {
  // Data timeline untuk memudahkan maintenance
  const timelineData = [
    {
      year: "2026 - SEKARANG",
      title: "IT Support Intern",
      sub: "PT Bank Negara Indonesia (Persero) Tbk - KCP KIM Mabar 2"
    },
    {
      year: "2023 - SEKARANG",
      title: "Mahasiswa Teknik Komputer",
      sub: "Politeknik Negeri Medan (Polmed)"
    },
    {
      year: "2025",
      title: "Fullstack Developer (Project Based)",
      sub: "Developing Simperas & Nangin Beauty E-commerce"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="about-grid">
          
          {/* Sisi Kiri: Visual/Image */}
          <div className="about-img-wrap">
            <div className="about-img-box">
              {/* Inisial Nama Kamu (H) sebagai placeholder estetik */}
              <span className="about-avatar-large">H</span>
              
              {/* Kamu bisa ganti <span> di atas dengan <img> jika ada foto */}
              {/* <img src="/path-to-your-photo.jpg" alt="Heykel" className="object-cover w-full h-full" /> */}
            </div>
            
            {/* Badge Card (Modern Touch) */}
            <div className="about-badge-card">
              <div className="num">1+</div>
              <div className="lbl">TAHUN<br/>PENGALAMAN</div>
            </div>
          </div>

          {/* Sisi Kanan: Teks & Timeline */}
          <div className="about-text">
            <h2 className="text-4xl font-bold mb-6 italic">Tentang Saya</h2>
            <p>
              Halo! Saya <strong>Heykel Prayogi Timanta</strong>, seorang mahasiswa Teknik Komputer 
              di Politeknik Negeri Medan yang berfokus pada pengembangan solusi digital modern. 
              Saat ini, saya aktif mendalami ekosistem <strong>Web & Mobile Development</strong>.
            </p>
            <p>
              Pengalaman magang saya di dunia perbankan mengasah ketelitian saya dalam maintenance 
              hardware dan efisiensi sistem operasional. Saya senang menggabungkan fungsionalitas 
              dengan estetika desain yang bersih.
            </p>

            {/* Timeline Section */}
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div className="tl-item" key={index}>
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-year">{item.year}</div>
                    <h3 className="tl-title">{item.title}</h3>
                    <p className="tl-sub">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;