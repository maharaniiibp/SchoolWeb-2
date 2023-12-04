import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/index.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Keunggulan from "@/components/keunggulan";
// import Link from 'next/link';
import Dokumentasi from "@/components/dokumentasi";
import ArtikelBaru from "@/components/Artikelbaru";

const index = () => {
  return (
    <div className="bg-white ">
      <img
        className="d-none d-lg-block position-absolute top-1100 end-0"
        src="asset/side1.png"
        alt="Side 1"
      />
      <img
        className="d-none d-lg-block position-absolute top-1680 start-0"
        src="asset/side2.png"
        alt="Side 2"
      />
      <img
        className="d-none d-lg-block position-absolute top-3100 end-0"
        src="asset/side3.png"
        alt="Side 3"
      />
      <div
        className={styles.customBg}
        style={{ backgroundImage: "url('asset/bg.svg')" }}
      >
        {/* section 1 */}
        <section className="section1 px-5">
          <header className="w-200  d-flex align-items-center">
            <Container className="mt-4 mt-md-0">
              <Row className="header-box d-flex align-items-center text-center text-md-start">
                <Col md="5" className="text">
                  <div className="text-white">
                    <h1 className={`${styles.h1}`}>
                      Tuntut Ilmu Untuk Masa <br /> Depan Yang Lebih Baik
                    </h1>
                    <p className={`${styles.pp}`}>
                      jelajahi semua pengetahuan dan ilmu yang berguna <br />{" "}
                      bersama kami, untuk kehidupan yang lebih bermanfaat
                    </p>
                    <button className={`${styles.button} text-white`}>
                      Mulai Belajar
                    </button>
                  </div>
                </Col>
                <Col
                  md="6"
                  className="pt-lg-0 pt-5 d-flex justify-content-center"
                >
                  <img
                    src="/asset/hero.svg"
                    alt="ilustrasi"
                    className="img-fluid mx-auto"
                    style={{
                      maxWidth: "120%",
                      height: "auto",
                      marginBottom: "50px",
                      marginTop: "70px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
      </div>

      {/* section 2 */}
      <div className={`${styles.customContainer} px-5`}>
        <h2 className={`${styles.textPurple} ${styles.textLg} ${styles.twoxl}`}>
          Kenapa Memilih Kami
        </h2>
        <h1 className={`${styles.textBlue} ${styles.text5xl} ${styles.twoxl} `}>
          Keunggulan Sekolah Kami
        </h1>
      </div>
      <Keunggulan />

      {/* section 3 */}
      <div class="py-5 lg:my-14 pb-1 lg:pb-14">
        <div class="container px-7 lg:px-32 py-16 mx-auto">
          <div class="row align-items-center">
            <div class="col-md-6 lg:w-1/3">
              <img
                class={`${styles.imgfluid}`}
                src="asset/tentangKami.png"
                alt=""
              />
            </div>

            <div class="col-md-6 mt-4 lg:mt-0">
              <h1 class={`${styles.textblue950} `}>Tentang Kami</h1>

              <p class={`${styles.tentangkami} `}>
                Sekolah Kami merupakan sekolah informal yang dikelola untuk
                membantu anak mengembangkan bakat dan kemampuannya. Dengan
                memberikan kurikulum terbaik agar anak bisa memilih minatnya dan
                fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak
                tahun 1989 dan terus berkembang hingga saat ini.
              </p>

              <div class="mt-4 lg:mt-6">
                <button className={`${styles.button} text-white`}>
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class={`${styles.bglight} col-12 pt-5 pb-16 `}>
            <div class="mt-3 lg:mt-16 mb-5 lg:ml-4 ml-2">
              <h2 class="text-purple-500 text-base lg:text-2xl font-medium">
                Galeri
              </h2>
              <div class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF-Pro-Rounded lg:mt-4 d-flex justify-content-between align-items-center">
                <h1 class="mr-2">Dokumentasi Sekolah</h1>
                <div class="d-flex align-items-center pr-4">
                  <a href="/galeri" class="btn btn-primary">
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
            <div class="px-4 mt-5">
              <Dokumentasi />
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div
        className={`py-5 mt-9 lg:mt-28 text-center ${styles.articleSection}`}
      >
        <h2 className="text-primary fs-4 mb-3">Artikel seputar pendidikan</h2>
        <h1 className="mb-3 fs-2 fs-lg-5 fw-bold text-dark">Artikel Terbaru</h1>
      </div>
      <div class="px-14 lg:px-20">
        <ArtikelBaru />
      </div>
    </div>
  );
};

export default index;
