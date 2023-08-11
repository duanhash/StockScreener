import { Chart, Company, Spinner, News } from "../components";
import { useSelector } from "react-redux";

const Stocks = () => {
  const { isLoading, companyNews, companyData } = useSelector(
    (state) => state.search
  );

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <>
      <section className="mt-24 z-10 relative">
        <div className="w-full lg:w-[75%] mx-auto">
          <Chart />
        </div>
        <div className="flex justify-center px-6 relative mt-24 ">
          <div className="mr-8 lg:mr-16 h-96">
            <Company />
          </div>
          <div className="h-96 card min-w-[60%] w-[60%] bg-walnutBrown rounded-box flex text-center overflow-y-scroll">
            <h2 className="text-lg pt-6 text-almond">Description:</h2>
            {companyData === null ? null : (
              <p className="text-almond p-6">
                {companyData.assetProfile.longBusinessSummary}
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="mt-24 z-10 relative">
        <News newsData={companyNews} />
      </section>
    </>
  );
};

export default Stocks;
