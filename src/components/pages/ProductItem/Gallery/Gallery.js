import './Gallery.scss';


function Gallery({ gallery }) {

    let first = gallery.first.desktop.substring(1);
    let second = gallery.second.desktop.substring(1);
    let third = gallery.third.desktop.substring(1);

    return (
        <div className="product__gallery">
            <div className="product__gallery_small">
                <img src={first} alt="" />
                <img src={second} alt="" />
            </div>
            <div className="product__gallery_big">
                <img src={third} alt="" />
            </div>
        </div>
    )
}

export default Gallery;