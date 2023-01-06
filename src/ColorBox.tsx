import React from "react";
import Typography from "./ui/Typography";
interface Props {
  color: string;
}
const ColorBox = ({ color }: Props) => {
  const [isCopy, setIsCopy] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isCopy]);
  return (
    <article
      onClick={() => {
        setIsCopy(true);
        navigator.clipboard.writeText(color);
      }}
      className="flex flex-col select-none  w-full h-20 text-gray-500 font-semibold cursor-pointer justify-center items-center rounded"
      style={{ backgroundColor: `${color}` }}
    >
      <Typography className="uppercase">{color}</Typography>
      {isCopy && <span className="text-sm">Copied</span>}
    </article>
  );
};

export default ColorBox;
