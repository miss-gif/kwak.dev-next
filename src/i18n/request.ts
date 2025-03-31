import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get("NEXT_LOCALE")?.value || "ko"; // 기본값 한국어

  // 유효한 언어 코드인지 확인
  const supportedLocales = ["ko", "en", "ja"];
  if (!supportedLocales.includes(locale)) {
    locale = "ko"; // 기본값 설정
  }

  // JSON 파일 로드
  const messages = Object.assign(
    {},
    (await import(`../../locales/${locale}/common.json`)).default,
    (await import(`../../locales/${locale}/home.json`)).default,
    (await import(`../../locales/${locale}/profile.json`)).default
  );

  return { locale, messages };
});
