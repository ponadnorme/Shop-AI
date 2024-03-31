'use client';

import {Rating as RatingPlugin} from '@smastrom/react-rating';
import './styles';

export const Rating = ({rating}: {
  rating: number,
}) => {
  return (
    <RatingPlugin
      items={6}
      readOnly={true}
      value={rating}
    />
  );
};
