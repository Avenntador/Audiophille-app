import './Products.scss';
import Button from '../../../form/Button';

let PatterCircles = '/assets/home/desktop/pattern-circles.svg';
let zx9 = '/assets/home/desktop/image-speaker-zx9.png';
let yx1 = '/assets/home/desktop/image-earphones-yx1.jpg';

function Products() {
    return (
        <div className="products">
            <div className="products__item zx9">
                <img className='zx9__img' src={zx9} alt="zx9 image" />
                <img className='pattern' src={PatterCircles} alt="pattern circles" />
                <div className="product__desc">
                    <h1 className="heading__one">ZX9 <br /> SPEAKER</h1>
                    <p className="paragraph">Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable <br /> sound.</p>
                    <Button type={'black'} slug={'zx9-speaker'} to={'/speakers'}/>
                </div>
            </div>
            <div className="products__item zx7">
                <div className="product__desc">
                    <h4 className="heading__four">ZX7 SPEAKER</h4>
                    <Button type={'transparent'} slug={'zx7-speaker'} to={'/speakers'}/>
                </div>
            </div>
            <div className="products__item yx1">
                <div className="yx1__img">
                    <img src={yx1} alt="yx1 image" />
                </div>
                <div className="product__desc">
                    <div>
                        <h4 className="heading__four">YX1 EARPHONES</h4>
                        <Button type={'transparent'} slug={'yx1-earphones'} to={'/earphones'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;