import {useParams} from "react-router-dom";

function Review() {
    let {productId, reviewId} = useParams();
  return (
    <div className="Review">
        <h1>Це коментар продукту з ID {productId}, reviewID: {reviewId}</h1>
    </div>
  );
}

export default Review;