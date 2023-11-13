import { useState, memo, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getStockData, clearData } from "../features/search/searchSlice";
import { setStockRoute } from "../features/home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import us_ticker_symbols from "../us_ticker_symbols";

const SearchResults = ({
  input,
  setInput,
  setAlert,
  setSearched,
  filteredResults,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-base-100 flex flex-col shadow-xl rounded-xl max-h-[300px] overflow-y-scroll absolute z-20">
      {input &&
        filteredResults.map((stock, id) => (
          <Link to={`Stocks/${stock}`} key={id}>
            <div
              className="py-3 px-5 text-white hover:bg-secondary"
              onClick={() => {
                setInput(stock);
                setAlert(false);
                setSearched(true);
                dispatch(getStockData(stock));
                dispatch(setStockRoute(stock));
              }}
            >
              {stock}
            </div>
          </Link>
        ))}
    </div>
  );
};

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const [searched, setSearched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (us_ticker_symbols.includes(input)) {
      setSearched(true);
      dispatch(clearData());
      dispatch(getStockData(input));
      dispatch(setStockRoute(input));
      navigate(`Stocks/${input}`);
    } else {
      setAlert(true);
    }
  };

  const filteredResults = useMemo(() => {
    return us_ticker_symbols.filter((ticker_symbol) =>
      ticker_symbol.startsWith(input)
    );
  }, [input]);

  const searchItems = (e) => {
    setInput(e.target.value.toUpperCase());
    setAlert(false);
    setSearched(false);
  };

  return (
    <div className="relative w-full mt-4 md:mt-0 md:w-48">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="U.S. Stocks Only"
            value={input}
            className="w-full py-3 pl-12 pr-3 text-white border-white border-2 rounded-md outline-none bg-base-100 focus:border-secondary"
            onChange={searchItems}
          />
        </div>
      </form>
      {alert && (
        <div className="absolute w-full z-10">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Invalid Ticker Symbol</span>
          </div>
        </div>
      )}
      {searched || (
        <SearchResults
          input={input}
          setInput={setInput}
          setAlert={setAlert}
          setSearched={setSearched}
          filteredResults={filteredResults}
        />
      )}
    </div>
  );
};

export default memo(SearchBar);
