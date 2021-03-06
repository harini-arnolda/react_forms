import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (e) => {
        console.log("Hi ho ho")
        e.preventDefault();
        console.log("on form sumit ", this.state.term);

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit } >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;