import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

const useRating = (rating) => {
  return (
    <Rating
      initialRating={rating}
      emptySymbol={<FontAwesomeIcon style={{ color: "#ddd" }} icon={faStar} />}
      fullSymbol={
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
      }
      readonly
    ></Rating>
  );
};

export default useRating;
