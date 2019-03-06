import React from 'react';

const UserBadge = (props) => {
    const { firstName, lastName, email, brithPlace, phone, favFood, about } = props.badge
    return (
        <div id="userBadge"> 
            <header>Badge:</header>
            <h2 className="top">Name: {firstName} {lastName}</h2>
            <h2 className="top">Email: {email}</h2>
            <h2>Place of birth: {brithPlace}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Favorite food: {favFood}</h2>
            <textarea style={{height: '100px'}}>{about}</textarea>            
        </div>
    )
}

export default UserBadge;