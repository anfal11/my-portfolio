import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Projects = () => {
    const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-[1520px] mx-auto mt-20">
      <h1 className="text-center font-semibold text-4xl underline mb-10">
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
                <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={card?.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
          </SwiperSlide>
            ))
          }
        </Swiper>
      </>

      <div className="flex items-center justify-center my-10">
        <button
          className="btn bg-black text-white hover:bg-gray-700"
          type="submit"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Projects;
