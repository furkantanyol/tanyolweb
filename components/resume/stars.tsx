import React from "react";
import Star from "@zeit-ui/react-icons/star";
import { Text } from "@zeit-ui/react";

type StarsProps = {
  rating: number;
};

const Stars = ({ rating }: StarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star key={i} size={15} {...(i < rating && { fill: "black" })} />
    );
  }

  return (
    <div className="stars-container">
      {stars}{" "}
      <Text className="stars-container-rating">{rating.toFixed(2)}</Text>
    </div>
  );
};

export default Stars;
