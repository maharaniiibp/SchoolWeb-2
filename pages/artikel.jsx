// import Link from "next/link";
import Image from "next/image";
import { Container  } from "react-bootstrap";
import Footer from "@/components/footer";
import styles from "../styles/berita.module.css";


function Article() {
  return (
    <div className="bg-white">
      <div className="bg-cover h-auto bg-center">
        <Image
          src="/asset/bgartikel.svg"
          alt=""
          layout="responsive"
          width={1920}
          height={1080}
        />
        <Container className="px-6 pt-14 mx-auto lg:px-20">
          <Image
            src="/asset/imageartikel.png"
            alt=""
            className="mt-12 lg:mt-28"
            width={1200}
            height={800}
          />
        </Container>
      </div>

      <div className="mt-8 lg:mt-16 pb-40 ml-8 lg:ml-20">
        <div className="px-4 py-2 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
        <p class={`${styles.date} text-white`}>
  12 Desember 2021
</p>
        </div>
        <h1 className="text-blue-950 text-xl lg:text-[53px] font-bold mt-4 leading-tight pr-6">
          Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
        </h1>
        <h2 className="text-neutral-700 text-base lg:text-xl font-normal font-Poppins mt-2 mb-6">
          Penulis : Shinta A.P
        </h2>
        <p className="text-justify text-neutral-700 text-base lg:text-xl font-normal font-Poppins pr-8 lg:pr-20">
        Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
            kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman
            sekelas saya. begitupun sebagian besar orang tua, mimpi mereka
            adalah melihat anaknya kembali ke aktivitas sekolah secara langsung.
            Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya
            selama pandemi lebih banyak menghabiskan waktu di depan layar
            gawainya bukan hanya untuk belajar namun juga untuk bermain game.
            Belum lagi harus menemani dan membantu anak-anak belajar sementara
            pekerjaan di rumah tidaklah sedikit.
            <br />
            <br /> Namun perlahan demi perlahan sejak Oktober lalu, beberapa
            sekolah di Indonesia sudah mulai menerapkan Pembelajaran Tatap Muka
            atau PTM namun secara terbatas termasuk di Purwakarta kota saya
            tercinta. Seminggu sekali anak-anak bersekolah tentunya dengan
            pembatasan jarak ataupun waktu belajar yang mengalami pengurangan.
            <br />
            <br /> Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru di
            Januari tahun 2022 ini akan mulai melaksanakan pembelajaran tatap
            muka secara terbatas setelah memenuhi persyaratan yang ditentukan
            oleh Pemerintah Daerah dalam hal ini Dinas Pendidikan yang beberapa
            syaratnya antara lain tersedianya fasilitas kesehatan, siswa-siswi
            serta civitas sekolah yang sudah di vaksin dan beberapa persyaratan
            lainnya.
            <br />
            <br /> Karenanya untuk mewujudkan mimpi para siswa yang ingin
            kembali belajar di sekolah, di hari Jumat tanggal 7 Januari 2022
            diselenggarakan kegiatan gotong royong membersihkan sekolah yang
            dilaksanakan oleh perwakilan orang tua siswa, perwakilan siswa,
            perwakilan OSIS dan tentunya dilaksanakan juga oleh segenap civitas
            sekolah baik itu Guru maupun Staff Tata Usaha.
            <br />
            <br /> Kegiatan gotong royong membersihkan sekolah tersebut diadakan
            agar ketika anak kembali ke kelasnya, kelasnya sudah dalam keadaan
            bersih. Seperti yang dikatakan oleh perwakilan orang tua dari kelas
            7 dan 9 yang mengatakan alasan ikut gotong royong membersihkan kelas
            anaknya agar anaknya dapat belajar dengan nyaman dan sehat karena
            lingkungan kelas maupun sekolahnya yang bersih. Selain itu mengingat
            salah satu syarat bisa diadakan pembelajaran tatap muka adalah
            lingkungan pembelajaran yang bersih dan sehat.
            <br />
            <br />  Selain membawa peralatan kebersihan masing-masing, ada pula
            orang tua yang membawa makanan untuk dikonsumsi setelah kelas
            selesai. Terjalin pula kerjasama yang baik antar orang tua padahal
            ada yang tidak kenal awalnya begitu juga anak-anak kelas 7 yang
            akhirnya bisa bertemu dengan teman kelasnya secara langsung setelah
            di semester ganjil ini hanya bertemu di pembelajaran online.
            Semuanya  hadir demi mewujudkan pembelajaran tatap muka meskipun
            terbatas.
        </p>
      </div>
<Footer/>
      
    </div>
  );
}

export default Article;