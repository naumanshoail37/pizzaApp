import React from 'react'
import Header from './Header'
import img from '../Components/pics/pepproni.jpg'
import img1 from '../Components/pics/margherita.jpg'
import img2 from '../Components/pics/special.jpg'
import img3 from '../Components/pics/tikka.jpg'
import img4 from '../Components/pics/fajita.jpg'
import img5 from '../Components/pics/supreme.jpg'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { li } from 'framer-motion/client'
import { Link } from 'react-router-dom'


function Menu() {


    const Ingredients = [
        {
            name: "Pepperoni Pizza",
            description: "A classic favorite topped with tomato sauce, mozzarella cheese, and spicy pepperoni.",
            ingredients: ["Pizza Dough , ", "Tomato Sauce , ", "Mozzarella Cheese , ", "Pepperoni"]
        },
        {
            name: "Margherita Pizza",
            description: "A simple pizza topped with fresh tomatoes, mozzarella, basil, and olive oil.",
            ingredients: ["Pizza Dough , ", "Tomato Sauce , ", "Fresh Mozzarella , ", "Basil"]
        },
        {
            name: "Special Pizza",
            description: "A unique blend of exotic toppings including spicy sausage, artichokes, and feta cheese.",
            ingredients: ["Pizza Dough , ", "Tomato Sauce , ", "Mozzarella Cheese , ", "Spicy Sausage , ", "Artichokes , ", "Feta Cheese"]
        },
        {
            name: "Tikka Pizza",
            description: "A flavorful pizza topped with spicy tikka marinated chicken, onions, and bell peppers.",
            ingredients: ["Pizza Dough , ", "Tikka Sauce , ", "Mozzarella Cheese , ", "Grilled Chicken , ", "Onions , ", "Bell Peppers"]
        },
        {
            name: "Fajita Pizza",
            description: "A zesty pizza topped with fajita-seasoned chicken, bell peppers, onions, and cheese.",
            ingredients: ["Pizza Dough , ", "Tomato Sauce , ", "Mozzarella Cheese , ", "Fajita Chicken , ", "Bell Peppers , ", "Onions"]
        },
        {
            name: "Supreme Pizza",
            description: "A hearty pizza loaded with pepperoni, sausage, mushrooms, onions, and bell peppers.",
            ingredients: ["Pizza Dough , ", "Tomato Sauce , ", "Mozzarella Cheese , ", "Pepperoni , ", "Sausage , ", "Mushrooms , ", "Onions , ", "Bell Peppers"]
        },
    ]

      const [PizzaPrices , setPizzaPrices] = useState(0)

    const Prices = [
        {
            price: 15.97
        },
        {
            price: 11.99
        },
        {
            price: 25.99
        },
        {
            price: 26.53
        },
        {
            price: 19.13
        },
        {
            price: 24.99
        },
    ]
    const slideimages = [img, img1, img2, img3, img4, img5]
    const [cart, setCart] = useState([]);
    const handleAddToCart = (pizza) => {
        setCart((prevCart) => [...prevCart, pizza]);
    };
    const [MenuSlider, setMenuSlider] = useState(0)
    useEffect(() => { const timer = setTimeout(() => { setMenuSlider((prev) => (prev === slideimages.length - 1 ? 0 : prev + 1)) }, 3000) }, [MenuSlider])

    return (


        <motion.div

            className='Menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}



        >
            <Header />


            <div className='pt-[120px] flex flex-col justify-center items-center'>

                {/*Heading*/}
                <h1 className='text-[50px] font-bold font-serif '>Our Menu</h1>

                {/*First three pics in row*/}

                <div className='flex flex-row space-x-10 gap-10'>

                    {/*First pizza*/}
                    <div className='conatiner1 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>Pepproni Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif'>{Prices[0].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[0])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>

                    {/*Second pizza*/}
                    <div className='conatiner2 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img1} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>Margherita Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif '>{Prices[1].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[1])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>

                    {/*Third pizza*/}
                    <div className='conatiner3 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img2} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>PedroTech Special  Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif '>{Prices[2].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[2])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>



                </div>
                {/*last three pics in row*/}
                <div className='flex flex-row space-x-10 gap-10 mt-10 mb-20'>
                    {/*Forth pizza*/}
                    <div className='conatiner4 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img3} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>Tikka Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif '>{Prices[3].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[3])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>
                    {/*Fifth pizza*/}
                    <div className='conatiner5 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img4} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>Fajita Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif '>{Prices[4].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[4])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>
                    {/*Sixth pizza*/}
                    <div className='conatiner6 h-[300px] w-[200px]  justify-evenly border-white shadow-2xl flex flex-col relative rounded-2xl'>
                        <img src={img5} alt="" className='h-[200px] w-[200px]  overflow-hidden object-cover rounded-xl' />
                        <h1 className='text-start font-bold text-[20px] font-serif'>Supreme Pizza</h1>
                        <h1 className='text-start font-bold text-[14px] font-serif '>{Prices[5].price}</h1>
                        <Link to='/Cart'><button onClick={() => handleAddToCart(Ingredients[5])} className='font-semibold font-serif text-[12px]'> Add to cart </button></Link></div>
                </div>

            </div>

            {/*Pizza Slider*/}

            <div className='Slider '>

                <img src={slideimages[MenuSlider]} alt="" className='h-[700px] w-full object-cover' />
                <div className='absolute top-[800px]  w-full h-full flex flex-col justify-center text-start items-center text-black'>
                    <h1 className='text-[80px] font-bold font-serif'>{Ingredients[MenuSlider].name}</h1>
                    <h1 className='text-[30px] font-bold font-serif'>{Ingredients[MenuSlider].description}</h1>
                    <h1 className='text-[20px] font-bold font-serif'>{Ingredients[MenuSlider].ingredients}</h1>
                </div>
            </div>


        </motion.div>
    )
}

export default Menu

