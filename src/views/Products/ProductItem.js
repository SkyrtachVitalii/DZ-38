import "./Products.scss";
import {useParams} from "react-router-dom";

function ProductItem(){
    let {id} = useParams();
    console.log(useParams());
    return (
        <div className="ProductItem">
            Це сторінка продукту з {id}
            
        </div>
    )
}

export default ProductItem;