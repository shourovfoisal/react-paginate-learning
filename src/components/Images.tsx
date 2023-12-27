import ReactPaginate from "react-paginate";
import { Image } from "../App";
import { useState } from "react";

type Props = {
  data: Image[];
};

export const Images = ({ data }: Props) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div style={{ paddingTop: "5rem" }}>
        <ReactPaginate
          // basic props
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2} // default is 2
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          // style props
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
      <div className="images">
        {currentItems?.map((item) => (
          <div key={item?.id} className="image">
            <img src={item?.url} alt={item?.title} />
          </div>
        ))}
      </div>
    </>
  );
};
