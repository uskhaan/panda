import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const workLines = work.split("\n"); // Split work string into lines
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm">
          {workLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineer (Full-Stack)"}
            company={"Wateen"}
            companyLink={"https://www.wateen.com/"}
            time={"Oct 2022 – Present"}
            address={"Lahore, Punjab, Pakistan"}
            work={
              "• Working as a Full-Stack Engineer in Software and Professional Services Division\n• Writing structured and maintainable code for clients and internal projects\n• Main responsibilities include developing cross-platform mobile and web systems from idea till deployment\n• Participating in Unit testing, Integration testing and End-to-End testing to ensure software functionality meet requirements and specifications"
            }
          />
          <Details
            position={"Associate Software Engineer"}
            company={"Cogentro"}
            companyLink={"https://cogentro.com/"}
            time={"Jan 2022 – Sept 2022"}
            address={"Slough, England, United Kingdom · Remote"}
            work={
              "• Wrote modern, performant, maintainable code for internal projects\n• Developed Mobile Applications in React-Native with state managed in Redux\n• Engineered and maintained major features of Cogentro’s customer-facing products\n• Solved production issues for already deployed systems\n• Played a key role in the stability of business processes"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
