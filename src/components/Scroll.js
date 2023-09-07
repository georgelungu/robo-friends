// We want to use 'CardList' as a children for the 'Scroll' component.
import React from "react";

class Scroll extends React.Component 
{
    render()
    {
        console.log(this.props);
        return (
            <div style={{ overflowY: "scroll", border: "1.5px solid black", height: "800px" }}>
                {this.props.children}
            </div>
        )
    }
}

export default Scroll