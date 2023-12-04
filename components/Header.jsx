// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // import styles from "../styles/header.module.css";


// const Navbar = () => {
//   const router = useRouter();
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-light ${
//         isScrolled ? "bg-dark fixed-top" : "bg-transparent"
//       }`}
//     >
//       <div className="container">
//         <Link legacyBehavior href="/">
//           <a className="navbar-brand">
//             <Image src="/asset/logo.png" alt="Logo" width={85} height={50} />
//           </a>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//           <li className={`nav-item ${router.pathname === "/" && "active"}`}>
//               <Link legacyBehavior href="/">
//                 <a className="nav-link text-white">Beranda</a>
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${router.pathname === "/about" && "active"}`}
//             >
//               <Link legacyBehavior href="/tentangKami">
//                 <a className="nav-link text-white">About</a>
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${
//                 router.pathname === "/services" && "active"
//               }`}
//             >
//               <Link legacyBehavior href="/berita">
//                 <a className="nav-link text-white">Artikel</a>
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${
//                 router.pathname === "/contact" && "active"
//               }`}
//             >
//               <Link legacyBehavior href="/kontak">
//                 <a className="nav-link text-white">Contact</a>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="d-none d-lg-block">
//           <div className="btn btn-outline-light rounded-pill">
//             <span className="text-base font-weight-bold">PPDB</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { useRouter } from "next/router";

// function AppNavbar() {
//   const [scrolling, setScrolling] = useState(false);
//   const router = useRouter();

//   const handleScroll = () => {
//     if (window.scrollY > 20) {
//       setScrolling(true);
//     } else {
//       setScrolling(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Navbar
//       className={`py-3 ${scrolling ? "bg-light" : "bg-transparent"}`}
//       expand="lg"
//       fixed="top"
//     >
//       <Container>
//         <Navbar.Brand href="#">
//           <img
//             src="asset/logo.png"
//             height="40"
//             className="d-inline-block align-top"
//             alt="logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarNav" />
//         <Navbar.Collapse id="navbarNav">
//           <Nav className="mx-auto  text-center">
//             <Nav.Link
//               className={`mx-2 text-dark ${
//                 router.pathname === "/" ? "fw-bold" : "fw-normal"
//               }`}
//               href="/"
//             >
//               Beranda
//             </Nav.Link>
//             <Nav.Link
//               className={`mx-2 text-dark ${
//                 router.pathname === "/about" ? "fw-bold" : "fw-normal"
//               }`}
//               href="/about"
//             >
//               Tentang
//             </Nav.Link>
//             <Nav.Link
//               className={`mx-2 text-dark ${
//                 router.pathname === "/gallery" ? "fw-bold" : "fw-normal"
//               }`}
//               href="/galeri"
//             >
//               Galeri
//             </Nav.Link>
//             <Nav.Link
//               className={`mx-2 text-dark ${
//                 router.pathname === "/article" ? "fw-bold" : "fw-normal"
//               }`}
//               href="/article"
//             >
//               Artikel
//             </Nav.Link>
//             <Nav.Link
//               className={`mx-2 text-dark ${
//                 router.pathname === "/kontak" ? "fw-bold" : "fw-normal"
//               }`}
//               href="/kontak"
//             >
//               Kontak
//             </Nav.Link>
//           </Nav>
//           <Nav>
//           <div className="d-none d-lg-block">
//            <div className="btn btn-outline-light rounded-pill">
//            <span className="text-base font-weight-bold">PPDB</span>
//         </div>
//      </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';


function AppNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`py-3 ${scrolling ? "bg-dark" : "bg-transparent"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src="asset/logo.png"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto text-center">
            <Nav.Link
              className={`mx-2 text-white ${
                router.pathname === "/" ? "fw-bold" : "fw-normal"
              }`}
              href="/"
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-white ${
                router.pathname === "/tentangKami" ? "fw-bold" : "fw-normal"
              }`}
              href="/tentangKami"
            >
              Tentang
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-white ${
                router.pathname === "/galeri" ? "fw-bold" : "fw-normal"
              }`}
              href="/galeri"
            >
              Galeri
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-white ${
                router.pathname === "/berita" ? "fw-bold" : "fw-normal"
              }`}
              href="/berita
              "
            >
              Artikel
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-white ${
                router.pathname === "/kontak" ? "fw-bold" : "fw-normal"
              }`}
              href="/kontak"
            >
              Kontak
            </Nav.Link>


          </Nav>
          <Nav className="ml-auto">
            <div className="d-none d-lg-block">
              <div className="btn btn-outline-light rounded-pill">
                <span className="text-base font-weight-bold">PPDB</span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
