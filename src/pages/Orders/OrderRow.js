import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handaleDelete }) => {
    const { _id, productName, price, customer, message, email, productId } = order;
    const [orderProduct, setOrderProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setOrderProduct(data))
    }, [productId])

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderProduct?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">Price:${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
            </td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
            <th>
                <button onClick={() => handaleDelete(_id)} className="btn btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default OrderRow;