function RequestsCustomer(props){
    console.log(props);
    let {firstName, lastName, isRegister} = props.customer;
    return (
        <div className="RequestsCustomer">
            <h3>Інфо про покупця</h3>
            <p>Ім'я: {firstName}</p>
            <p>Прізвище: {lastName}</p>
            <p>Реєстрація: {isRegister ? "Так" : "Ні"}</p>
        </div>
    )
}

export default RequestsCustomer;