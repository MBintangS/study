import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DOMPurify from "dompurify";
import { FaStar } from "react-icons/fa";
import cuisine from "../assets/cuisine.webp"
import logoBannerHome from "/hero-banner.webp"


import "../style/articleContent.css";

const dataRead = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula urna at lorem auctor, ut interdum urna sodales. Nulla facilisi. Donec pharetra nisi sit amet dui tempor, non interdum nunc luctus. Morbi suscipit, urna sit amet interdum dictum, libero erat tincidunt lorem, a vestibulum lacus nulla eget justo.</p>

  <p>Fusce efficitur magna non quam consequat, vitae laoreet nulla dictum. Sed eget nisi libero. Etiam tincidunt, risus eu viverra suscipit, purus purus fermentum lorem, nec tristique felis felis a orci. Nullam vel eros in sapien cursus hendrerit. Aliquam erat volutpat.</p>

  <h2>Topik yang Dibahas dalam Artikel Ini</h2>

  <ul>
    <li>Pengantar tentang olahraga Wushu dan perkembangannya</li>
    <li>Pencapaian Indonesia di FISU World University Games 2021</li>
    <li>Profil atlet yang berprestasi di bidang Wushu</li>
    <li>Dampak prestasi ini terhadap popularitas Wushu di Indonesia</li>
  </ul>

  <p>Curabitur vulputate, urna eget dapibus euismod, urna elit varius purus, sed vulputate purus nulla nec sapien. Vivamus scelerisque mi id leo finibus, sed varius justo fringilla. Integer ac nisl vitae justo auctor eleifend.</p>

  <h2>Langkah-Langkah Pencapaian Medali di FISU Games</h2>

  <ol>
    <li><strong>Persiapan Fisik:</strong> Atlet menjalani latihan intensif untuk meningkatkan kekuatan dan stamina.</li>
    <li><strong>Strategi dan Teknik:</strong> Setiap atlet mempelajari strategi terbaik berdasarkan analisis lawan.</li>
    <li><strong>Kompetisi Nasional:</strong> Seleksi ketat di tingkat nasional untuk memilih perwakilan terbaik.</li>
    <li><strong>Kompetisi Internasional:</strong> Atlet bertanding di ajang FISU dan menunjukkan kemampuan terbaiknya.</li>
  </ol>

  <p>Phasellus mollis, risus ut viverra scelerisque, mauris libero dictum nulla, vel tempus nisi mi a nulla. Suspendisse vel odio velit. Vestibulum vel lacus lorem. Proin condimentum, magna a volutpat consectetur, est erat congue ligula, ut fermentum dui ex at ligula.</p>

  <p>Mauris finibus tellus at orci sodales, sed sollicitudin mi laoreet. In hac habitasse platea dictumst. Cras ut felis nulla. Integer convallis dui sed justo feugiat, id dapibus nisi ultricies. Praesent cursus, nisi vel interdum elementum, lectus ex posuere orci, ac congue metus justo sit amet elit.</p>`;

const ReadArticle = () => {
  const cleanContent = DOMPurify.sanitize(dataRead);

  const navigate = useNavigate();
  const location = useLocation();

  const [path, setPath] = useState("");

  useEffect(() => {
    if (location.pathname.includes("news")) {
      setPath("/news");
    } else if (location.pathname.includes("upcoming-event")) {
      setPath("/upcoming-events");
    } else if (location.pathname.includes("campus-update")) {
      setPath("/campus-update");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-200 to-blue-50">
        <Navbar />
        <div className="min-h-screen p-4">
          <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg p-6 space-y-8">
            {/* Breadcrumb */}
            <div className="text-sm text-blue-600 font-medium">
              <div className="flex gap-2">
                <div
                  className="hover:underline cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Beranda
                </div>
                &gt;
                <div
                  className="hover:underline cursor-pointer"
                  onClick={() => navigate(path)}
                >
                  {path.replace("/", "").replace("-", " ")}
                </div>
                &gt;
                <div className="text-gray-600">article</div>
              </div>
            </div>

            {/* Article Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Main Article */}
              <div className="xl:col-span-2 space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Acquiring Temporary Medals from FISU World University Games
                  2021, Indonesian Students Win Two Medals in Wushu Sports
                </h1>
                <p className="text-gray-500">22 Desember 2023 | 13.00 WIB</p>
                <div className="max-w-[650px] h-[200px] md:h-[300px]  mx-auto bg-gray-400 rounded-lg">
                  <img
                    // src="https://via.placeholder.com/600x300"
                    src={logoBannerHome}
                    alt="Article"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div
                  className="article-content text-gray-700"
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />

                {/* Review section */}
                <div className="flex items-center text-sm text-gray-600 space-x-4 pt-2">
                  <div className="flex gap-2 items-center">
                    <FaStar size={20} className="text-yellow-600" />{" "}
                    <div>3.0/5</div>
                  </div>
                  <button className="text-blue-500 font-semibold hover:underline">
                    Ulas sekarang
                  </button>
                </div>
              </div>

              {/* side conten */}
              <div className="space-y-6">
                {/* Popular Campus Update Section */}
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    Popular Campus Update
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex gap-4">
                        <div className="h-[100px] min-w-[100px] bg-gray-400 rounded-lg">
                        <img
                          // src="https://via.placeholder.com/100"
                          src={cuisine}
                          alt="More Update"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                        <div className="w-full flex flex-col justify-between py-1">
                          <h3 className="w-full text-sm font-semibold text-gray-800 cursor-pointer hover:underline">
                            ISI Yogyakarta Raih Juara Harapan 2 untuk Kategori
                            Stan Terbaik di KMI-Expo XIV
                          </h3>
                          <p className="text-xs text-gray-500">
                            22 Desember 2023 | 13.00 WIB
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* More Campus Update Section */}
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    More Campus Update
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex gap-4">
                      <div className="h-[100px] min-w-[100px] bg-gray-400 rounded-lg">
                      <img
                        // src="https://via.placeholder.com/100"
                        src={cuisine}
                        alt="More Update"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      </div>
                      <div className="w-full flex flex-col justify-between py-1">
                        <h3 className="w-full text-sm font-semibold text-gray-800 cursor-pointer hover:underline">
                          ISI Yogyakarta Raih Juara Harapan 2 untuk Kategori
                          Stan Terbaik di KMI-Expo XIV
                        </h3>
                        <p className="text-xs text-gray-500">
                          22 Desember 2023 | 13.00 WIB
                        </p>
                      </div>
                    </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadArticle;
