import './PreviewImage.scss';

function PreviewImage({ image }) {
    return (
        <div className="product__img">
            <img src={image} alt="prdouct-item" />
        </div>
    )
}

export default PreviewImage;
