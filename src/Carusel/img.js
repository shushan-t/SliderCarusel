

const Images = ({ srcArr, width, margin }) => {
    const style = {
        width : `${width}%`,
        marginLeft: `-${margin}vw`,
    }

    return ( 
        <div className = "images-wrapper"
        style = {style}>
           { srcArr.map((src, index) => 
               <img 
               src = {src}
                alt = "img" 
                className = "carousel-img"
                key = { index }
                />
           )}
        </div>
     );
}
  export default Images;
