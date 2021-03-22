import React from "react";
import "./Requests.scss";
import RequestsProduct from "./RequestsProduct";
import RequestsCustomer from "./RequestsCustomer";

class Requests extends React.Component{

    render(){
        let request = {
            product: {
                name: "iPhone",
                price: "1000$",
                comment: "тільки чорний!!!!!!!!!"
            },
            customer: {
                firstName: "Віталій",
                lastName: "Скиртач",
                isRegister: true
            }
        }
        return(
            <div className="Requests">
                <RequestsProduct product={request.product}/>
                <RequestsCustomer customer={request.customer}/>
            </div>
        )
    }
}

export default Requests;