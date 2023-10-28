import React from 'react'
import './index.css'
const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =><div key={image.id}>
        <div className="col-md-4" id="zoom">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg` } 
       height="200" width="300" alt={image.title} />
        </div>
        </div>)}
        </div>
    )
}

export default Gallery
