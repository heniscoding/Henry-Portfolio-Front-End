import React, { useEffect, useState, useCallback, forwardRef } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const ProjectsCarousel = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const buttonLabels = [
    "Launch Project →",
    "See the Work →",
    "View Details →",
    "Explore Build →",
    "Check It Out →",
    "Peek Inside →",
  ];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProjects();
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef?.slidePrev) swiperRef.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    if (swiperRef?.slideNext) swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <section
      id="projects"
      ref={ref} // 👈 important line
      className="relative py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 px-6 scroll-mt-[64px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="text-custom-light-orange">Build</span>{" "}
          <span className="text-gray-900">Reel</span>
        </h2>
        <p className="text-md md:text-custom-base leading-relaxed text-gray-800 mb-12">
          Just a few highlights from things I’ve been building lately — clean
          code, modern tools, and a sprinkle of love. Each project is designed
          to be easy to use, fun to explore, and built with purpose.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative flex items-center">
          {projects.length >= 3 && (
            <button
              onClick={handlePrev}
              className="hidden xl:flex absolute z-10 items-center justify-center w-10 h-10 bg-white text-[#31aeb5] dark:text-[#d07f00] rounded-full shadow-md transition-colors duration-300 hover:bg-[#31aeb5] dark:hover:bg-[#d07f00] group"
              style={{
                top: "45%",
                left: "-52px",
                transform: "translateY(-50%)",
              }}
              aria-label="Previous Slide"
            >
              <span className="group-hover:text-white transition-colors duration-300">
                ←
              </span>
            </button>
          )}

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={projects.length >= 4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={setSwiperRef}
            className="!pb-12 w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project._id}>
                <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out flex flex-col h-[350px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <div className="flex flex-col justify-between flex-grow p-3">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-700">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-3">
                      <Link to={`/projects/${project.slug || project._id}`}>
                        <button className="w-full px-3 py-1.5 text-sm font-medium text-white btn-custom-orange rounded active:scale-95 hover:shadow-md transition-all duration-300">
                          {buttonLabels[index % buttonLabels.length]}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {projects.length >= 3 && (
            <button
              onClick={handleNext}
              className="hidden xl:flex absolute z-10 items-center justify-center w-10 h-10 bg-white text-[#31aeb5] dark:text-[#d07f00] rounded-full shadow-md transition-colors duration-300 hover:bg-[#31aeb5] dark:hover:bg-[#d07f00] group"
              style={{
                top: "45%",
                right: "-52px",
                transform: "translateY(-50%)",
              }}
              aria-label="Next Slide"
            >
              <span className="group-hover:text-white transition-colors duration-300">
                →
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

export default ProjectsCarousel;
