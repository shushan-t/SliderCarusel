import {useState, Fragment} from 'react';  
import Images from './img';
import Pagination from './pagination';
import './style.css';


const Carousel = () => {
    const [page, setPage] = useState("0");
    const setToView = (value) => {
        setPage(value)
    }
    const srcArr = [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2029683/pexels-photo-2029683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ];
    const wrapper__width = srcArr.length * 100;
    const margin = (page * 80);

    return (
        
      <div className = "carousel">
      <h1>INTERIOR <br/> DESIGN</h1> 
      <Images
      srcArr = { srcArr }
      width = { wrapper__width }
      margin = { margin } />
      <Pagination 
      setToView = { setToView }
      srcArr = { srcArr } 
      page = { page }
      />
     
      </div>
     
    )
  };
  export default Carousel;



