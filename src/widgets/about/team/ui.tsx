import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper-buttons.scss";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";

import slide1 from "shared/assets/img/team/1.png";
import slide2 from "shared/assets/img/team/2.png";
import slide3 from "shared/assets/img/team/3.png";
import slide4 from "shared/assets/img/team/4.png";
import slide5 from "shared/assets/img/team/5.png";
import classNames from "classnames";
import ArrowRight from "shared/assets/icons/arrow-right";

type TeamMember = {
  id: number;
  name: string;
  role?: string;
  description?: string;
  photo: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Connor Clark",
    description: "Commercial",
    photo: slide1,
  },
  {
    id: 2,
    name: "Enrique Espinosa",
    description: "Product",
    photo: slide2,
  },
  {
    id: 3,
    name: "Ozzy Knox",
    description: "Tech",
    photo: slide3,
  },
  {
    id: 4,
    name: "Jeremy Viala",
    description: "Legal",
    photo: slide4,
  },
  {
    id: 5,
    name: "Sebastian Jimenez",
    description: "Brand & Design",
    photo: slide5,
  },
];

export const Team: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <Title variant="h1" className={styles.title}>
        Team
      </Title>

      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView="auto"
        navigation
        className={classNames(styles.teamSwiper, "team-swiper")}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },
        }}
        wrapperClass={styles.wrapper}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
      >
        {teamData.map((member) => (
          <SwiperSlide key={member.id} className={styles.slide}>
            <div className={styles.card}>
              <img
                src={member.photo}
                alt={`${member.name} photo`}
                className={styles.photo}
              />
              <Title variant="h3" className={styles.name}>
                {member.name} {member.role && "/"} {member.role}
              </Title>
              <p className={styles.description}>{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.navigation}>
          <button
            ref={navigationPrevRef}
            className={classNames(styles.button, styles.prev)}
          >
            <ArrowRight />
          </button>
          <button ref={navigationNextRef} className={styles.button}>
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
