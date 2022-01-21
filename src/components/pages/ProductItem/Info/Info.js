import './Info.scss';


function Info({features, equip}) {
    return (
        <div className="product__info">
            <div className="product__features">
                <h3 className="heading__three">features</h3>
                <p className="paragraph">{features}</p>
            </div>
            <div className="product__equip">
                <h3 className="heading__three">in the box</h3>
                {equip.map(item => {
                   return <p key={Date.now() + Math.random() * 0.5} className="paragraph"><span>{item.quantity}x</span>{item.item}</p>
                })}
            </div>
        </div>
    )
}

export default Info;