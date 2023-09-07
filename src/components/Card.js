import React from "react";

class Card extends React.Component 
{
    render()
    {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="John Doe Robot"></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;

// The 'props' are something that the child element 
// is requesting from the parent element.

// In this project we started from the tiniest component and a small database.

// We created first the smallest component, the Card Component, and we specified
// the props that were needed to change the Card identity.

// In the CardList Component we used the 'robots' database and the Card Component
// to iterate over the 'robots' array and assigned for each element from the array a Card Component.