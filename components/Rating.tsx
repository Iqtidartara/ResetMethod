'use client'
import { useEffect, useState } from 'react';

interface RatingProps {
  value: number;
  max: number;
}

const Rating: React.FC<RatingProps> = ({ value, max }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing on the server
    return null;
  }

  const stars = [];
  for (let i = 0; i < max; i++) {
    stars.push(
      <span
        key={i}
        className={`text-2xl ${
          i < value ? 'text-yellow-500' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
