import Cta from "../components/core/cta";
import Img from "../assets/hero.png";
import TargetPage from "./Target.page";
import ReviewPage from "./Review.page";
import ProblemPage from "./Problem.page";
import AboutPage from "./About.page";

function HomePage() {
  // tabs in target page
  const tabs = [
    {
      label: "Features",
      content: (
        <div>
          <span className="text-2xl font-bold">Inventory Control:</span>{" "}
          Inventory control handles products that are already in stock at the
          warehouse and plays a key role in supply chain management. Inventory
          control tools can categorize products by type, location and SKU (or
          serial number), audit data, generate reports in real-time and search,
          filter and view products. For more on inventory control methods,
          including expert advice, see our “Essential Guide to Inventory
          Control.
        </div>
      )
    },
    {
      label: "Features",
      content: (
        <div>
          <span className="text-2xl font-bold">Inventory Alerts:</span> Various
          modules trigger inventory alerts that help reduce waste, optimize
          inventory financials and manage customer expectations. These features
          include automated email or SMS messages that alert you to low
          inventory levels and shipment and supply chain delays. Inventory
          alerts offer an added level of operational control for sales
          forecasting, materials planning, shipping logistics and supplier
          management.
        </div>
      )
    },
    {
      label: "Features",
      content: (
        <div>
          <span className="text-2xl font-bold">Inventory Optimization:</span>{" "}
          Take inventory planning to a higher level with inventory optimization.
          Add sophistication to a basic inventory plan. Instead of standard
          ordering formulas and a basic ordering process, you can use tools that
          provide automated reports, inventory trends and a view of changes
          across the entire supply chain. This information enables a closer
          match in supply and demand so you can optimize the inventory on-hand.
          See the inventory forecasting guide to learn more.
        </div>
      )
    }
  ];

  return (
    <div className="text-white ">
      <section className="w-full min-h-[100vh] container mx-auto flex justify-center items-center ">
        <div className="px-12 h-fit w-full flex flex-col items-center justify-center sm:flex-row gap-7 ">
          <div className="w-full justify-center items-center ">
            <h3 className="text-3xl sm:text-7xl pb-5">
              Every order fulfilled,{" "}
              <span className="text-transparent font-normal bg-clip-text bg-purple-300 bg-gradient-to-t  from-[#f5bbaa] ">
                on time.
              </span>{" "}
            </h3>
            <p className="text-md">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button
              className="bg-purple-300 bg-gradient-to-t  from-[#f5bbaa] text-md font-extrabold p-3 my-3 rounded-xl"
              type="button">
              View More
            </button>
          </div>
          <div className="w-full flex justify-center  ">
            <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] to-[#f5bbaa] absolute rounded-full top-[70%] left-[4%]  sm:top-[20%] sm:left-[40%]   lg:top-[15%] lg:left-[55%]  xl:top-[15%] xl:left-[55%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300" />
            <img
              src={Img}
              alt=""
              className="w-fit relative z-10"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* About page */}
      <AboutPage />
      {/* review page */}
      <ReviewPage />
      {/* target page */}
      <ProblemPage />
      {/* tabs page */}
      <TargetPage tabs={tabs} />
      {/* cta */}
      <Cta />
    </div>
  );
}

export default HomePage;
