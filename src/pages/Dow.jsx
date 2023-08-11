import Airtable from "airtable";
import { useState, useEffect } from "react";
import { Spinner } from "../components";

const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_PERSONAL_ACCESS_TOKEN,
}).base("appJOKxKhNDGssp7W");

const Dow = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    base("Dow")
      .select({ view: "Grid view" })
      .eachPage((records) => {
        if (records !== null) {
          setIsLoading(false);
        }
        console.log(records);
        setData(records);
      });
  }, []);

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <section className="z-10 mt-24 pb-24 relative">
      {data.map((record, id) => (
        <div
          className="collapse collapse-arrow bg-walnutBrown text-almond w-[60%] mx-auto my-10"
          key={id}
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {`${record.fields.Company} (${record.fields.Ticker}) | ${record.fields.Industry}`}
          </div>
          <div className="collapse-content">
            <img
              src={record.fields.Image[0].url}
              alt="Banner Image"
              className="object-cover overflow-hidden mx-auto pb-4"
            />
            <p className="text-2xl text-center pb-4">{`Est. ${record.fields.Founded}`}</p>
            <p className="text-lg">{record.fields.About}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dow;
