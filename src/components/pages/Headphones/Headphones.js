import './Headphones.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Footer from '../GlobalLayouts/Footer/Footer';
import About from '../GlobalLayouts/About/About';
import ItemDescription from '../GlobalLayouts/ItemDescription/ItemDescription';
import ItemDescriptionReversed from '../GlobalLayouts/ItemDescriptionReversed/ItemDescriptionReversed';

import { useState, useEffect } from 'react';


function Headphones() {

    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                const recievedHeadphones = [];
                response.forEach(item => {
                    if (item.category === 'headphones') {
                        recievedHeadphones.push(item);
                    }

                })
                setHeadphones(recievedHeadphones);
            });
    }, [])

    return (
        <>
            <header className='headphones__header'>
                <div className="header__content">
                    <Navbar />
                    <h2 className="heading__two">headphones</h2>
                </div>
            </header>
            <div className="headphones__main">
                {headphones.map((item, idx) => {
                    if (idx === 0) {
                        return <ItemDescription
                            key={item.id}
                            image={item.categoryImage.desktop}
                            title={item.name}
                            desc={item.description}
                            render={() => <p className="overline">new product</p>}
                        />
                    }
                    if (idx % 2 === 0) {
                        return <ItemDescription
                            key={item.id}
                            image={item.categoryImage.desktop}
                            title={item.name}
                            desc={item.description}
                        />
                    } else {
                        return <ItemDescriptionReversed
                            key={item.id}
                            image={item.categoryImage.desktop}
                            title={item.name}
                            desc={item.description}
                        />
                    }
                })}
                <Thumbnail />
                <About />
            </div>
            <Footer />
        </>
    )
}

export default Headphones;