import { ArrowUpRight } from "lucide-react";

export function ProductHeroSection() {
  return (
    <section
      className="
              bg-black
              flex
              items-center
              px-6
              pt-24
              pb-20
            "
    >
      <div
        className="
                w-full
                max-w-[1360px]
                mx-auto
                pl-[3%]
              "
      >
        <h1
          className="
                  text-white
                  font-bold
                  text-[clamp(2.75rem,6vw,7rem)]
                  leading-[1]
                "
        >
          Industry-Leading <span className="text-transparent stroke-text-green">Software</span>
          <br />
          <span className="text-transparent stroke-text-green">Authorized</span> Supported
        </h1>

        <p
          className="
                mt-8
                max-w-[900px]
                text-white
                text-[20px]
                md:text-[26px]
                font-semibold
                font-sans
                "
        >
          Buy with confidence — implementation expertise included.
        </p>

        {/*Button*/}
        <button
          className="
                  mt-[calc(6rem-3vh)]
                  flex
                  items-center
                  gap-3
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#82E926]
                  backdrop-blur-md
                "
        >
          <span
            className="
                    text-black
                    text-[26px]
                    font-bold
                  "
          >
            Explore More
          </span>

          <div
            className="
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
          >
            <ArrowUpRight size={34} className="text-black" strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
}
