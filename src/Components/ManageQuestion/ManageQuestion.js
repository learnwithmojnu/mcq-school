import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageQuestion = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-peak-84384.herokuapp.com/questions')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products)
    const deleteProduct = (id) => {
        fetch(`https://aqueous-peak-84384.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            window.location.reload(false);
        })
    }
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                <AdminSidebar/>
            </div>
            <div className="col-md-8">
                {
                    products.map(product => 
                    <div>
                        <h4 className="d-inline-block me-2">{product.question}<span>&nbsp;&nbsp;&nbsp;<button onClick={() => deleteProduct(product._id)}>Delete</button></span></h4>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageQuestion;