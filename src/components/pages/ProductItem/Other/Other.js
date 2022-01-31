import './Other.scss';
import Button from '../../../form/Button';


function Other({ others }) {

    return (
        <div className="product__other">
            <h3 className="heading__three">you may also like</h3>
            <div className="product__other_items">
                {others.map(item => {
                    let category = '';
                    if (item.slug.includes('headphone')) {
                        category = 'headphones';
                    } else if (item.slug.includes('earphone')) {
                        category = 'earphones';
                    } else if (item.slug.includes('speaker')) {
                        category = 'speakers';
                    }

                    return <div className="item" key={Date.now() + Math.random() * 0.5}>
                        <img src={item.image.desktop} alt="others" />
                        <h5 className="heading__five">{item.name}</h5>
                        <Button type={'one'} slug={item.slug} to={`/${category}`}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Other;