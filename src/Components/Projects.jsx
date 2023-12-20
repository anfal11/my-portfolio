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
    <div id="projects" className="max-w-[1520px] mx-auto pt-32 mb-20">
      <h1 className="text-center font-bold text-4xl underline mb-10">
        {" "}
        Projects{" "}
      </h1>
      <>
        <Swiper
          // slidesPerView={3}
          // spaceBetween={30}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1167: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card w-96 xl:w-96 mx-5 bg-base-100 shadow-xl mb-20">
                <figure>
                  <img
                    src={card?.image}
                    className="w-64 h-64 hover:scale-110 transition duration-300 ease-in-out"
                    alt={card?.title}
                  />
                </figure>
                <div className="card-body h-[480px]">
                  <h2 className="card-title">{card?.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card?.technology?.map((tech, index) => (
                      <div key={index} className="bg-gray-200 p-2 rounded">
                        {tech}
                      </div>
                    ))}
                  </div>
                  {Array.isArray(card?.details) && card?.details.length > 0 ? (
                    <ul className="list-disc list-inside h-[330px]">
                      {card?.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No details available</p>
                  )}
                  <div className="card-actions justify-center">
                    <Link to={card?.github}>
                      <button className="btn bg-black text-white hover:bg-gray-700">
                        Github Repo
                      </button>
                    </Link>
                    <Link to={card?.Live_Link}>
                      <button className="btn bg-black text-white hover:bg-gray-700">
                        Live Link
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Projects;
{
  /* <div className="card lg:card-side shadow-xl lg:h-96">
  <figure><img src={card?.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{card?.title}</h2>
    <p>{card?.details}</p>
    
  </div>
</div> */
}
