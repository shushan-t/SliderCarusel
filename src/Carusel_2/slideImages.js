import {useState} from 'react';



const SlideImages = ({slideImg}) => {
    const [currentImg, setCurrentImg] = useState(0)
   const nextSlideHandler =()=>{
     setCurrentImg(currentImg === slideImg.length -1  ? 0 : currentImg + 1)
   }
   const prevSlideHandler = () =>{
    setCurrentImg(currentImg === 0 ? slideImg.length -1 : currentImg - 1)
   }
   console.log(currentImg)
    return ( 
      <section className="slide-container">
         <div className='arrow right' onClick = {nextSlideHandler}> &#62;</div>
         <div className=' arrow left' onClick ={prevSlideHandler}> &lt;</div>
          {slideImg.map ((image, index)=>(
          <div className= {currentImg === index ? 'slide active' : "active"} key={image.id}>
             {index === currentImg && (
               <div >
                <img src={image.image} alt='travel image' className='image' />
                <h2 className="img-title">{image.title}</h2>
                </div>
              )}
           
          </div>
         
        )
          
        )}
      </section>
     );
  }
   
  
 

  export default SlideImages;