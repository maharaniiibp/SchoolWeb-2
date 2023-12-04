import data from "../data/artikelbaruu.json";
import Link from "next/link";
import styles from "../styles/index.module.css";

function ArtikelBaru() {
  const jsonData = data;

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {jsonData.map((item, index) => (
          <div key={index} className="col">
            <Link legacyBehavior href="/artikel">
              <a className={`text-decoration-none ${styles.card5}`}>
                <div
                  className={`overflow-hidden rounded-3 ${styles.cardImage5}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-100 h-auto img-fluid object-fit-cover"
                  />
                  <button
                    className={`position-absolute bottom-0 start-50 translate-middle  text-white ${styles.dateButton}`}
                  >
                    {item.date}
                  </button>
                </div>
                <h3 className="text-dark fw-bold mt-2">{item.title}</h3>
                <p className="text-muted mt-1">{item.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtikelBaru;
