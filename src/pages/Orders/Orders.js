import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';
import OrderRow from './OrderRow';

const Orders = () => {
    useTitle('Review');
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`https://online-food-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handaleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete.');
        if (proceed) {
            fetch(`https://online-food-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (

        <div className="overflow-x-auto w-full min-h-screen mt-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handaleDelete={handaleDelete}
                        ></OrderRow>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;