import React from 'react';

const Card = ({email, name, id}) =>{    
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            {/*Will use robohash api to generate random robots*/}
            <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt='robots' />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;