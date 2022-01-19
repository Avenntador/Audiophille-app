import './Info.scss';


function Info() {
    return (
        <div className="product__info">
            <div className="product__features">
                <h3 className="heading__three">features</h3>
                <p className="paragraph">
                    Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                    <br />
                    <br />
                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                </p>
            </div>
            <div className="product__equip">
                <h3 className="heading__three">in the box</h3>
                <p className="paragraph"><span>1x</span>Headphone Unit</p>
                <p className="paragraph"><span>2x</span>Headphone Unit</p>
                <p className="paragraph"><span>1x</span>Headphone Unit</p>
                <p className="paragraph"><span>3x</span>Headphone Unit</p>
            </div>
        </div>
    )
}

export default Info;