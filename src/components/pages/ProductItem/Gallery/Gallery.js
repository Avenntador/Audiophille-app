import './Gallery.scss';

function Gallery() {
    return (
        <div className="product__gallery">
            <div className="product__gallery_small">
                <img src={GalleryImg1} alt="" />
                <img src={GalleryImg2} alt="" />
            </div>
            <div className="product__gallery_big">
                <img src={GalleryImg3} alt="" />
            </div>
        </div>
    )
}

export default Gallery;