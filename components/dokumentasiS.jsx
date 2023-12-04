import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import data from "../data/dokumentasiS.json";
import styles from "../styles/galeri.module.css";

function DokumentasiS() {
    const [jsonData, setJsonData] = useState([]);
  
    useEffect(() => {
      setJsonData(data);
    }, []);

  return (
    <div className="container px-4 lg:px-5 py-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {jsonData.map((item, index) => (
        <a key={index} href="#" className="text-decoration-none">
          <div className={`${styles.card} `}>
            <img
              src={item.image}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className={`${styles.cardtitle} `}>{item.title}</h3>
              <p className={`${styles.cardtext} `}>{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
  )
}

export default DokumentasiS;