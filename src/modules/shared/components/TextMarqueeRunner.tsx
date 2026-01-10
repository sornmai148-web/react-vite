import Marquee from "react-fast-marquee";

export const TextMarqueeRunner: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-amber-300 py-2">
      <Marquee className="text-gray-700 text-xs sm:text-sm xl:text-base">
        {text}
      </Marquee>
    </div>
  );
};
