import transportation from "../assets/transportation.webp";
import cuisine from "../assets/cuisine.webp";
import sites from "../assets/sites.webp";
import culture from "../assets/culture.webp";
import Reveal from "../utils/Reveal";

const DiscoverMore = () => {

  return (
    <Reveal>
      <section
        className="max-w-6xl w-full mx-auto my-14 space-y-4 md:space-y-10 px-5"
      >
        <h1
          className="text-3xl md:text-6xl font-bold text-black tracking-wide -z-10"
        >
          Living in Indonesia
        </h1>

        <div className="flex flex-col shadow-xl rounded-xl">

        <div className="grid grid-cols-10">
            <div className="col-span-4 bg-[#952E2E] h-[150px] md:h-[320px] flex items-center justify-center rounded-ss-xl">
              <div className="flex flex-col text-white w-full space-y-0 md:space-y-3 p-2 md:p-16">
                <h3 className="text-lg md:text-2xl font-bold">Culture</h3>
                <p className="text-xs md:text-xl selection:bg-black selection:text-white">
                  Mosaic of diverse cultures spread across its many islands
                </p>
              </div>
            </div>
            <div className="col-span-6 h-[150px] md:h-[320px] rounded-se-xl">
              <img
                src={culture}
                alt="culture-study-in-indonesia"
                className="w-full h-full object-cover rounded-se-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-10">
            <div className="col-span-6 h-[150px] md:h-[320px]">
              <img
                src={sites}
                alt="sites-study-in-indonesia"
                className="w-full h-full object-cover rounded-ss-xl"
              />
            </div>
            <div className="col-span-4 bg-[#44369B] h-[150px] md:h-[320px] flex items-center justify-center">
              <div className="flex flex-col text-white w-full space-y-0 md:space-y-3 p-2 md:p-16">
                <h3 className="text-lg md:text-2xl font-bold">Sites</h3>
                <p className="text-xs md:text-xl">
                  Indonesia is home to numerous historical sites, each rich with
                  cultural heritage and significance
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10">
            <div className="col-span-4 bg-[#009FB5] h-[150px] md:h-[320px] flex items-center justify-center">
              <div className="flex flex-col text-white w-full space-y-0 md:space-y-3 p-2 md:p-16">
                <h3 className="text-lg md:text-2xl font-bold">Cuisine</h3>
                <p className="text-xs md:text-xl">
                  Renowned for its diverse cuisine, with each island offering its
                  unique and flavorful dishes
                </p>
              </div>
            </div>
            <div className="col-span-6 h-[150px] md:h-[320px]">
              <img
                src={cuisine}
                alt="cuisine-study-in-indonesia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>



          <div className="grid grid-cols-10">
            <div className="col-span-6 h-[150px] md:h-[320px] rounded-bl-xl">
              <img
                src={transportation}
                alt="transportation-study-in-indonesia"
                className="w-full h-full object-cover rounded-bl-xl"
              />
            </div>
            <div className="col-span-4 bg-[#BF8900] h-[150px] md:h-[320px] flex items-center justify-center rounded-ee-xl">
              <div className="flex flex-col text-white w-full space-y-0 md:space-y-3 p-2 md:p-16">
                <h3 className="text-lg md:text-2xl font-bold">Transportation</h3>
                <p className="text-xs md:text-xl">
                  Boasts a diverse array of public transportation options
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </Reveal>
  );
};

export default DiscoverMore;
