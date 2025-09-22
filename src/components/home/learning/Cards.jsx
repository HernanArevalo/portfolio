'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import user from '/public/user.png';
import { TiStarFullOutline } from 'react-icons/ti';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`md:top-0 md:-mt-[5rem] xl:block hidden cursor-pointer right-3 xl:right-5 top-[50%] bg-primary-white text-primary-black w-10 h-10 rounded-full absolute z-20 p-[3px] md:flex items-center justify-center transition-all duration-200 ease-linear`}
      onClick={onClick}
    >
      <IoIosArrowRoundForward
        size={35}
        className="transition-all duration-200 ease-linear"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer xl:block hidden xl:left-[91%] md:-mt-[5rem] md:top-0 right-16 top-[50%] absolute z-20 p-[3px] bg-primary-white text-primary-black w-10 h-10 rounded-full md:flex items-center justify-center transition-all duration-200 ease-linear`}
      onClick={onClick}
    >
      <IoIosArrowRoundBack
        size={35}
        className="transition-all duration-200 ease-linear"
      />
    </div>
  );
}

const Cards = () => {
  const data = [
  {
    id: 1,
    title: 'Systems Engineering',
    college: 'Universidad Tecnológica Nacional',
    description:
      'Currently pursuing a degree focused on software engineering, algorithms, databases, and systems design. Strengthening both theoretical foundations and practical skills in development and IT.',
    age: '2022 - current',
    image:
      'https://media.licdn.com/dms/image/v2/C4E0BAQGeb4HjTCzsFg/company-logo_200_200/company-logo_200_200/0/1630632917858/universidad_tecnologica_nacional_logo?e=2147483647&v=beta&t=_tp3j-gnjtIkg1T6HK8bFMIh_UoRZV-sI_-ST4VhTFQ',
  },
  {
    id: 2,
    title: 'xAcademy Program',
    college: 'Santex',
    description:
      'Intensive program focused on modern web development with real-world projects. Enhanced teamwork, agile methodologies, and advanced frontend and backend practices.',
    age: '2024 – 2025',
    image:
      'https://itsitio.com/ar/wp-content/uploads/sites/4/2024/05/XAcademy-portada.webp',
  },
  {
    id: 3,
    title: 'Next.js Development',
    college: 'DevTalles',
    description:
      'Specialized course in Next.js: routing, server-side rendering, API routes, and performance optimization for scalable fullstack apps.',
    age: '2024',
    image: 'https://avatars.githubusercontent.com/u/149187884?s=200&v=4',
  },
  {
    id: 4,
    title: 'React.js Development',
    college: 'DevTalles',
    description:
      'Practical course on React fundamentals, hooks, state management, and component-driven development. Built interactive interfaces with best practices.',
    age: '2023',
    image: 'https://avatars.githubusercontent.com/u/149187884?s=200&v=4',
  },
  {
    id: 5,
    title: 'Argentina Programa',
    college: 'Min. de Economía',
    description:
      'National program for software development training. Covered HTML, CSS, JavaScript, Angular, and backend fundamentals with Node.js.',
    age: '2022',
    image:
      'https://media.licdn.com/dms/image/v2/D4D0BAQFcr5etvtUg7g/company-logo_200_200/company-logo_200_200/0/1685989924534?e=2147483647&v=beta&t=R5qkr5-hfjcrqszz-fO5vS7h5Y4R5JFUiJWMS-2S5S4',
  },
];


  const settings = {
    dots: false,
    dotsClass: 'slick-dots line-indicator',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => <div className="mt-3 text-xs opacity-0">{i}</div>,
  };

  return (
    <div className="mt-10 xl:mt-20 w-full">
      <Slider {...settings} className="w-full">
        {data.map((e) => (
          <div
            key={e.id}
            className="flex relative text-center mx-auto w-[390px] h-[340px] cursor-pointer flex-col rounded-xl py-5 px-4 md:px-6 bg-primary-gray text-primary-gray justify-center items-center"
          >
            <div className="flex gap-4 items-start justify-start">
              {e.image ? (
                <Image
                  src={e.image}
                  alt={e.title}
                  width={1080}
                  height={1080}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              ) : (
                <Image
                  src={user}
                  alt="Default User Icon"
                  width={1080}
                  height={1080}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              )}
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-primary-white font-semibold text-[22px] text-left">
                  {e.title}
                </h2>
                <p className="text-primary-white/30">{e.college}</p>
              </div>
            </div>
            <p className="pt-6 text-primary-white text-left text-xl font-light ">
              {e.description}
            </p>

            <div className="absolute bottom-6 left-0 right-0 px-4 text-primary-green ">
              <div className="flex justify-between items-center w-full">
                <span>{e.age}</span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className="text-xl shimmer-star"
                    >
                      <TiStarFullOutline />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .shimmer-star {
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
