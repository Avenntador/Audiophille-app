import './Gallery.scss';


function Gallery({ gallery }) {
    return (
        <div className="product__gallery">
            <div className="product__gallery_small">
                <img src={gallery.first.desktop} alt="" />
                <img src={gallery.second.desktop} alt="" />
            </div>
            <div className="product__gallery_big">
                <img src={gallery.third.desktop} alt="" />
            </div>
        </div>
    )
}

export default Gallery;