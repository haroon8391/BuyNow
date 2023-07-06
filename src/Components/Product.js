import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';



export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {

        const getProduct = async () => {
            let res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
        }
        getProduct();
    }, [id])

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt="Error" height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark" onClick={() => { addProduct(product) }}>Add to Cart</button>
                    <Link to="/cart" className="btn btn-dark mx-2">Go to Cart</Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {<ShowProduct />}
                </div>
            </div>
        </div>
    )
}

// onClick = {() => { addProduct(product) }}
