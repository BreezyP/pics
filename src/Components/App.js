import React from 'react';
import axios from 'axios'
import SearchBar from "./SearchBar";

class App extends React.Component {

    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID e75595035ef9a6b81dfeeebf25f4f7e9279c693cdb77280c1d9a211ee70643c7'
            }
        });

        console.log(response.data.results);

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center mt-3">
                    <div className="col-3">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;