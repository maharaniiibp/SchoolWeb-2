import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import styles from "../styles/header.module.css";


const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isScrolled ? "bg-dark fixed-top" : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link legacyBehavior href="/">
          <a className="navbar-brand">
            <Image src="/asset/logo.png" alt="Logo" width={85} height={50} />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className={`nav-item ${router.pathname === "/" && "active"}`}>
              <Link legacyBehavior href="/">
                <a className="nav-link text-white">Beranda</a>
              </Link>
            </li>
            <li
              className={`nav-item ${router.pathname === "/about" && "active"}`}
            >
              <Link legacyBehavior href="/tentangKami">
                <a className="nav-link text-white">About</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/services" && "active"
              }`}
            >
              <Link legacyBehavior href="/berita">
                <a className="nav-link text-white">Artikel</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/contact" && "active"
              }`}
            >
              <Link legacyBehavior href="/kontak">
                <a className="nav-link text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <div className="btn btn-outline-light rounded-pill">
            <span className="text-base font-weight-bold">PPDB</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
