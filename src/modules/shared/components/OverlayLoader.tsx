import { Riple } from "react-loading-indicators";

export const OverlayLoader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-black/5 z-20 top-0 left-0 bottom right-0 w-screen h-screen">
      <Riple color="#f5cd25" size="large" />
    </div>
  );
};
