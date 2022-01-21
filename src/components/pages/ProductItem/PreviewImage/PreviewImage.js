import './PreviewImage.scss';


function PreviewImage({ image }) {

    let productImage = image.substring(1);

    return (
        <div className="product__img">
            <img src={productImage} alt="prdouct-item" />
        </div>
    )
}

export default PreviewImage;
