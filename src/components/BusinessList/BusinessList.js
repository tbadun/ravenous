import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const businesses = [<Business />,<Business />,<Business />,<Business />].map(item => <li>{item}</li>);

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <ul>{businesses}</ul>
            </div>
        )
    }
}

export default BusinessList;