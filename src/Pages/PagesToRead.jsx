import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/adtoDb";
import Book from "./Book/Book";

const PagesToRead = () => {
  const [myReadList, setMyREadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedData = storedBookData.map((id) => parseInt(id));
    console.log(convertedData);
    const myReadlist = data.filter((book) =>
      convertedData.includes(book.bookId)
    );
    setMyREadList(myReadlist);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedByPage = [...myReadList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setMyREadList(sortedByPage);
    }
    if (type === "Ratings") {
      const sortedByRatings = [...myReadList].sort(
        (a, b) => a.rating - b.rating
      );
      setMyREadList(sortedByRatings);
    }
  };

  return (
    <div >
      <div className="dropdown dropdown-start px-5">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By : {sort ? sort : ""} ⬇️
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs className="px-5 py-3">
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="grid px-5 sm:grid-cols-3 gap-5 py-6">
            {myReadList.map((id) => (
              <Book book={id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
         {
            <div className="grid px-5 sm:grid-cols-3 gap-5 py-6">
            {myReadList.map((id) => (
              <Book book={id} />
            ))}
          </div>
         }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PagesToRead;
