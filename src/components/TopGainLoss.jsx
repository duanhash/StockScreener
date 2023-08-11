import { useSelector, useDispatch } from "react-redux";
import { setStockRoute } from "../features/home/homeSlice";
import { getStockData } from "../features/search/searchSlice";

import { Link } from "react-router-dom";

const Table = ({ data, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid flex-shrink h-full w-full px-8 card bg-walnutBrown rounded-box place-items-center overflow-hidden">
      <div className="overflow-x-auto w-full">
        <h1 className="flex justify-center py-4 text-3xl text-almond">
          {title}
        </h1>
        <table className="table table-xs sm:table-xs md:table-lg lg:table-sm">
          <thead>
            <tr>
              <th />
              <th />
              <th className="text-almond">Price</th>
              <th className="text-almond">Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, id) => (
              <tr className="hover:bg-khaki" key={id}>
                <th className="text-almond">{id + 1}</th>
                <td
                  className="text-almond"
                  onClick={() => {
                    dispatch(getStockData(stock.ticker));
                    dispatch(setStockRoute(stock.ticker));
                  }}
                >
                  <Link to={`Stocks/${stock.ticker}`} key={id}>
                    {stock.ticker}
                  </Link>{" "}
                </td>
                <td className="text-almond">
                  {stock.price}{" "}
                  <div
                    className={`inline-flex gap-2 self-end rounded px-1 py-2 ${
                      parseFloat(stock.change_amount) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    } `}
                  >
                    {parseFloat(stock.change_amount) < 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 -5 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 -5 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    )}
                    <span className="text-sm font-medium pt-[1px]">{`${parseFloat(
                      stock.change_amount
                    ).toFixed(2)} (${parseFloat(
                      stock.change_percentage
                    ).toFixed(2)})`}</span>
                  </div>
                </td>
                <td className="text-almond">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TopGainLoss = () => {
  const { gainData } = useSelector((state) => state.home);

  return (
    <div className="flex flex-col w-full lg:flex-row gap-x-8 px-12 justify-around">
      {gainData === null || (
        <Table data={gainData.top_gainers} title={"Top Gainers"} />
      )}
      <div className="divider xs:divider-horizontal" />
      {gainData === null || (
        <Table data={gainData.top_losers} title={"Top Losers"} />
      )}
      <div className="divider xs:divider-horizontal" />
      {gainData === null || (
        <Table
          data={gainData.most_actively_traded}
          title={"Most Actively Traded"}
        />
      )}
    </div>
  );
};

export default TopGainLoss;
