import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import slugify from "slugify";
import { BounceLoader } from "react-spinners";
import ButtonFood from "../components/Buttons/ButtonFood";
import ButtonApp from "../components/Buttons/ButtonApp";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 800, // Velocidad de transición
  slidesToShow: 1, // Mostrar solo una imagen a la vez
  slidesToScroll: 1,
  autoplay: true, // Activar la reproducción automática
  autoplaySpeed: 4000,
  pauseOnHover: true,
  fade: true,
};

function InfoDetails() {
  const { title } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fechInfo = async () => {
      try {
        const response = await axios.get(
          `https://api-exploralocal.onrender.com/items`
        );

        const formattedTitleSlug = slugify(title, {
          lower: true,
          replacement: "-",
        });

        const infoData = response.data.find(
          (item) => formattedTitleSlug === slugify(item.title, { lower: true })
        );
        setInfo(infoData);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    };
    fechInfo();
  }, [title]);

  if (loading) {
    return (
      <div className="flex flex-col h-screen px-3 lg:px-32 justify-center items-center">
        <BounceLoader color={"#36D7B7"} loading={true} size={60} />
      </div>
    );
  }

  if (!info) {
    return (
      <div className="flex flex-col min-h-screen px-3 lg:px-40 justify-center items-center gap-5">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold uppercase">
          Information not found :(
        </h2>
        <img
          src="/error.png"
          alt="error image"
          className="w-[150px] md:w-[200px]"
        />
      </div>
    );
  }

  // Renderizar elementos adicionales según la categoría
  const hasAppLinks = info.googleplay || info.appstore;
  const webLink = info.web ? <ButtonFood linkweb={info.web} /> : null;
  const ubicationMap = info.ubication ? (
    <iframe
      src={info.ubication}
      className="w-[950px] h-[300px] md:h-[400px] rounded-lg"
      loading="lazy"
    ></iframe>
  ) : null;
  const buttonAppstore = info.appstore ? (
    <ButtonApp
      linkapp={info.appstore}
      iconapp={<IoLogoAppleAppstore size={30} />}
      titleapp={"App Store"}
    />
  ) : null;
  const buttonPlaystore = info.googleplay ? (
    <ButtonApp
      linkapp={info.googleplay}
      iconapp={<IoLogoGooglePlaystore size={30} />}
      titleapp={"Play Store"}
    />
  ) : null;

  return (
    <div className="py-10 px-3 lg:px-40">
      <div className="flex flex-col lg:flex-row gap-10">
        <Slider {...settings} className="ml-6 md:ml-0 w-[320px] h-[250px] md:w-[580px] md:h-[440px] object-cover rounded-lg shadow shadow-white">
          <div>
            <img
              src={info.image1}
              alt={`imagen slider de ${info.title}`}
              className="w-[320px] md:w-[580px] h-[250px] md:h-[440px] object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={info.image2}
              alt={`imagen slider de ${info.title}`}
              className="w-[320px] md:w-[580px] h-[250px] md:h-[440px] object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={info.image3}
              alt={`imagen slider de ${info.title}`}
              className="w-[320px] md:w-[580px] h-[250px] md:h-[440px] object-cover rounded-lg"
            />
          </div>
        </Slider>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-green-500">{info.title}</h1>
          <div className="flex flex-col gap-2">
            <p className="text-[17px]">{info.description}</p>
            <p className="text-[17px]">{info.description2}</p>
            <p className="text-[17px]">{info.description3}</p>
            {webLink}
            {hasAppLinks && (
              <div className="flex flex-col gap-5">
                <p className="text-sm text-gray-400 font-semibold">
                  Descárgalo desde:
                </p>
                <div className="flex gap-5">
                  {buttonPlaystore}
                  {buttonAppstore}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">{ubicationMap}</div>
    </div>
  );
}

export default InfoDetails;
