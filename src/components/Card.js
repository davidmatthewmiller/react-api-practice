import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    // this ^^ destructuring allows us to
    // say {id} {name} {email} in jsx instead
    // of {props.id} {props.name} {props.email}
    
    // even better than ^^ you can destructure 
    // within the function parameters like
    // const Card = ({ name, email, id }) => {
    // but I will keep this as is for example purposes

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;