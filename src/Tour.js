import React, {useState} from "react";

const Tour =({id, name, image, info, price, removeTours})=>{
  const [readMore, setReadMore] = useState(false)
  return<>
    <div className="main-div"> 
      <img className="main-img" 
      src={image}
      alt={name} />

      <div className="main_contents">
      <div className="h2-flex">
        <h2 className="tour_title">{name}</h2>
        <h2 className="price">${price}</h2>
      </div>
      <p className="info">{readMore?info : `${info.substring(0,200)}......`}</p>

      <button className="more" onClick={()=>setReadMore(!readMore)}>Read more</button>
      <button className="remove" onClick={()=> removeTours(id)}>Not Interested</button>
      </div>
      
    </div>
  </>
}
export default Tour;