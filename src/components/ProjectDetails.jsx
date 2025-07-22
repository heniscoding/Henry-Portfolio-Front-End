import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { fetchProjects } from "../services/api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
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
        const current = data.find((p) => p.slug === slug);
        setProject(current);
        setProjects(data.filter((p) => p.slug !== slug));
      } catch (err) {
        console.error(err);
      }
    };
    loadProjects();
  }, [slug]);

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Henry Alderslade</title>
        <meta name="description" content={project.description?.slice(0, 155)} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta
          property="og:url"
          content={`https://www.henryalderslade.com/projects/${project.slug}`}
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: `https://www.henryalderslade.com/projects/${project.slug}`,
            image: project.image,
            author: {
              "@type": "Person",
              name: "Henry Alderslade",
              url: "https://www.henryalderslade.com",
            },
            creator: {
              "@type": "Person",
              name: "Henry Alderslade",
            },
            inLanguage: "en",
            keywords: project.techStack?.join(", "),
            datePublished: project.publishedDate || "2024-01-01",
          })}
        </script>
      </Helmet>

      {/* Header image */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[40vh] overflow-hidden pt-16">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-4 py-6 sm:py-8">
          <div className="flex max-w-3xl mx-auto py-6 justify-center items-center flex-grow">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg text-center"
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="absolute bottom-6 inset-x-0 z-20">
            <div className="max-w-3xl mx-auto px-6">
              <motion.button
                onClick={() =>
                  navigate("/", { state: { scrollTo: "projects" } })
                }
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-white dark:text-white border border-solid border-white text-sm font-bold flex items-center gap-3 px-5 py-2 rounded bg-custom-green/20 dark:bg-custom-orange/20 backdrop-blur-sm hover:border-custom-green dark:hover:border-custom-orange transition-colors duration-900"
              >
                <span className="text-sm">←</span> Back
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Project summary with scoped background */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center bg-fixed bg-no-repeat z-0 blur-sm"
          style={{ backgroundImage: "url('/data/projects-background.jpg')" }}
        ></div>

        {/* Foreground section */}
        <section className="relative z-10 pt-10 pb-13 text-gray-800 px-2 bg-white/70 backdrop-blur-xs">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-custom-light-orange" />
          <div className="max-w-3xl mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <div className="py-4 px-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-[2px] w-8 bg-custom-light-orange rounded" />
                  <span className="my-3 uppercase tracking-wider text-[1.35rem] font-semibold text-gray-600">
                    Project Summary
                  </span>
                  <span className="h-[2px] w-8 bg-custom-light-orange rounded" />
                </div>
                {project.link && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-3 py-1.5 text-sm font-medium text-white btn-custom-orange rounded hover:shadow-md transition">
                        Visit Project
                      </button>
                    </a>
                  </motion.div>
                )}
                <div className="mt-10 text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-left space-y-4 font-sans max-w-prose mx-auto">
                  {project.description.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-2 mt-6 flex items-center justify-center gap-2">
                    <span className="h-[2px] w-8 bg-custom-light-orange rounded"></span>
                    <span className="my-3 uppercase tracking-wider text-[1rem] font-semibold text-gray-600">
                      Tech Stack
                    </span>
                    <span className="h-[2px] w-8 bg-custom-light-orange rounded"></span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm font-medium text-white bg-gray-600 rounded hover:shadow-md transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Other projects carousel (unchanged) */}
          {projects.length > 0 && (
            <div className="pt-6">
              <div className="max-w-3xl mx-auto px-6">
                <div className="relative flex items-center">
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
                    <span className="group-hover:text-white">←</span>
                  </button>

                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={projects.length > 3}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    onSwiper={setSwiperRef}
                    className="!pb-12 w-full"
                  >
                    {projects.map((proj, idx) => (
                      <SwiperSlide key={proj._id}>
                        <div className="bg-white shadow-md rounded-md flex flex-col h-[350px] transition-transform hover:scale-[1.02]">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-40 object-cover rounded-t-md"
                          />
                          <div className="flex flex-col justify-between flex-grow p-3">
                            <div>
                              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-700">
                                {proj.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                                {proj.description}
                              </p>
                            </div>
                            <div className="pt-3">
                              <Link to={`/projects/${proj.slug}`}>
                                <button className="w-full px-3 py-1.5 text-sm font-medium text-white btn-custom-orange rounded hover:shadow-md transition">
                                  {buttonLabels[idx % buttonLabels.length]}
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

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
                    <span className="group-hover:text-white">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-custom-light-orange" />
        </section>
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default ProjectDetails;
