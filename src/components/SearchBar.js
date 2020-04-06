import React from 'react';

class SearchBar extends React.Component {
    state = {term: 'Search here...'};

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={e => this.onFormSubmit }>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onClick={e => this.setState({term: ''})}
                            onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;