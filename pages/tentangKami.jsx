import React, { useState } from "react";
import styles from "../styles/tentang.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Keunggulan from "@/components/keunggulan";
import Anggota from "@/components/anggota";
import Footer from "@/components/footer";

function tentangKami() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white">
      <div
        className={`${styles.customBg}`}
        style={{ backgroundImage: "url('asset/bgtentang.svg')" }}
      >
        {/* section 1 */}
        <section className="section1 px-5">
          <header className="w-200  d-flex align-items-center">
            <Container className="mt-4 mt-md-0">
              <Row className="header-box d-flex align-items-center text-center text-md-start">
                <Col md="5" className="text">
                  <div className="text-white">
                    <h1 className={`${styles.h1}`}>Tentang Kami</h1>
                    <p className={`${styles.pp}`}>informasi tentang kami</p>
                  </div>
                </Col>
                <Col
                  md="6"
                  className="pt-lg-0 pt-5 d-flex justify-content-center"
                >
                  <img
                    src="/asset/herotentang.svg"
                    alt="ilustrasi"
                    className={`img-fluid mx-auto`}
                    style={{
                      maxWidth: "120%",
                      height: "auto",
                      // marginBottom: "10px",
                      marginTop: "250px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
      </div>

      {/* section 2 */}
      <div class={`${styles.customContainer}`}>
        <h2 class={`${styles.textblue}  lg:text-2xl font-medium`}>
          {" "}
          Profil Singkat
        </h2>
        <h1
          class={`${styles.text950} text-2xl lg:text-5xl font-bold font-SF-Pro-Rounded mt-4 mb-4 lg:pr-5 lg-md-0`}
        >
          Sekolah Alam <br class="d-none d-lg-inline" /> Insan Mulia Berkarya
        </h1>
        <p class={`${styles.textmuted} lg:text-xl pr-lg-5`}>
          Sekolah kami merupakan sekolah informal yang dikelola untuk membantu
          anak mengembangkan bakat dan kemampuannya. Kami memberikan kurikulum
          terbaik agar anak dapat memilih minatnya dan fokus mengembangkan minat
          tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang
          hingga saat ini. Berlokasi di Jl. SoekarnoHatta Blok J No. 245,
          Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya, lebih dari 250.000
          siswa telah lulus dari sekolah kami. Dengan menjunjung tinggi
          kejujuran, kedisiplinan, dan semangat belajar yang tinggi, kami
          berharap dapat terus menghasilkan siswa lulusan terbaik dari sekolah
          ini.
        </p>
      </div>

      {/*section 3*/}
      <div class="pt-5 py-4 py-lg-6 mt-4 mt-lg-28 text-center ">
        <h2 class={`${styles.tekskenapa}`}>Kenapa Memilih Kami</h2>
        <h1 class={`${styles.tekskeunggulan}`}>Keunggulan Sekolah Kami</h1>
      </div>
      <div class="mb-28">
        <Keunggulan />
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
          </div>
          <div className="px-4 g-px-6 mt-5 lg:mt-0">
            <Anggota />
          </div>
        </div>
      </div>

      {/* section 5 */}
      
      <div style={{ paddingTop: "4rem" }}>
        <div
          className="wrap mt-5"
          style={{ maxWidth: "80%", margin: "0 auto" }}
        >
          <h1
            className="title text-center fs-1 fw-bold"
            style={{ color: "#1C2661" }}
          >
            Video Profil
          </h1>
          <p className="sub-title text-center fw-normal">
            Berikut adalah video profil dari sekolah kami
          </p>
          <div class="ratio ratio-16x9  hover-opacity">
            <img
              src="asset/video.png"
              onClick={openModal}
              style={{ cursor: "pointer" }}
            ></img>
            {isModalOpen && (
              <div className="">
                <iframe
                  className="rounded-4 ratio ratio-16x9"
                  src="https://www.youtube.com/embed/4FAHpACJ6WM?si=KTlT7OzEQoA-D1j"
                  title="Diesnatalis SMK Telkom Malang"
                  allowfullscreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
                <button
                  className="btn-close text-black text-5xl position-absolute top-2 end-2 m-1 -pb-5"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>

<Footer/>

    </div>
  );
};

export default tentangKami;
