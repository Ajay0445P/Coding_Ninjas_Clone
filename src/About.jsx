import React from "react";
import { motion } from "framer-motion";

function About() {
  // Fade + Slide-Up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-zinc-900 text-white flex flex-col gap-y-20 justify-center items-center pt-50 pb-50">
      
      {/* Title */}
      <motion.div
        className="flex text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} 
      >
        <p className="text-6xl font-bold">
          9 Years of <br />
          transforming <br />
          tech careers
        </p>
      </motion.div>

      {/* Cards */}
      {[
        {
          icon: "fa-solid fa-book-open-reader",
          bg: "bg-[#6249C5]",
          title: "1.5 Lac+ Learners",
          desc: "cracked dream roles at top tech companies",
        },
        {
          icon: "fa-solid fa-circle-user",
          bg: "bg-[#65b168]",
          title: "1,400 Alumni in MAANG",
          desc: "& more in 103/111 Unicorns",
        },
        {
          icon: "fa-solid fa-indian-rupee-sign",
          bg: "bg-[#ef6292]",
          title: "1 Cr+ highest CTC",
          desc: "after completing the course",
        },
        {
          icon: "ph ph-trend-up",
          bg: "bg-[#5780e9]",
          title: "128% average hike",
          desc: "via our placement cell",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-y-2 justify-center items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.3 }}
        >
          <div
            className={`${item.bg} rounded-lg p-5 hover:scale-110 transition-transform duration-300`}
          >
            <i className={item.icon}></i>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5">
            <span className="text-6xl font-bold">{item.title}</span>
            <span className="text-md text-white/50">{item.desc}</span>
          </div>
        </motion.div>
      ))}

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <button className="bg-[#f66c3b] text-white font-semibold p-2 rounded-md hover:bg-[#ff7c4a] transition-colors duration-300">
          Explore All <i className="ph ph-caret-double-up"></i>
        </button>
      </motion.div>
    </div>
  );
}

export default About;
