import * as React from 'react'
import './product.css';

const ProductList = ({name}) => {
    const products = [
        {
            "name": "Nyke Shoe",
            "prodId": "1",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Addidas Shoe",
            "prodId": "2",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Rebock Shoe",
            "prodId": "3",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Croc Shoe",
            "prodId": "4",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Puma Shoe",
            "prodId": "5",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Bata Shoe",
            "prodId": "6",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Sopra Shoe",
            "prodId": "7",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Banitton Shoe",
            "prodId": "8",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        },
        {
            "name": "Woodland Shoe",
            "prodId": "9",
            "trend": "latest",
            "description": "High Quality shoe",
            "cost": "5000"
        }
    ]
    return (
        <div className="parentWrapper">
            {
                products.map(item => {
                    return <div className="itemContainer">
                        <div className="item">Name: {item.name}</div>
                        <div className="item">Description: {item.description}</div>
                        <div className="item">Trend: {item.trend}</div>
                        <div className="item">Product Code: {item.prodId}</div>
                        <div className="item">Price: {item.cost}</div>
                        <div className="item">Shared Name: {name} from second pilet</div>
                    </div>
                })
            }
       </div>
    )
}

export default ProductList;