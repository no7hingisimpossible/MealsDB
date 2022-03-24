import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Meal from '../Meal/Meal';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([]); 
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=> res.json())
        .then(data=> setMeals(data.meals))
    },[])

    const buttonHandler=(mealName)=>{
        console.log(mealName)
        const newCart = [...cart, mealName]
        setCart(newCart)
    }


    return (
        <div className='main-container'>
            <div className='meal-container'>
                {
                    meals.map(meal=> <Meal
                        key ={meal.idMeal}
                        meal={meal}
                        buttonHandler ={buttonHandler}
                         >

                         </Meal>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;