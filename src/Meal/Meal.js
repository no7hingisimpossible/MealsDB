import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    const {buttonHandler} = props;
    const {strMeal, strMealThumb} = props.meal
    console.log(props)
    return (
        <div className='meal-card'>
            <img src={strMealThumb} alt="" />
            <p>{strMeal}</p>
            <button onClick={()=>{buttonHandler(strMeal)}} className='btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;