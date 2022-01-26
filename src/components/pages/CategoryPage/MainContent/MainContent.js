import './MainContent.scss';

import ItemDescription from './ItemDescription/ItemDescription';
import ItemDescriptionReversed from './ItemDescriptionReversed/ItemDescriptionReversed';

function MainContent({ category }) {
    return (
        <>
            {category.map(item => {
                if (item.new) {
                    return <ItemDescription
                        key={item.id}
                        image={item.categoryImage.desktop}
                        title={item.name}
                        desc={item.description}
                        slug={item.slug}
                        render={() => <p className="overline">new product</p>}
                    />
                }
            })}
            {category.map((item, idx) => {
                if (!item.new) {
                    if (idx % 2 === 0) {
                        return <ItemDescriptionReversed
                            key={item.id}
                            image={item.categoryImage.desktop}
                            title={item.name}
                            desc={item.description}
                            slug={item.slug}
                        />
                    } else {
                        return <ItemDescription
                            key={item.id}
                            image={item.categoryImage.desktop}
                            title={item.name}
                            desc={item.description}
                            slug={item.slug}
                        />
                    }
                }
            })}
        </>
    )
}

export default MainContent;