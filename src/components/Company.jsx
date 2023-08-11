import { useSelector } from "react-redux";

const Company = () => {
  const { logo, companyData } = useSelector((state) => state.search);

  return (
    <div className="relative flex flex-col justify-center h-96">
      <img
        src={logo}
        alt="Company Logo"
        className="rounded-2xl text-almond max-h-full max-w-full"
      />
      <div className="stats stats-vertical shadow bg-walnutBrown overflow-y-scroll">
        <div className="stat">
          <div className="stat-title text-almond">Price</div>
          <div className="stat-value text-almond">
            {companyData.financialData.currentPrice.fmt}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-almond">52 Week Change</div>
          <div className="stat-value text-almond">
            {companyData.defaultKeyStatistics["52WeekChange"].fmt}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-almond">Shares Outstanding</div>
          <div className="stat-value text-almond">
            {companyData.defaultKeyStatistics.sharesOutstanding.fmt}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-almond">Short Interest</div>
          <div className="stat-value text-almond">
            {companyData.defaultKeyStatistics.sharesShort.fmt}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-almond">PB Ratio</div>
          <div className="stat-value text-almond">
            {companyData.defaultKeyStatistics.priceToBook.fmt}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title text-almond">Revenue Growth</div>
          <div className="stat-value text-almond">
            {companyData.financialData.revenueGrowth.fmt}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
