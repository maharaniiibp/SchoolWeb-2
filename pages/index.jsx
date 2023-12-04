import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/index.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Keunggulan from "@/components/keunggulan";
import Dokumentasi from "@/components/dokumentasi";
import ArtikelBaru from "@/components/Artikelbaru";

const index = () => {
  return (
    <div className="bg-white ">
      <div className="d-none d-md-block">
        <img className={`${styles.side1}`} src="asset/side1.png"></img>
        <img className={`${styles.side2}`} src="asset/side2.png"></img>
        <img className={`${styles.side3}`} src="asset/side3.png"></img>
      </div>

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
                      // marginBottom: "50px",
                      marginTop: "100px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
        <div class="pb-lg-5"></div>
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
      <div class="pb-lg-5"></div>

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
        <div class="pb-lg-5"></div>
      </div>

      {/* section 4 */}
      <div className={`${styles.section4} lg:pb-0`}>
        <div className="container">
          <div className={`${styles.mt3} lg:mt-5  lg:ml-4`}>
            <h2 className={`${styles.textcolor}`}>
              Perkenalkan Anggota Sekolah
            </h2>
            <div className="text-blue-950 text-2xl-lg lg:text-5xl  lg:mt-4 d-flex justify-content-between align-items-center">
              <h1 className={`${styles.textguru} mr-2`}>
                Guru & Staff Sekolah
              </h1>
              <div class="d-flex align-items-center pr-4">
                <a href="/galeri" class="text-white btn btn-warning">
                  Lihat Semua
                </a>
              </div>
            </div>

            <div className="px-4 g-px-6 mt-5 lg:mt-0">
              <Dokumentasi />
            </div>
          </div>
        </div>
        <div class="pb-lg-5"></div>
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
      <div class="pb-lg-5"></div>
    </div>
  );
};

export default index;
