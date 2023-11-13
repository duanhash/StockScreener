import { useSelector } from "react-redux";

const Company = () => {
  const { logo, financialData, keyStatisticsData } = useSelector((state) => state.search);

  const fields = [
    {id: "currentPrice", name: "Price", data: financialData.currentPrice.fmt},
    {id: "totalCash", name: "Total Cash", data: financialData.totalCash.fmt},
    {id: "ebitda", name: "EBITDA", data: financialData.ebitda.fmt},
    {id: "totalDebt", name: "Total Debt", data: financialData.totalDebt.fmt},
    {id: "grossProfits", name: "Gross Profits", data: financialData.grossProfits.fmt},
    {id: "enterpriseValue", name: "Enterprise Value", data: keyStatisticsData.enterpriseValue.fmt},
    {id: "sharesOutstanding", name: "Shares Outstanding", data: keyStatisticsData.sharesOutstanding.fmt},
    {id: "sharesShort", name: "Shares Short", data: keyStatisticsData.sharesShort.fmt},
    {id: "bookValue", name: "Book Value (Per Share)", data: keyStatisticsData.bookValue.fmt},
    {id: "trailingEps", name: "Trailing EPS", data: keyStatisticsData.trailingEps.fmt},
    {id: "forwardEps", name: "Forward EPS", data: keyStatisticsData.forwardEps.fmt}
  ]

  return (
    <div className="relative flex flex-col justify-center h-96">
      <img
        src={logo}
        alt="Company Logo"
        className="rounded-2xl text-white max-h-full max-w-full"
      />
      <div className="stats stats-vertical shadow bg-neutral overflow-y-scroll">
        {fields.map(field => ( (field.data !== undefined) &&
          <div className="stat" key={field.id}>
            <div className="stat-title text-white">{field.name}</div>
            <div className="stat-value text-white">{field.data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Company;