import { TextMarqueeRunner } from "@/modules/shared/components/TextMarqueeRunner";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-[calc(100dvh-150px)] h-auto">
      {/*-- Text animation --*/}
      <TextMarqueeRunner text={t("components.marquee.content")} />
    </div>
  );
}
