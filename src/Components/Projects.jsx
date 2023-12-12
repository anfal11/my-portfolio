import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="projects" className="max-w-[1520px] mx-auto mt-64 mb-20">
      <h1 className="text-center font-bold text-4xl underline mb-10">
        {" "}
        Projects{" "}
      </h1>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            cards?.map((card, index) => (
                <SwiperSlide key={index}>
                <div className="card lg:card-side shadow-xl lg:h-96">
  <figure><img src={card?.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{card?.title}</h2>
    <p>{card?.details}</p>
    <div className="card-actions justify-center md:justify-end">
      <Link to={card?.github}><button className="btn bg-black text-white hover:bg-gray-700">Github Repo</button></Link>
      <Link to={card?.Live_Link}><button className="btn bg-black text-white hover:bg-gray-700">Live Link</button></Link>
    </div>
  </div>
</div>
          </SwiperSlide>
            ))
          }
        </Swiper>
      </>
    </div>
  );
};

export default Projects;
