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
import classNames from "classnames";
import ArrowRight from "shared/assets/icons/arrow-right";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  photo: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Jeremy Viala",
    role: "Compliance Officer",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide1,
  },
  {
    id: 2,
    name: "Connor G",
    role: "Product Manager",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide2,
  },
  {
    id: 1,
    name: "Jeremy Viala",
    role: "Compliance Officer",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide1,
  },
  {
    id: 2,
    name: "Connor G",
    role: "Product Manager",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide2,
  },
  {
    id: 1,
    name: "Jeremy Viala",
    role: "Compliance Officer",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide1,
  },
  {
    id: 2,
    name: "Connor G",
    role: "Product Manager",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide2,
  },
  {
    id: 1,
    name: "Jeremy Viala",
    role: "Compliance Officer",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide1,
  },
  {
    id: 2,
    name: "Connor G",
    role: "Product Manager",
    description:
      "Can Blockchain help? What does the future say about this. We talked with the foremost produ...",
    photo: slide2,
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
        slidesPerView={1}
        navigation
        className={classNames(styles.teamSwiper, "team-swiper")}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.2 },
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
                {member.name} / {member.role}
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
