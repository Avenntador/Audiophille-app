import './Thumbnail.scss';
import ThumbnailHeadphoneImg from '../../../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import ThumbnailEarphoneImg from '../../../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import ThumbnailSpeakerImg from '../../../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import SecondaryButton from '../../../form/SecondaryButton';

function Thumbnail() {
    return (
        <div className='thumbnail'>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailHeadphoneImg} alt="Headphone image" />
                <h6 className="heading__six">headphones</h6>
                <SecondaryButton />
            </div>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailSpeakerImg} alt="Speaker image" />
                <h6 className="heading__six">speakers</h6>
                <SecondaryButton />
            </div>
            <div className="thumbnail__item">
                <img className='thumbnail__img' src={ThumbnailEarphoneImg} alt="Earphone image" />
                <h6 className="heading__six">earphones</h6>
                <SecondaryButton />
            </div>
        </div>
    )
}

export default Thumbnail;