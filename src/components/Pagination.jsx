import ReactPaginate from "react-paginate";
import "./style.css";

const Pagination = ({ pageCount, onPageChange, startItem, endItem, totalItem }) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row justify-between max-w-6xl items-center w-full mx-auto px-8 pb-8">
      <div >
        Showing {startItem} - {endItem} from {totalItem}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        previousLabel="Prev"
        nextLabel="Next"
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="active"
        breakClassName="break"
        disabledClassName="disabled"
      />
    </div>
  );
};

export default Pagination;
