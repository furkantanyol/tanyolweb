import React from "react";
import Star from "@geist-ui/react-icons/star";
import { Text } from "@geist-ui/react";

type StarsProps = {
  rating: number;
};

const Stars = ({ rating }: StarsProps) => {
  const stars = Array.from(new Array(5));

  return (
    <div className="stars-container">
      {stars.map((star, i) => (
        <Star key={i} size={15} {...(i < rating && { fill: "black" })} />
      ))}{" "}
      <Text className="stars-container-rating">{rating.toFixed(2)}</Text>
    </div>
  );
};

export default Stars;
