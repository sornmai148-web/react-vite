import Advert2 from "@/assets/advert-2.webp";
import Advert5 from "@/assets/advert-5.webp";
import Advert6 from "@/assets/advert-6.webp";
import Advert7 from "@/assets/advert-7.webp";

import { ImageSlider } from "./Slider";

type Variant = {
  variant: "mobile" | "desktop";
};

export const AdvertisementSlider: React.FC<Variant> = (props) => {
  const { variant = "mobile" } = props;
  if (variant == "desktop") return <Advertisement isPartialShow={false} />;
  return <Advertisement />;
};

interface Props {
  isPartialShow?: boolean;
  hideHighlight?: boolean;
}

export const Advertisement: React.FC<Props> = ({
  isPartialShow = false,
  hideHighlight = false,
}) => {
  return (
    <ImageSlider
      items={[
        { id: 6, alt: "advert_6", src: Advert6 },
        { id: 5, alt: "advert_5", src: Advert5 },
        { id: 7, alt: "advert_7", src: Advert7 },
        { id: 2, alt: "advert_2", src: Advert2 },
      ]}
      isPartialShow={isPartialShow}
      hideHighlight={hideHighlight}
    />
  );
};
