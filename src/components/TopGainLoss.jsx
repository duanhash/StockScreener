import { useSelector, useDispatch } from "react-redux";
import { setStockRoute } from "../features/home/homeSlice";
import { getStockData } from "../features/search/searchSlice";

import { Link } from "react-router-dom";

const Table = ({ data, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid flex-shrink h-full w-full px-8 card bg-neutral rounded-box place-items-center overflow-hidden">
      <div className="overflow-x-auto w-full">
        <h1 className="flex justify-center py-4 text-3xl text-white">
          {title}
        </h1>
        <table className="table table-xs sm:table-xs md:table-lg lg:table-sm">
          <thead>
            <tr>
              <th />
              <th /> 
              <th className="text-white">Price</th>
              <th className="text-white">Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.body.map((stock, id) => (
              <tr className="hover:bg-secondary" key={id}>
                <th className="text-white">{id + 1}</th>
                <td
                  className="text-white"
                  onClick={() => {
                    dispatch(getStockData(stock.symbol));
                    dispatch(setStockRoute(stock.symbol));
                  }}
                >
                  <Link to={`Stocks/${stock.symbol}`} key={id}>
                    {stock.symbol}
                  </Link>{" "}
                </td>
                <td className="text-white">
                  {"$" + stock.regularMarketPrice + " "}
                  <div
                    className={`inline-flex gap-2 self-end rounded px-1 py-2 ${
                      parseFloat(stock.regularMarketChange) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    } `}
                  >
                    {parseFloat(stock.regularMarketChange) < 0 ? '↘︎' : '↗︎'}
                    <span className="text-sm font-medium pt-[1px]">{`${"$" + parseFloat(
                      stock.regularMarketChange
                    ).toFixed(2)} (${parseFloat(
                      stock.regularMarketChangePercent
                    ).toFixed(2) + "%"})`}</span>
                  </div>
                </td>
                <td className="text-white">{stock.regularMarketVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TopGainLoss = () => {
  const { gainData, loseData, activeData } = useSelector((state) => state.home);

  return (
    <div className="flex flex-col w-full 2xl:flex-row gap-x-8 px-12 justify-around">
      {gainData === null || (
        <Table data={gainData} title={"Top Gainers"} />
      )}
      <div className="divider xs:divider-horizontal" />
      {loseData === null || (
        <Table data={loseData} title={"Top Losers"} />
      )}
      <div className="divider xs:divider-horizontal" />
      {activeData === null || (
        <Table
          data={activeData}
          title={"Most Active"}
        />
      )}
    </div>
  );
};

export default TopGainLoss;
