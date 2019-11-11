import React from 'react';
import { InputGroup, Input } from 'reactstrap';


class SearchBar extends React.Component{
    state = {term: ''};


    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };


    render(){
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <InputGroup>
                    <Input
                        placeholder='search...'
                        onChange={(e) => this.setState({term: e.target.value})}
                        value={this.state.term}
                    />
                </InputGroup>
            </form>
        </div>
        )
    }

}

export default SearchBar;