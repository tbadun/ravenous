import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <ul>{this.props.businesses.map(b => {return <Business business={b}/>;})}</ul>
            </div>
        )
    }
}

export default BusinessList;