import { Component } from "react";
import './search-box.style.css'

const SearchBox = ({ className, placeholder, onChangeHadler }) =>
{

    return <input className={`search-box  ${className}`} type='search' placeholder={placeholder} onChange={onChangeHadler} />

}

// class SearchBox1 extends Component
// {
//     render()
//     {

//         return <input className={`search-box  ${this.props.className}`} type='search' placeholder={this.props.placeholder} onChange={this.props.onChangeHadler} />

//     }

// }

export default SearchBox;