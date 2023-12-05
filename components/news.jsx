

import React, { useState, useEffect } from "react";
import Link from "next/link";
import data from "../data/news.json";
import styles from "../styles/berita.module.css"; // File CSS terpisah

function News() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="container px-4 py-5" id="featured-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {jsonData.map((item, index) => (
          <div key={index} className="col">
           
              <a className={`card ${styles.newsCard}`}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <button className={`btn text-white ${styles.dateButton}`}>
                    {item.date}
                  </button>
                  <h3 className="text-dark fw-bold mt-2">{item.tittle}</h3>
                  <p className="text-muted mt-1">{item.description}</p>
                  <Link legacyBehavior href="#">
                    <p className={`  ${styles.readMore}`}>
                      Baca selengkapnya
                    </p>
                  </Link>
                 


                </div>
              </a>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

