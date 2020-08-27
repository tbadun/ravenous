import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <ul>{this.props.businesses.map(business => {return <Business business={business}/>;})}</ul>
            </div>
        )
    }
}

export default BusinessList;