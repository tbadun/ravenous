import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Review Count": 'review_count'
        };
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        var sortByOptionValue = Object.keys(this.sortByOptions)
                                        .map(sortByOption => {
                                            return <li key={this.sortByOptions[sortByOption]} 
                                                        value={this.sortByOptions[sortByOption]} 
                                                        className={this.getSortByClass(this.sortByOptions[sortByOption])} 
                                                        onClick={this.handleSortByChange.bind(this,this.sortByOptions[sortByOption])}>
                                                            {sortByOption}
                                                    </li>
                                        } 
                                );
        return sortByOptionValue
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;