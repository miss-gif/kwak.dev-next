import Inner from "@/components/layout/inner";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <Inner>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
    </Inner>
  );
}
