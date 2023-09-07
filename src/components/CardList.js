import React from "react";
import Card from "./Card"


class CardList extends React.Component 
{
    render()
    {
        const { robots } = this.props; // Receive robots as a prop

        console.log(robots)
        let cardArray = robots.map((user, i) =>
        {
            // console.log(robots[i])
            return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
            );
        })
        // console.log(robots[0].id)
        return (
            <div>
                {cardArray}
                {/* {console.log(cardArray)} */}
            </div>
        )
    }
}

export default CardList

// Every time you do a loop, you have to assign to each element an unique 'key' property!!!
// the 'key' property should not be changed if the item from array have changed.

// The CardList component passes the props to the Card component. 
// Then they are accessed in the Card component through 'this.props.value.'