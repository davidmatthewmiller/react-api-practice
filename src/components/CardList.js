import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>{
    // I used destructuring in the parameter,
    // its just like naming parameters. 'props'
    // is just a placeholder like I could leave
    // it (props) and use props.id props.name
    // but its cleaner code to destructure
    // with = ({<parameter name>}) =>

    // return (
        // <div>
        //     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        //     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        //     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        // </div>
    // )
    // instead of above lets do a loop 
    // to cover each robot, even better
    // than forEach is to use map

    const cardArray = robots.map((user, i) => {
        return(
            <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        )
    });
    return(
        <div>
            {cardArray}
        </div>
    ) 
    // We made an array of Card.js components
    // that are filled in by index.js sending
    // a prop object of robots.js through to
    // this file
    // The cardArray that is made is styled
    // to the specifications within Card
    // because that is the component making
    // up our array
    // It must be returned between jsx tags
    // because it goes straight from this 
    // return to being rendered according to
    // index.js and rendered DOM needs jsx tags
}

export default CardList;

// EXPLANATION FOR 'key={robots[i].id}'
// React virtual DOM keeps track of all the 
// cards, but it wants me to give them a 
// key prop so that if some cards get deleted
// it knows how to change them individually
// instead of changing the entire DOM
// And robots[i].id must be in curly brackets 
// because it is a javascript prop argument

// A key prop should be a unique
// value that can't get changed. 
// If it was the index then we shifted
// this array then the key prop would change
// so using the index as the key prop is
// a bad idea
// That is why we use the id property of 
// the robots object

// Also before I moved the return statement
// to be multi-line and easier to read it was
// return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
// So as you can see prop arguments can be 
// split by line no problem and just remember
// to give your multi-line return a ()


// Even cleaner way to do all this:

// Because everything returned in {} is
// javascript we can actually not use 
// cardArray as a const array like:

// const CardList = ({ robots }) =>{
// return(
//     <div>
//         {
//             robots.map((user, i) => {
//                 return(
//                     <Card 
//                         key={robots[i].id} 
//                         id={robots[i].id} 
//                         name={robots[i].name} 
//                         email={robots[i].email}
//                     />
//                 )
//             })
//         }
//     </div>
// ) 
// }

// This outputs an unnamed array of Cards 
// filled with keys for each card, we never 
// needed a name for the array like cardArray

// Also I used a ; after const cardArray
// but not the nameless mapping because I read
// to use ; for variables but not functions
// and cardArray is a variable but the mapping
// without naming the array is a function