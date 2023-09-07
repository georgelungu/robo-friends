import React from "react";

class SearchBox extends React.Component
{
    render()
    {
        const { searchChange } = this.props; // Destructure the searchChange prop.
        return (
            <div className="pa2">
                <input
                    className="pa3 ba b--green bg-lightest-blue" 
                    type="search" 
                    placeholder="search robots"
                    onChange={searchChange}
                />
            </div>
        );
    }
}

// You don't need to call the function with double parantheses.

// Everytime the 'onChange event' is triggered, call the 'searchChange' Prop.
// The 'searchChange' Prop stores the 'onSearchChange Function' that is defined in the 'App.js'.

// 2 VERSIONS

// const SearchBox = ({ searchChange }) =>
// {
//     return (
//         <div className="pa2">
//                 <input
//                     className="pa3 ba b--green bg-lightest-blue" 
//                     type="search" 
//                     placeholder="search robots"
//                     onChange = {searchChange}
//                 />
                
//             </div>
//     )
// }

export default SearchBox;