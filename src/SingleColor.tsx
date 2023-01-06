import React from "react";
import Typography from "./ui/Typography";
interface Props {
  rgb: number[];
  hexColor: string;
  index: number;
  weight: number;
}
const SingleColor = ({ rgb, hexColor, index, weight }: Props) => {
  const bg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  const [isCopy, setIsCopy] = React.useState(false);
  React.useEffect(() => {
    const TIMEOUT = setTimeout(() => {
      setIsCopy(false);
    }, 500);

    return () => clearTimeout(TIMEOUT);
  }, [isCopy]);
  return (
    <article
      className={`h-[200px] ${
        weight === 0 ? "border-2 border-gray-500 text-gray-600" : ""
      } cursor-pointer flex flex-col justify-center items-center gap-3 w-full ${
        index > 10 ? "text-white" : null
      }`}
      onClick={() => {
        setIsCopy(true);
        navigator.clipboard.writeText(hexValue);
      }}
      style={{ backgroundColor: `rgb(${bg})` }}
    >
      <Typography variant="h5">{weight}%</Typography>
      <Typography className="uppercase font-semibold">{hexValue}</Typography>
      {isCopy && (
        <Typography className="uppercase font-semibold ">
          Click To Clipboard
        </Typography>
      )}
    </article>
  );
};

export default SingleColor;
