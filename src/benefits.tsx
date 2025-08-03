import { motion } from "framer-motion";

const FingerprintSVG = () => (
  <svg
    width="65"
    height="65"
    viewBox="0 0 65 65"
    className="fingerprint"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"  
  >
    <g clipPath="url(#clip0_4_981)">
      <path
        d="M64.8398 32.75C64.8398 15.0769 50.513 0.75 32.8398 0.75C15.1667 0.75 0.839844 15.0769 0.839844 32.75C0.839844 50.4231 15.1667 64.75 32.8398 64.75C50.513 64.75 64.8398 50.4231 64.8398 32.75Z"
        fill="black"
      />
      <path
        d="M27.6396 45.0447C25.7865 42.4001 24.6963 39.1825 24.6963 35.7083C24.6963 31.2091 28.3415 27.5625 32.838 27.5625C37.3345 27.5625 40.9797 31.2091 40.9797 35.7083"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.6397 45.0447C25.7865 42.4 24.6963 39.1824 24.6963 35.7083C24.6963 31.2091 28.3415 27.5625 32.838 27.5625C37.3345 27.5625 40.9797 31.2091 40.9797 35.7083"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.421 43.832C41.2744 43.8402 41.1305 43.8538 40.9825 43.8538C36.486 43.8538 32.8408 40.2072 32.8408 35.708"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.4211 43.8326C41.2744 43.8407 41.1305 43.8543 40.9825 43.8543C36.4861 43.8543 32.8408 40.2077 32.8408 35.7085"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5323 46.0833C31.0731 43.926 28.7692 40.0867 28.7692 35.7083C28.7692 33.4587 30.5925 31.6354 32.8407 31.6354C35.089 31.6354 36.9123 33.4587 36.9123 35.7083C36.9123 37.9579 38.7356 39.7812 40.9838 39.7812C43.232 39.7812 45.0553 37.9579 45.0553 35.7083C45.0553 28.9595 39.5868 23.4897 32.8421 23.4897C26.0974 23.4897 20.6289 28.9595 20.6289 35.7083C20.6289 37.2126 20.7972 38.6775 21.1067 40.0894"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5323 46.0833C31.0731 43.926 28.7692 40.0867 28.7692 35.7083C28.7692 33.4587 30.5925 31.6354 32.8407 31.6354C35.089 31.6354 36.9123 33.4587 36.9123 35.7083C36.9123 37.9579 38.7356 39.7812 40.9838 39.7812C43.232 39.7812 45.0553 37.9579 45.0553 35.7083C45.0553 28.9595 39.5868 23.4897 32.8421 23.4897C26.0974 23.4897 20.6289 28.9595 20.6289 35.7083C20.6289 37.2126 20.7972 38.6775 21.1067 40.0894"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.2076 24.5673C41.4312 21.4136 37.3719 19.4165 32.8401 19.4165C28.3084 19.4165 24.2491 21.4136 21.4727 24.5673"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.2076 24.5673C41.4312 21.4136 37.3719 19.4165 32.8401 19.4165C28.3084 19.4165 24.2491 21.4136 21.4727 24.5673"
        stroke="#BDFF1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4_981">
        <rect
          width="64"
          height="64"
          fill="white"
          transform="translate(0.839844 0.75)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="pt-[80px] lg:pt-[120px]  bg-white w-full px-[24px] md:px-[32px] xl:px-[178px] flex flex-col items-center gap-[60px]"
    >
      <div className="flex flex-col items-center gap-5 w-full xl:w-[800px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="w-full sm:w-[669px] poppins-medium text-[50px] leading-[60px] tracking-[-2px] md:text-[56px] md:leading-[67.2px] text-center text-[#0f1728]"
        >
          Good-bye to traditional startup hassle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="font-normal text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466]"
        >
          Say farewell to the complexities of the past and unlock a smoother
          path to success. Welcome to a new era of simplicity and efficiency.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
          <FingerprintSVG />
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
              Optimize your daily operations
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
              Our software simplifies complex business processes, helping you
              efficiently manage tasks, projects, and resources.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.4,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
          <FingerprintSVG />
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
              Make informed business decision
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
              Our software provides comprehensive analytics, empowering you to
              identify trends, track performance, and adjust your strategies for
              success.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.6,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col p-8 bg-[#bdff1c] rounded-[24px] items-start justify-start h-full gap-16 md:gap-10 sm:h-[274px] md:h-[435px] lg:h-[348px] md:w-1/3"
        >
          <FingerprintSVG />
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="font-medium text-[26px] leading-[31.2px] tracking-[-1px] text-[#0f1728]">
              Scale your startup with confidence
            </h3>
            <p className="font-normal leading-[21.6px] text-base tracking-[-0.32px] text-black/50">
              Our software is designed to grow alongside your business, adapting
              to your evolving needs. Scale your startup with confidence.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
