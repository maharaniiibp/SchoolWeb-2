import React from "react";
import styles from "../styles/berita.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import News from "@/components/news";
import Footer from "@/components/footer";

const berita = () => {
  return (
    <div className="bg-white">
      <div
        className={styles.customBg}
        style={{ backgroundImage: "url('asset/bgberita.svg')" }}
      >
        {/* section 1 */}
        <section className="section1 px-5">
          <header className="w-200  d-flex align-items-center">
            <Container className="mt-4 mt-md-0">
              <Row className="header-box d-flex align-items-center text-center text-md-start">
                <Col md="5" className="text">
                  <div className="text-white">
                    <h1 className={`${styles.h1}`}>Artikel</h1>
                    <p className={`${styles.pp}`}>
                      Artikel menarik seputar pendidikan yang bisa anda <br />{" "}
                      baca secara gratis
                    </p>
                  </div>
                </Col>
                <Col
                  md="6"
                  className="pt-lg-0 pt-5 d-flex justify-content-center"
                >
                  <img
                    src="/asset/heroberita.svg"
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
      </div>

      {/* section 2 */}
      <div
        style={{
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingRight: "2.3rem",
          paddingLeft: "2.3rem",
        }}
      >
        <div class="p-1    row">
          <img
            class="rounded-4 col-xl-6 col-lg-6 py-3 px-md-3"
            src="asset/imageberita.png"
          />
          <div class="col-xl-6 col-lg-6 row justify-content-end">
            <div class="big-card col-12 row d-flex">
              <p class={`${styles.date} text-white`}>12 Desember 2021</p>

              <p
                class={`${styles.gotongroyong}   col-md-12 m-0 px-md-3 py-md-2`}
              >
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
              </p>
              <p class="card-text text-start text-dark justify-center fw-normal col-12 col-md-12 m-0 px-md-3 py-md-2">
                Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                kembali belajar di sekolah. Saya ingin bertemu dengan
                teman-teman sekelas saya. begitupun sebagian besar orang tua,
                mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah
                secara langsung. Orang tua selama ini banyak yang mengaku lelah
                karena anak-anaknya selama pandemi lebih banyak menghabiskan
                waktu di . . .{" "}
              </p>
              <p class="card-text text-start text-dark  fw-normal col-md-12 m-0 px-md-3 py-md-2">
                Penulis : Shinta A.P
              </p>
              <Link
                href="/artikel"
                className="fw-semibold col-12 m-0 px-3 py-2 mb-md-3"
                style={{ color: "#4FACF6", textDecoration: "none" }} // Corrected textDecoration value
              >
                Baca selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingBottom: "6rem",
        }}
      >
        <News />
      </div>
      <div class="pb-lg-5"></div>
      <Footer />
    </div>
  );
};

export default berita;
