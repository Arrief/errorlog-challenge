import { useEffect, useState } from "react";
import MyContext from "./context/ContextProvider";
import FilterDrawerRight from "./components/FilterSelection";
import SearchBar from "./components/SearchBar";
import PaginatedTable from "./components/Table";
import { IQueries, TResults } from "./types/QueryTypes";
import { IContext } from "./types/ContextTypes";

const App = () => {
  // Template for no filters selected
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

  // Function to update single user query values dynamically while preserving the other key-value pairs as they are
  const handleQueryInput = (category: string, value: string | number) => {
    setUserQueries({
      ...userQueries,
      [category]: value,
    });
  };

  // State values & updaters that will be accessible through context
  const contextProviderValues: IContext = {
    noFilterQuery,
    filter,
    setFilter,
    userQueries,
    setUserQueries,
    handleQueryInput,
  };

  // Error logs received from the server
  const [logs, setLogs] = useState<TResults | []>([]);

  const fetchData = async function (url: string) {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    const data = await res.json();
    setLogs(data);
  };

  // Default is all values set to -1 = no filter applied = all data
  const getDataURL = `https://data.autohaus-digital.de/log/v1/search/${filter.idCustomer}/${filter.idUser}/-1/-1/-1/${filter.level}/${filter.source}/${filter.dateFrom}/${filter.dateTo}/${filter.limit}/-1`;

  // Request error logs from server when page mounts first & on every subsequent filter request
  useEffect(() => {
    fetchData(getDataURL);
    // Reset all user queries after a search was submitted, so next time user submits empty form, all data will be displayed again.
    setUserQueries(noFilterQuery);
  }, [filter]);

  return (
    <>
      <h1>Error Log</h1>
      <MyContext.Provider value={contextProviderValues}>
        <section className="search-section">
          <SearchBar />
          <FilterDrawerRight />
        </section>
        <section className="table-section">
          <PaginatedTable logs={logs} />
        </section>
      </MyContext.Provider>
    </>
  );
};

export default App;
