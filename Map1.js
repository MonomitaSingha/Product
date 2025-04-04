import React from "react";
import '../Css/P.css'


const Map1 = () => {
    const std = [
        { productid: 1, name: "realme", price: 15000, date: "1/2/2025" ,location:"Kolkata"},
        { productid: 2, name: "sumsung", price: 17000, date: "8/2/2025",location:"lalgola" },
        { productid: 3, name: "redme", price: 20000, date: "5/1/2025",location:"berhampore" },
        { productid: 4, name: "vivo", price: 55000, date: "6/2/2025",location:"Lalbagh" },

    ]
    return (
        <div className="pro">
            <h1>PRODUCT TABLE</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>Product date</th>
                        <th>Product delivery</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {std.map(std => (
                        <tr key={std.id}>
                            <td>{std.productid}</td>
                            <td>{std.name}</td>
                            <td>{std.price}</td>
                            <td>{std.date}</td>
                            <td>{std.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Map1 