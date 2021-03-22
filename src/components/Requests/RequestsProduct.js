function RequestsProduct(props){
    console.log(props);
    let {name, price, comment} = props.product;
    return(
        <div className="RequestsProduct">
            <h3>Інфо про покупця</h3>
            <p>Продукт: {name}</p>
            <p>Ціна: {price}</p>
            <p>Коментар: {comment}</p>
        </div>
    )
}

export default RequestsProduct;