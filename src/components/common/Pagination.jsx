const Pagination = (props) => {
    const {total, limit, currentPage} = props;
    const pages = Math.ceil(total/limit);
    return (
           <div className="pagination-section">
            
            <button className="arrow-btn">&lt;</button>

             {Array.from({ length: pages }, (_, index) => (
                <button key={index + 1} className={currentPage == index+1 ? "active" : ""}>
                    {index + 1}
                </button>
            ))}

             <button className="arrow-btn">&gt;</button>
           </div>
    )
}
export  default Pagination;