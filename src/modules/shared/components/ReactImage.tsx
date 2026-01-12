import fallbackImg from "@/assets/news-fallback-image.webp";

export function ReactImage({
  src,
  alt = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackImg;
      }}
      {...props}
    />
  );
}
