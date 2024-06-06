import React, {useState} from "react";
export const usePagination = (total: number | undefined, pages: number) =>  {
    const [page, setPage] = useState(1);
    const arrPages: number [] = [];
    if(total) {
      for (let i = 0; i < (Math.ceil(total / pages)); i++) {
        arrPages.push(i + 1);
    }
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
    return {arrPages, page, handleNextPage, handlePageClick, handlePrevPage}
}