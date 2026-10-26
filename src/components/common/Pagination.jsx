const Pagination = (props) => {
    const {total, limit, currentPage, setCurrentPage, setSkip} = props;
    const pages = Math.ceil(total/limit);

    const handlePageClick = (pageNo) => {
        const skip = limit*(pageNo-1);
        setCurrentPage(pageNo);
        setSkip(skip);
    }

    const handleAction = (action) => {
      if(action == "increase") {
         currentPage == pages ? handlePageClick(1) : handlePageClick(currentPage+1);
      } else {
        currentPage == 1 ? handlePageClick(pages) : handlePageClick(currentPage-1);
      }
    }


    return (
           <div className="pagination-section">
            
            <button className="arrow-btn" onClick={() => handleAction("decrease")}>&lt;</button>

             {Array.from({ length: pages }, (_, index) => (
                <button onClick={() => handlePageClick(index+1)} key={index + 1} className={currentPage == index+1 ? "active" : ""}>
                    {index + 1}
                </button>
            ))}

             <button className="arrow-btn" onClick={() => handleAction("increase")}>&gt;</button>
           </div>
    )
}
export  default Pagination;