import './Summary.scss';
import Button from '../../../form/Button';
import SummaryItem from './SummaryItem/SummaryItem';
import SummaryTotalPrice from './SummaryTotalPrice/SummaryTotalPrice';

function Summary() {
    return (
        <div className="checkout__summary">
            <h6 className="heading__six">summary</h6>
            <SummaryItem />
            <SummaryItem />
            <SummaryTotalPrice type={'total'} />
            <SummaryTotalPrice type={'shipping'} />
            <SummaryTotalPrice type={'vat'} />
            <SummaryTotalPrice type={'grand-total'} />
            <Button type={'one'} title='continue & pay' />
        </div>
    )
}

export default Summary;