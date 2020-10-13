import React ,{useState}from 'react'
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function Photo() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="container" style={{paddingTop:"100px"}}>
            <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
            
        </div>
    )
}

export default Photo
