import React, { useState, useEffect } from "react";
import data from "../data/anggota.json";
import styles from "../styles/tentang.module.css"

function Anggota() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {jsonData.map((item, index) => (
          <div key={index} className="col">
            <a  className={`${styles.card}`}>
              <div className="overflow-hidden rounded-3 bg-gray-200">
                <img
                  src={item.image}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className={`${styles.cardimgtop} img-fluid`}
                />
              </div>
              <div className="card-body">
                <h3 className={`${styles.cardtitle} mt-4 text-center  `}>
                  {item.name}
                </h3>
                <p className={`${styles.cardposition} mt-1 text-center text-sm `}>
                  {item.position}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anggota;