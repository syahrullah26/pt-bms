import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-ghost-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-25 h-25 bg-white rounded-lg flex items-center justify-center">
                <img src="/bms-icon.png" alt="logo bms" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                PT.BARRA{" "}
                <span className="text-cloud-white/70 font-medium">
                  MAJU SEJAHTERA
                </span>
              </span>
            </div>
            <p className="text-cloud-white/80 leading-relaxed text-sm">
              Increase efficiency and drive performance for clients.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-cloud-white w-5"
                />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-cloud-white w-5"
                />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-cloud-white w-5"
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Actions
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-cloud-white/80 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-accent transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-cloud-white/80">
                <MapPin className="text-accent shrink-0" size={18} />
                <span>
                  Jl.Anggrek Merpati No.22 Blok AI43, Margasari, Tigaraksa,
                  Tangerang Regency, Banten 15720
                </span>
              </li>
              <li className="flex items-center gap-3 text-cloud-white/80">
                <Phone className="text-accent shrink-0" size={18} />
                <a
                  href="https://wa.link/bpdxaz"
                  className="hover:text-accent transition-colors hover:underline hover:underline-offset-4 hover:decoration-accent hover:scale-105  duration-300"
                >
                  <span>+62 815-1666-575</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-cloud-white/80">
                <Mail className="text-accent shrink-0" size={18} />
                <a
                  href="mailto:ptbarrams@gmail.com"
                  className="hover:text-accent transition-colors hover:underline hover:underline-offset-4 hover:decoration-accent hover:scale-105  duration-300"
                >
                  <span>ptbarrams@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cloud-white/60">
          <p>© {currentYear} PT Barra Maju Sejahtera.</p>
          <div className="flex gap-6">
            {/* <Link href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
