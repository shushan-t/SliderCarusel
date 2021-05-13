
   
  const Pagination = ({ setToView, page, srcArr }) => {
    const handleChange = (e) => {
        setToView(e.target.value)
    }
 
      
    return(
      <form className = "pagination">
        
       {
         srcArr.map((elem, index) => 
         <input
          onChange = {handleChange}
          key = { index }
          type = "radio" 
          name = "radio-btn"
          id = {"radio" + index}
          value = { index }
          checked = { page === `${index}` }
          />
         )
       }
       
     </form> 
    )
   
}; export default Pagination;