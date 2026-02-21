import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  if (isLiked) return <FaRegHeart size={20} onClick={toggle}></FaRegHeart>;
  return <FaHeart color="#ff6b81" size={20} onClick={toggle}></FaHeart>;
};

export default Like;
