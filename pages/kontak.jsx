import React from "react";
import styles from "../styles/kontak.module.css";
import { Container, Row, Col } from "react-bootstrap";

const kontak = () => {
  return (
    <div className="bg-white">
      <div
        className={`${styles.customBg}`}
        style={{ backgroundImage: "url('asset/bgkontak.svg')" }}
      >
        {/* section 1 */}
        <section className="section1 px-5">
          <header className="w-200  d-flex align-items-center">
            <Container className="mt-4 mt-md-0">
              <Row className="header-box d-flex align-items-center text-center text-md-start">
                <Col md="5" className="text">
                  <div className="text-white">
                    <h1 className={`${styles.h1}`}>Kontak Kami</h1>
                    <p className={`${styles.pp}`}>
                      Kontak sekolah kami agar anda bisa terhubung <br />
                      dengan kami
                    </p>
                  </div>
                </Col>
                <Col
                  md="5"
                  className="pt-lg-0 pt-5 d-flex justify-content-center"
                >
                  <img
                    src="/asset/herokontak.svg"
                    alt="ilustrasi"
                    className={`img-fluid mx-auto`}
                    style={{
                      maxWidth: "120%",
                      height: "auto",
                      // marginBottom: "10px",
                      marginTop: "180px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </section>
      </div>

      {/* section 2 */}
      <div class={`${styles.section2} ${styles.mtlg28} text-center `}>
        <h2 class={`${styles.informasi} text-center fs-lg-5 mb-3`}>
          Dapatkan informasi lengkap
        </h2>
        <h1 class={`${styles.kontak} mb-3  fs-lg-1`}>Kontak Kami</h1>
      </div>

      {/* section 3 */}
      <section className="py-3">
        <div className="container-xl">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex gap-3 align-items-center">
                  <div className="ph px-1 py-3  d-flex justify-content-center align-items-center">
                    <img src="asset/phone.png" alt="Phone" className="w-25" />
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{ color: "#3A3B41" }}
                  >
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                      (+62) 812 698 15172
                    </p>
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-0">
                      (0341) 545 987
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="em px-1 py-3 d-flex justify-content-center align-items-center">
                    <img src="asset/email.png" alt="Email" className="w-25" />
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{ color: "#3A3B41" }}
                  >
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                      contact@sekolahanak.Com
                    </p>
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-0">
                      info@sekolah.anak.com
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="loc px-1 py-3   d-flex justify-content-center align-items-center">
                    <img src="asset/map.png" alt="Location" className="w-25" />
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{ color: "#3A3B41" }}
                  >
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                      Jl. Soekarno Hatta J-12
                    </p>
                    <p className="fs-lg-5 fs-md-5 fw-bold mb-0">Malang</p>
                  </div>
                </div>
              </div>
            </div>

            {/* input form */}
            <div className="col-md-6 pt-5 pt-md-0 pt-lg-0">
              <form className="d-flex flex-column gap-4">
                <label className="form-label">
                  <input
                    type="text"
                    placeholder="Nama Anda*"
                    className="form-control border-2"
                    style={{ borderColor: "#3A3B41B2" }}
                  />
                </label>
                <label className="form-label">
                  <input
                    type="text"
                    placeholder="Email Anda*"
                    className="form-control border-2"
                    style={{ borderColor: "#3A3B41B2" }}
                  />
                </label>
                <label className="form-label">
                  <input
                    type="text"
                    placeholder="Nomor Telepon*"
                    className="form-control border-2"
                    style={{ borderColor: "#3A3B41B2" }}
                  />
                </label>
                <label className="form-label">
                  <textarea
                    rows="3"
                    placeholder="Pesan Anda*"
                    className="form-control border-2"
                    style={{ borderColor: "#3A3B41B2" }}
                  ></textarea>
                </label>
                <button
                  type="button"
                  className="b-8 btn text-white rounded-5"
                  style={{ backgroundColor: "#AE39FF" }}
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default kontak;
