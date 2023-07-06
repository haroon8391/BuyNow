import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Products() {

    const [data, setData] = useState(null);
    const [category, setcategory] = useState("All");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    const handleCategoryChange = (category) => {
        setcategory(category);
    };

    const filterProduct = (products) => {
        if (category === "All") {
            return products;
        } else {
            return products.filter((product) => product.category === category);
        }
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="my-5">
                    <div className="buttons text-center my-5">
                        <button
                            type="button"
                            className={`btn btn-info mx-2 ${category === "All" ? "active" : ""}`}
                            onClick={() => handleCategoryChange("All")}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className={`btn btn-info mx-2 ${category === "men's clothing" ? "active" : ""
                                }`}
                            onClick={() => handleCategoryChange("men's clothing")}
                        >
                            Men's Clothing
                        </button>
                        <button
                            type="button"
                            className={`btn btn-info mx-2 ${category === "women's clothing" ? "active" : ""
                                }`}
                            onClick={() => handleCategoryChange("women's clothing")}
                        >
                            Women's Clothing
                        </button>
                        <button
                            type="button"
                            className={`btn btn-info mx-2 ${category === "jewelery" ? "active" : ""
                                }`}
                            onClick={() => handleCategoryChange("jewelery")}
                        >
                            Jewelery
                        </button>
                        <button
                            type="button"
                            className={`btn btn-info mx-2 ${category === "electronics" ? "active" : ""
                                }`}
                            onClick={() => handleCategoryChange("electronics")}
                        >
                            Electronics
                        </button>
                    </div>
                    <div className="container my-5">
                        <div className="row">
                            {data &&
                                data.length > 0 &&
                                filterProduct(data).map((element) => {
                                    const truncatedTitle = element.title.substring(0, 17);
                                    const truncatedDescription = element.description.substring(0, 85);
                                    return (
                                        <div className="col-md-4 my-5" key={element.id}>
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img
                                                    src={element.image}
                                                    className="card-img-top"
                                                    alt="Error"
                                                    style={{ height: "300px" }}
                                                />
                                                <hr />
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">
                                                        {truncatedTitle}...
                                                    </h5>
                                                    <p className="card-text text-center">
                                                        {truncatedDescription}...
                                                    </p>
                                                    <div className="text-center">
                                                        <NavLink to={`/products/${element.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='display-4 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {<ShowProducts />}
                </div>
            </div>
            <footer style={{ backgroundColor: "black", color: "white", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p><b>Copyright &copy; Muhammad Haroon Ali - All rights reserved</b></p>
            </footer>
        </div>
    )
}

