import ReactPaginate from "react-paginate";
import "./style.css";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      breakLabel="..."
      previousLabel="Prev"
      nextLabel="Next"
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
      breakClassName="break"
      disabledClassName="disabled"
    />
  );
};

export default Pagination;
