import React, { useState, useEffect } from "react";
import data from "../data/dokumentasi.json";
import styles from "../styles/index.module.css";

function Dokumentasi() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 g-3">
        {jsonData.map((item, index) => (
          <div key={index} className="col">
            <a href="#" className="text-decoration-none">
              <div className={`${styles.card} `}>
                <img
                  src={item.image}
                  alt=""
                  className="card-img-top radius:24px "
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className={`${styles.cardtitle} `}>{item.title}</h3>
                  <p className={`${styles.cardtext} `}>{item.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumentasi;
