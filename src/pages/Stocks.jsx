import { Chart, Company, Spinner, News } from "../components";
import { useSelector } from "react-redux";

const Stocks = () => {
  const { isLoading, companyNews, profileData } = useSelector(
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
          <div className="h-96 card min-w-[60%] w-[60%] bg-neutral rounded-box flex text-center overflow-y-scroll">
            {profileData === null ? null : (
              <p className="text-white p-6">
                {profileData.longBusinessSummary}
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
