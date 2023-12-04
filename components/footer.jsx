import React from "react";
import Link from "next/link";
// import Image from "next/image";

function Footer() {
  return (
    <footer class="pt-lg-10 pt-5 footer" >
      <div class="container">
        <div class="row text-black">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-4">
              <img src="asset/logofooter.svg" alt="" class="logo-footer " />
              <div class="mt-4 fs-6 fw-normal" style={{ color: "#2E334E" }}>
                <p>
                  Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </p>
              </div>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-2 col-md-2 col-3">
            <div class="mb-5">
              <h3
                class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3"
                style={{ color: "#1C2661" }}
              >
                Informasi
              </h3>
              <p>
                <Link href="#" class="nav-link" style={{ color: "#404040" }}>
                  Artikel
                </Link>
              </p>
              <p>
                <Link href="#" class="nav-link" style={{ color: "#404040" }}>
                  Galeri
                </Link>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-3">
            <div class="mb-5">
              <h3
                class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3"
                style={{ color: "#1C2661" }}
              >
                Tentang
              </h3>
              <p>
                <Link href="#" class="nav-link" style={{ color: "#404040" }}>
                  Tentang Kami{" "}
                </Link>
              </p>
              <p>
                <Link href="#" class="nav-link" style={{ color: "#404040" }}>
                  Hubungi Kami
                </Link>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-2 col-4">
            <div class="mb-4">
              <h3
                class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3"
                style={{ color: "#1C2661" }}
              >
                Ikuti Kami
              </h3>
              <p
                class="d-flex flex-row align-items-center"
                style={{ color: "#404040" }}
              >
                {" "}
                <img src="asset/facebook.svg" alt="Small Image" class="me-2" />
                namasekolah
              </p>
              <p
                class="d-flex flex-row align-items-center"
                style={{ color: "#404040" }}
              >
                {" "}
                <img src="asset/twitter.svg" alt="Small Image" class="me-2" />
                namasekolah
              </p>
              <p
                class="d-flex flex-row align-items-center"
                style={{ color: "#404040" }}
              >
                {" "}
                <img src="asset/instagram.svg" alt="Small Image" class="me-2" />
                namasekolah
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center g-0 border-top py-2 mt-6">
          <div
            class="fs-6 fw-normal p-3 text-center"
            style={{ color: "#404040" }}
          >
            <span>Copyright © 2021. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;