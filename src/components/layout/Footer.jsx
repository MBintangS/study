import { FaFacebook, FaInstagram } from "react-icons/fa6";
import logo from "/logo.webp";
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineSpotify, AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full bottom-0">
      <div className="bg-dark_blue py-14 flex items-center px-5">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <div className="text-white w-full grid grid-cols-1 sm:grid-cols-2  gap-8">
            <div className="gap-4 flex items-center cursor-default">
              <div className="max-w-24">
                <img src={logo} alt="Logo" width={100} height={100} />
              </div>
              <div className="text-white gap-2 flex flex-col">
                <div className="">
                  <p className="text-base font-medium">
                    Directorate General of
                    <br /> Higher Education, Research, and Technology
                  </p>
                  <p className="text-xs">
                    Ministry of Education, Culture, Research, and Technology
                  </p>
                </div>
                <div>
                  <p className="text-xs">
                    Address: Jenderal Sudirman Street, Building D, Senayan,
                    Jakarta 10270
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-base font-medium">
                    Follow us on social media!
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/ditjen.dikti/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={32} />
                  </a>
                  <a
                    href="https://www.facebook.com/ditjen.dikti/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <LuFacebook size={32} />
                  </a>
                  <a
                    href="https://x.com/ditjendikti"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <LuTwitter size={32} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ditjen.dikti"
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <RiTiktokLine size={32} />
                  </a>
                  <a
                    href="https://www.youtube.com/@DitjenDiktiSIGAPMelayani"
                    target="_blank"
                    aria-label="YouTube"
                  >
                    <AiOutlineYoutube size={32} />
                  </a>
                  <a
                    href="https://open.spotify.com/show/2rSBEAUcH7hhlxoqseuo4n?si=cf7fa056bd5b40e3"
                    target="_blank"
                    aria-label="Spotify"
                  >
                    <AiOutlineSpotify size={32} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-base font-medium">
                  Join our newsletter for latest information
                </p>
                <form action="" className="text-black flex items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-12 px-4 max-w-64 rounded-s-md focus:outline-none"
                  />
                  <button className="px-6 bg-[#00C3C3] h-12 rounded-e-md">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00070F] text-center text-xs sm:text-sm  text-white py-2">
        <p>
          Directorate General of Higher Education, Research, and Technology ©
          2024 All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
