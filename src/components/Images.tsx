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
  console.log("📢[Images.tsx:15]: currentItems: ", currentItems);

  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
