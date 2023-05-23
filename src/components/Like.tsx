import { useState } from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
    onClick();
  };

  return (
    <AiTwotoneHeart
      fill={active ? '#ff6b81' : 'grey'}
      size={30}
      onClick={toggle}
    />
  );
};

export default Like;
