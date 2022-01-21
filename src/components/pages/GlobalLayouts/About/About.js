import './About.scss';

function About() {

    let aboutImg = '/assets/shared/desktop/image-best-gear.jpg';

    return(
        <div className='about'>
            <div className="about__desc">
                <h2 className="heading__two">Bringing you the <br /> <span>best</span> audio gear</h2>
                <p className="paragraph">Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</p>
            </div>
            <div className="about__img">
                <img src={aboutImg} alt="best-gear image" />
            </div>
        </div>
    )
}

export default About;