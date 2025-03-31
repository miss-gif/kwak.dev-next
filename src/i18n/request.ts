import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const DEFAULT_LOCALE = "ko";
const SUPPORTED_LOCALES = ["ko", "en", "ja"];

const getLocaleFromCookies = async (): Promise<string> => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || DEFAULT_LOCALE;
  return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
};

const loadMessages = async (
  locale: string
): Promise<Record<string, string>> => {
  const modules = await Promise.all([
    import(`../../locales/${locale}/common.json`),
    import(`../../locales/${locale}/home.json`),
    import(`../../locales/${locale}/profile.json`),
  ]);
  return Object.assign({}, ...modules.map((mod) => mod.default));
};

export default getRequestConfig(async () => {
  const locale = await getLocaleFromCookies();
  const messages = await loadMessages(locale);
  return { locale, messages };
});

export const getHeaderData = async () => {
  const locale = await getLocaleFromCookies();

  try {
    const data = await import(`../../locales/${locale}/header-data.json`);
    return data.default;
  } catch (error) {
    console.error(
      `Failed to load header-data.json for locale: ${locale}`,
      error
    );
    return { TopBanner: { navLinks: [], actionLinks: [] } }; // Default fallback
  }
};
