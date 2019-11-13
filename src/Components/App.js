import React from 'react';
import SearchBar from "./SearchBar";
import CardDetail from "./CardDetail";
import unsplash from "../api/unsplash";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { images: [] };
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({images: response.data.results});
        console.log(this.state.images);

    };

    renderContent(){

        let thing = [];

        for(let i = 0; i < this.state.images.length; i++){
            thing.push(<CardDetail key={this.state.images[i].id} img={this.state.images[i].urls.small}/>);
            console.log(this.state.images[i].urls.raw);

        }


        //                            {this.renderContent()}
        return thing;

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center my-3">
                    <div className="col-3">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                            {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;