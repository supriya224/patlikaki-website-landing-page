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
      label: "Tab 1",
      content: (
        <div>
          <span>Inventory Control:</span> Inventory control handles products
          that are already in stock at the warehouse and plays a key role in
          supply chain management. Inventory control tools can categorize
          products by type, location and SKU (or serial number), audit data,
          generate reports in real-time and search, filter and view products.
          For more on inventory control methods, including expert advice, see
          our “Essential Guide to Inventory Control.”
        </div>
      )
    },
    {
      label: "Tab 2",
      content: (
        <div>
          <span>Inventory Alerts:</span> Various modules trigger inventory
          alerts that help reduce waste, optimize inventory financials and
          manage customer expectations. These features include automated email
          or SMS messages that alert you to low inventory levels and shipment
          and supply chain delays. Inventory alerts offer an added level of
          operational control for sales forecasting, materials planning,
          shipping logistics and supplier management.
        </div>
      )
    },
    {
      label: "Tab 3",
      content: (
        <div>
          <span>Inventory Optimization:</span> Take inventory planning to a
          higher level with inventory optimization. Add sophistication to a
          basic inventory plan. Instead of standard ordering formulas and a
          basic ordering process, you can use tools that provide automated
          reports, inventory trends and a view of changes across the entire
          supply chain. This information enables a closer match in supply and
          demand so you can optimize the inventory on-hand. See the inventory
          forecasting guide to learn more.
        </div>
      )
    }
  ];

  // bg-red-900 sm:bg-yellow-400 md:bg-blue-400 lg:bg-teal-400 xl:bg-lime-400
  return (
    <div className="text-white">
      <section className="w-full min-h-[100vh] container mx-auto flex justify-center items-center ">
        <div className="px-12 h-fit w-full flex flex-col items-center justify-center sm:flex-row gap-7 ">
          <div className="w-full justify-center items-center ">
            <h3 className="text-7xl pb-5">
              Every order fulfilled,{" "}
              <span className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-[#bc8ef1] via-[#442463] to-[#cc9cfc]">
                on time .
              </span>{" "}
              {/* <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] via-[#442463] to-[#cc9cfc] rounded-full absolute z-0 top-[160%] sm:top-[10%] sm:left-[5%] translate-x-[3%] translate-y-[1%] scale-95 ease-in duration-300 md:top-[-10%] md:left-[1%] xl:top-[10%] xl:eft-[90%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[60px]" /> */}
              {/* <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] via-[#442463] to-[#cc9cfc] rounded-full absolute z-0 top-[160%] sm:top-[10%] sm:left-[5%] translate-x-[3%] translate-y-[1%] scale-95 ease-in duration-300 md:top-[-10%] md:left-[1%] xl:top-[10%] xl:eft-[90%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[60px]" /> */}
            </h3>
            <p className="text-md">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button
              className="bg-purple-300 bg-gradient-to-t  from-[#f5bbaa]   p-4 my-3 rounded-xl"
              type="button">
              View More
            </button>
          </div>
          <div className="w-full flex justify-center  ">
            <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] to-[#f5bbaa] absolute rounded-full top-[10%] eft-[10%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300" />
            <img src={Img} alt="" className="w-fit relative z-10" />
          </div>
        </div>
      </section>

      <AboutPage />
      {/* review page */}
      <ReviewPage />
      {/* target page */}
      <ProblemPage />

      <TargetPage tabs={tabs} />
      <Cta />
    </div>
  );
}

export default HomePage;
