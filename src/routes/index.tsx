import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation("translation");

  return (
    <div className="p-2">
      <h3 className="text-yellow-500">{t("detail")}</h3>
    </div>
  );
}
