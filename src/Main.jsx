import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Card from "./Card";
import Item from "./Item";
import UseApi from "./UseApi";

const Main = () => {
  const {
    Error,
    isLoading,
    Images,
    ImageLoading,
    nameList,
    handleClick,
    selectedPerson,
  } = UseApi();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(nameList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(nameList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, nameList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % nameList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <div className="contents">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            currentItems &&
            currentItems.map((item, index) => (
              <Card key={index} data={item} index={index} />
            ))
          )}
        </div>
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageLinkClassName="page-num"
        previousClassName="page-item"
        previousLinkClassName="page-num"
        nextClassName="page-num"
        nextLinkClassName="page-num"
        breakLabel="..."
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        activeLinkClassName="active"
      />
    </>
  );
};

export default Main;
