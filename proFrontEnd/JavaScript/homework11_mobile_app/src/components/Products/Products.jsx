import React, { useEffect } from 'react'
import { CiShoppingBasket } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { getProductAll, getProductById } from '../../store/actions/product';

const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    const {categoryId} = useParams();

    useEffect(()=>{

        if(categoryId){
            dispatch(getProductById(categoryId));
        }else {
            dispatch(getProductAll());
        }
    },[categoryId])

    return (
        <div className="products">
            {
                products && products.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.title} className="item__image" />

                        <div className='item__content'>
                            <h2 className='item__title'>{item.title}</h2>
                            <p className='item__subtitle'>{item.description}</p>
                        </div>

                        <div className='item__footer'>
                            <span className='item__price'>$ {item.price}</span>

                            <button className='btn btn-small'><CiShoppingBasket className='btn-icon' /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products