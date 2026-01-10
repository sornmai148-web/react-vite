import { TextMarqueeRunner } from "@/modules/shared/components/TextMarqueeRunner";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  return (
    <div className="relative min-h-[calc(100dvh-150px)] h-auto">
      {/*-- Text animation --*/}
      <TextMarqueeRunner
        text="Welcome to Haiwai news, looking for breaking news with variety of
        catgories, you come to the right place."
      />
    </div>
  );
}
