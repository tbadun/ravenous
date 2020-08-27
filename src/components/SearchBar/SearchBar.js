import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    "Best Match": 'best_match',
    "Rating": 'rating',
    "Review Count": 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        var sortByOptionValue = Object.keys(sortByOptions).map(sortByOption => {return sortByOptions[sortByOption]});
        return <li key="sortByOptionValue">{sortByOptions}</li> // this was following instr but I feel like it makes more sense to have the map structure send back a list of multiple LI
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;