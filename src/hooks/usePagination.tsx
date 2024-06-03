import React, {useState} from "react";
export const usePagination = (total: number) =>  {
    const [page, setPage] = useState(1);
    const arrPages: number [] = [];
    const pages = 5;
    for (let i = 0; i < (Math.ceil(total / pages)); i++) {
        arrPages.push(i + 1);
    }
    const handlePageClick = (page: number) => {
      setPage(page)
    }
    const handleNextPage = () => {
      if (page < arrPages.length) {
          setPage(page + 1)
      }
    }
    const handlePrevPage = () => {
      if (page > 1) {
          setPage(page - 1)
      }
    }
    return {arrPages, pages, page, handleNextPage, handlePageClick, handlePrevPage}
}