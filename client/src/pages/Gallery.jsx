import React from "react";
import PageTitle from "../components/PageTitle";

import img1 from "../assets/images/gallery/1.jpg";
import img3 from "../assets/images/gallery/3.jpg";
import img5 from "../assets/images/gallery/5.jpg";
import img6 from "../assets/images/gallery/6.jpg";
import img7 from "../assets/images/gallery/7.jpg";
import img8 from "../assets/images/gallery/8.jpg";
import img9 from "../assets/images/gallery/9.jpg";
import img13 from "../assets/images/gallery/13.jpg";
import img25 from "../assets/images/gallery/25.jpg";
import img29 from "../assets/images/gallery/29.jpg";
import img16 from "../assets/images/gallery/16.jpg";
import img17 from "../assets/images/gallery/17.jpg";
import img34 from "../assets/images/gallery/34.jpg";
import { useData } from "../context/GetData";

function Gallery() {
  const { api, project, cateogry, useState, useEffect } = useData();
  const [gallery, setGallery] = useState();

  useEffect(() => {
    setGallery(project);
  }, [project]);

  const handleClick = (cid) => {
    let btnall = document.getElementById("all");
    let btn = document.querySelectorAll(".filter-btn");
    for (var i = 1; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    if (cid === "all") {
      btnall.classList.add("active");
      setGallery(project);
    } else {
      btnall.classList.remove("active");
      document.getElementById(cid).classList.add("active");
      api.post("/projects/filter", { cateogry_id: cid }).then((res) => {
        if (res.data.success === 1) {
          setGallery(res.data.data);
        }
      });
    }
  };

  return (
    <>
      <PageTitle title="Gallery" />
      <div className="container">
        <div className="row my-5 text-center">
          <div className="col-sm-12">
            <div className="category-buttons">
              <button
                className="btn filter-btn active"
                id="all"
                onClick={() => handleClick("all")}
              >
                All
              </button>
              {cateogry &&
                cateogry.map((item) => (
                  <button
                    className="btn filter-btn"
                    id={item.C_ID}
                    key={item.C_ID}
                    onClick={() => handleClick(item.C_ID)}
                  >
                    {item.C_TITLE}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <section className="photo-grid-container mb-5">
          {gallery &&
            gallery.map((item) => (
              <div className="photo-grid-item" key={item.PID}>
                <img className="gallery-img" src={item.IMAGE} alt="" />
              </div>
            ))}
        </section>
      </div>
    </>
  );
}

export default Gallery;
