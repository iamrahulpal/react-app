import { startTransition, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    return setLike(!like);
  };

  if (like) return <AiFillHeart onClick={handleLike} color="red" size={30} />;
  return <AiOutlineHeart onClick={handleLike} size={30} />;
};

export default Like;
