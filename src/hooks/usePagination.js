import { useState } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, data.length);

  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return {
    currentPage,
    pageCount,
    handlePageChange,
    startItem,
    endItem,
    paginatedData,
  };
}

export default usePagination;
