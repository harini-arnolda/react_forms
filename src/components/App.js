import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async term => {

        console.log("inside on searchsubmit");

        /** To make a get request via axios we need to install axios then need 
         * to call the axios.get fuction, It tekes two parameters the first one is the url 
         * the secodn argument is the pare parameters to configure the request*/
         const response = await unsplash.get('search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App;