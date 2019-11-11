import React from 'react';
import axios from 'axios'
import SearchBar from "./SearchBar";
import CardDetail from "./CardDetail";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { images: [] };
    }

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID e75595035ef9a6b81dfeeebf25f4f7e9279c693cdb77280c1d9a211ee70643c7'
            }
        });

        this.setState({images: response.data.results});
        console.log(this.state.images);

    };

    renderContent(){

        let thing = [];

        for(let i = 0; i < this.state.images.length; i++){
            thing.push(<CardDetail img={this.state.images[i].links.html}/>);
            console.log(this.state.images[i].links.html);

        }

        return thing;

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center mt-3">
                    <div className="col-3">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                </div>
                <div className="row">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default App;