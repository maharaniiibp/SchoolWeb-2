import React from "react";
import styles from "../styles/index.module.css";

function Keunggulan() {
  return (
    <section className={`${styles.customSection}  `}>
    <div className="container px-5 px-lg-5 pt-5 pb-0">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <span className={`${styles.customIcon} ${styles.bgviolet} mb-3` }> 
            <img
              src="asset/book.svg"
              className={`${styles.customImg}`}
              alt="Icon 1"
            />
          </span>

          <h2 className={`${styles.customTitle}`}>
            Menggunakan <br /> Kurikulum Terbaru
          </h2>

          <p className={`${styles.customDescription}`}>
            Sekolah kami menerapkan kurikulum <br /> terbaru saat proses belajar agar
            siswa <br /> mendapatkan materi terbaru sesuai <br />ketentuan
          </p>
        </div>

        <div className="col">
          <span className={`${styles.customIcon} ${styles.bgamber} mb-3` }> 
            <img
              src="asset/clock.svg"
              className={`${styles.customImg}`}
              alt="Icon 2"
            />
          </span>

          <h2 className={`${styles.customTitle}`}>
            Efektivitas Waktu <br /> Saat Belajar di Sekolah
          </h2>

          <p className={`${styles.customDescription}`}>
            Sekolah kami memiliki waktu belajar yang <br />dirancang agar para siswa
            tidak jenuh dan <br />dapat menerima pelajaran dengan baik
          </p>
        </div>

        <div className="col">
          <span className={`${styles.customIcon} ${styles.bgblue} mb-3` }> 
            <img
              src="asset/pen-tool.svg"
              className={`${styles.customImg}`}
              alt="Icon 3"
            />
          </span>

          <h2 className={`${styles.customTitle}`}>
            Penyaluran <br /> Bakat dan Minat
          </h2>

          <p className={`${styles.customDescription}`}>
            Sekolah kami memiliki berbagai macam <br /> kegiatan akademik maupun non
            akademik <br /> untuk menyalurkan bakat dan minat siswa
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Keunggulan;
