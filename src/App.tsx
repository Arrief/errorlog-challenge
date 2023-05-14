import { useEffect, useState } from "react";
import FilterDrawerRight from "./components/FilterSelection";
import SearchBar from "./components/SearchBar";
import PaginatedTable from "./components/Table";
import { PacmanLoader } from "react-spinners";
import { IQueries, TResults } from "./types/QueryTypes";

const App = () => {
  // template for no filters selected
  const noFilterQuery: IQueries = {
    idCustomer: "-1",
    idUser: "-1",
    level: "-1",
    source: "-1",
    dateFrom: -1,
    dateTo: -1,
    limit: "-1",
  };

  // Initially start with no filters = all data
  const [filter, setFilter] = useState(noFilterQuery);

  // To be updated with user selected filters, will become new filter-state value on form submission
  const [userQueries, setUserQueries] = useState(noFilterQuery);

  // Error logs received from the server
  const [logs, setLogs] = useState<TResults | []>([]);

  const [loading, setLoading] = useState(false);

  const fetchData = async function (url: string) {
    setLoading(true);

    const res = await fetch(url, { method: "POST" });
    const data = await res.json();
    setLogs(data);

    setLoading(false);
  };

  // const getAllDataURL =
  //   "https://data.autohaus-digital.de/log/v1/search/-1/-1/-1/-1/-1/-1/-1/-1/-1/-1/-1";

  const getDataURL = `https://data.autohaus-digital.de/log/v1/search/${filter.idCustomer}/${filter.idUser}/-1/-1/-1/${filter.level}/${filter.source}/${filter.dateFrom}/${filter.dateTo}/${filter.limit}/-1`;

  // Request error logs from server when page mounts first & on every subsequent filter request
  useEffect(() => {
    fetchData(getDataURL);
  }, [filter]);
  console.log(logs);

  const loaderStyle = {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    gap: "1rem",
    margin: "20rem auto 0 auto",
  };

  return (
    <>
      <h1>Error Log</h1>
      {
        <>
          {loading ? (
            <PacmanLoader
              color="var(--theme-color)"
              cssOverride={loaderStyle}
              size={50}
              aria-label="Loading Spinner"
            />
          ) : (
            <>
              <section className="search-section">
                <SearchBar />
                <FilterDrawerRight />
              </section>
              <section className="table-section">
                <PaginatedTable logs={logs} />
              </section>
            </>
          )}{" "}
        </>
      }
    </>
  );
};

export default App;
