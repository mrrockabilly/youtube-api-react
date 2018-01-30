import React, {Component} from 'react';
// Pull off Compontent as a variable called component.

//class SearchBar extends React.Component{
class SearchBar extends Component{

    constructor(props){

        super(props); // Calling parent method with super.
        this.state = {term: ''}

    }

    render(){
        return (
            <div>
              <input value={this.state.term} 
              onChange={(event) => this.setState({term: event.target.value})} />
            </div>
        );
    }

    // render(){
    //     return <input onChange={this.onInputChange} />
    // }

    // onInputChange(event){
    //     console.log(event.target.value)
    // }

}

export default SearchBar;