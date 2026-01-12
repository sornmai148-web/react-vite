import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import { ReactImage } from "../ReactImage";
import { useTranslation } from "react-i18next";

interface IMedia {
  id: number;
  src: string;
  alt: string;
}

interface Props {
  items: Array<IMedia>;
  hideAds?: boolean;
  isPartialShow?: boolean;
  hideHighlight?: boolean;
}

export const ImageSlider: React.FC<Props> = ({
  items,
  hideAds = false,
  isPartialShow = false,
  hideHighlight = false,
}) => {
  return (
    <div className="relative">
      <Swiper
        // loop
        effect="fade"
        speed={2000}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass:
            "size-2! bg-gray-100 rounded-sm! mr-1! px-0! flex items-center space-x-1!",
          bulletActiveClass: "w-5! h-2 rounded-md! bg-amber-300!",
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="advertisement-slider relative"
      >
        {(items || [])?.map((x) => (
          <SwiperSlide key={x.id}>
            <Item
              {...x}
              hideAds={hideAds}
              isPartialShow={isPartialShow}
              hideHighlight={hideHighlight}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination z-20! absolute -bottom-4! w-full flex justify-center" />
    </div>
  );
};

const Item: React.FC<
  IMedia & {
    hideAds: boolean;
    isPartialShow?: boolean;
    hideHighlight?: boolean;
  }
> = ({ src, alt, isPartialShow = false }) => {
  const { t } = useTranslation("translation");

  return (
    <div className="relative">
      <div
        className={cn(
          "group relative overflow-hidden",
          !isPartialShow ? "aspect-[4/1.2] md:aspect-[4/1.15]" : "aspect-16/7"
        )}
      >
        <img
          src={src}
          alt={alt}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-[15%_0%] group-hover:scale-105 duration-200"
          loading="lazy"
        />
      </div>

      <div className="absolute size-full top-0 left-0 bg-linear-to-r from-black/60 via-black/20 group-hover:from-black/60 duration-500 transition-colors to-transparent rounded-xs z-20">
        <div
          id="2"
          className="absolute left-0 bottom-0 w-full bg-linear-to-r from-transparent via-amber-400/65 to-transparent py-1.5"
        >
          <p
            className={cn(
              "text-xs md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center text-white",
              { "text-sm!": isPartialShow }
            )}
          >
            {t("common.advert")}
          </p>
        </div>
      </div>
    </div>
  );
};
