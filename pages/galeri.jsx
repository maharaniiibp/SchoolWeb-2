import React from "react";
import styles from "../styles/galeri.module.css";
import { Container, Row, Col } from "react-bootstrap";
import DokumentasiS from "@/components/dokumentasiS";
import Footer from "@/components/footer";

const galeri = () => {
  return (
    <div className="bg-white">
      <div
        className={styles.customBg}
        style={{ backgroundImage: "url('asset/bggaleri.svg')" }}
      >
        {/* section 1 */}
        <section className="section1 px-5">
          <header className="w-200  d-flex align-items-center">
            <Container className="mt-4 mt-md-0">
              <Row className="header-box d-flex align-items-center text-center text-md-start">
                <Col md="5" className="text">
                  <div className="text-white">
                    <h1 className={`${styles.h1}`}>Galeri</h1>
                    <p className={`${styles.pp}`}>
                      Beberapa dokumentasi area sekolah dan <br /> kegiatan
                      sekolah
                    </p>
                  </div>
                </Col>
                <Col
                  md="5"
                  className="pt-lg-0 pt-5 d-flex justify-content-center"
                >
                  <img
                    src="/asset/herogaleri.svg"
                    alt="ilustrasi"
                    className="img-fluid mx-auto"
                    style={{
                      maxWidth: "120%",
                      height: "auto",
                      // marginBottom: "50px",
                      marginTop: "200px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
        <div className="lg:pb-6"></div>
      </div>

      {/* section 2 */}
      <div
        className={`py-5 mt-9 lg:mt-28 text-center ${styles.articleSection}`}
      >
        <h2 className="text-primary fs-4 mb-3">Galeri</h2>
        <h1 className="mb-3 fs-2 fs-lg-5 fw-bold text-dark">
          Dokumentasi Sekolah
        </h1>
      </div>
      <DokumentasiS />
      <div class="pb-lg-5"></div>
      <Footer />
    </div>
  );
};

export default galeri;
