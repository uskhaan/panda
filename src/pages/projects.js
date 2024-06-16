import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import cdm from "../../public/images/projects/cdm.png";
import ecomt from "../../public/images/projects/ecomt.png";
import salestracks from "../../public/images/projects/salestracks.png";
import pms from "../../public/images/projects/pms.png";
import promptoo from "../../public/images/projects/propmptoo.png";
import chirp from "../../public/images/projects/chirp.png";
import wesapp from "../../public/images/projects/wes-mobile.png";
import hr from "../../public/images/projects/hr.png";
import innovent from "../../public/images/projects/innovent.png";
import wes from "../../public/images/projects/wes.png";
import wateensol from "../../public/images/projects/wateensol.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  linkTitle,
  secLinkTitle,
  secLink,
  github,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
    dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
       dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <div
        // href={link || ""}
        // target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <div
          // href={link || ""}
          // target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </div>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}

          {link && (
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
            >
              {linkTitle || "Visit Project"}
            </Link>
          )}

          {secLink && (
            <Link
              href={secLink}
              target="_blank"
              className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
            >
              {secLinkTitle}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light 
      xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
        rounded-br--3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw (max-width:1200px) 50vw 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
              lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>USK | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Quality, Maintainability, Scalability engineered together!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={wes}
                title="Wateen Energy"
                summary="Incorporating the power of an enterprise-grade solar monitoring portal, this solution empowers businesses to effectively monitor solar energy generation and consumption, presenting insightful patterns through graphs and charts allowing ticket generation for support teams."
                linkTitle={"Visit App"}
                link="https://energy.wateen.com"
                type="Web"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={cdm}
                title="CDM Central"
                summary="Increased efficiency and automated business processes for CDM Smith which is an American engineering and construction company. This ERP solution centralizes around tracking proposals and projects, resource monitoring, invoicing, featuring automated report generation."
                type="Web"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={wateensol}
                title="Wateen Solutions"
                summary="A Single Page Application (SPA) developed to be used as a Software Company's Portfolio site serving as a digital showcase of the company's expertise, achievements, and offerings. The software company can present its capabilities and innovations to clients and partners."
                type="Web"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={innovent}
                title="Genie"
                summary="Leveraging the power of GPT-4 to cater to students of all grades and classes, offering comprehensive topic explanations, audio-based question inputs, and personalized test question generation."
                linkTitle={"Visit App"}
                link="https://play.google.com/store/apps/details?id=com.innoventsoft&pli=1"
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={wesapp}
                title="Wateen Energy"
                summary="Developed for residential and commercial clients to monitor their solar energy generation and consumption, this App is a part of an energy solutions suite. It provides daily/weekly/monthly analytics via charts and graphs."
                linkTitle={"Visit Android App"}
                secLinkTitle={"Visit iOS App"}
                link="https://play.google.com/store/apps/details?id=com.wateen.energy&hl=en&gl=US"
                secLink="https://apps.apple.com/pk/app/wateen-energy/id6499260844"
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={hr}
                title="Ease Hub"
                summary="Revolutionize HR with Wateen EaseHub! Manage leave, plan travel, and access company policies - all from your smartphone for a more connected and efficient workplace."
                linkTitle={"Visit Android App"}
                secLinkTitle={"Visit iOS App"}
                link="https://play.google.com/store/apps/details?id=com.wateen.easehub&hl=en&gl=US"
                secLink="https://apps.apple.com/pk/app/wateen-easehub/id6499433529"
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={ecomt}
                title="Ecomt"
                summary="Ecomt enables users to establish personalized online marketplaces, promoting community between buyers and sellers. Users can personalize their marketplace storefronts, showcasing their products or services."
                github="https://github.com/uskhaan/ecomt"
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={chirp}
                title="Chirp"
                summary="Chirp - Social Connection Simplified: Share, Discover, and Connect with Ease! Chirp offers an intuitive and straightforward user interface, making it easy for users to navigate and connect with friends and communities."
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={pms}
                title="PMS"
                summary="A Performance Management App where individuals can check their annual organizational objectives and their evaludation done by their managers. Managers are able to evaluate their team via this team."
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={salestracks}
                title="SalesTracks"
                summary="This is a CRM App tailored to manage vital customer information efficiently. It streamlines the processes through lead and opportunity management and provides insightful analytics and reporting."
                type="Mobile"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={promptoo}
                title="Promptoo Driver App"
                summary="A highly interactive driver app for dispatch suite which connects driver to the whole system. It provides realtime driver location alongwith the facility to receive dispatch orders."
                type="Mobile"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                img={cdm}
                title="Genie"
                link="/"
                github="/"
                type="Mobile"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={cdm}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                img={cdm}
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={cdm}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={cdm}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
