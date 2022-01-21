import './Thumbnail.scss';
import SecondaryButton from '../../../form/SecondaryButton';


let ThumbnailHeadphoneImg = '/assets/shared/desktop/image-category-thumbnail-headphones.png';
let ThumbnailEarphoneImg = '/assets/shared/desktop/image-category-thumbnail-earphones.png';
let ThumbnailSpeakerImg = '/assets/shared/desktop/image-category-thumbnail-speakers.png';


function Thumbnail() {
    return (
        <div className='thumbnail'>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailHeadphoneImg} alt="Headphone image" />
                <h6 className="heading__six">headphones</h6>
                <SecondaryButton to={'headphones'}/>
            </div>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailSpeakerImg} alt="Speaker image" />
                <h6 className="heading__six">speakers</h6>
                <SecondaryButton to={'speakers'}/>
            </div>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailEarphoneImg} alt="Earphone image" />
                <h6 className="heading__six">earphones</h6>
                <SecondaryButton to={'earphones'}/>
            </div>
        </div>
    )
}

export default Thumbnail;