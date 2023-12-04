import React, { useState, useEffect } from "react";
import Link from "next/link";
import data from "../data/news.json";
import styles from "../styles/berita.module.css"

function News() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className={`container ${styles.newsContainer}`}>
      <div className="row">
        {jsonData.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <a href="#" className={`group relative ${styles.newsItem}`}>
              <div className="w-100 overflow-hidden rounded-lg position-relative">
                <Link href="/article">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={item.image}
                      alt=""
                      className={`img-fluid object-cover object-center ${
                        styles.newsImage
                      }`}
                    />
                    <button className={`btn btn-secondary ${styles.dateButton}`}>
                      {item.date}
                    </button>
                  </div>
                </Link>
              </div>

              <h3 className="text-lg text-gray-900 font-weight-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{item.description}</p>
              <Link href="#">
                <p className="text-xs text-blue-400 font-weight-bold">
                  Baca selengkapnya
                </p>
              </Link>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;