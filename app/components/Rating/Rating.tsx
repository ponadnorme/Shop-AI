'use client';

import {Rating as RatingPlugin} from "react-simple-star-rating";

export const Rating = ({rating}: {
  rating: number,
}) => {
  return (
    <RatingPlugin
      size={20}
      iconsCount={6}
      readonly={true}
      initialValue={rating}
      titleSeparator='z'
    />
  );
};
