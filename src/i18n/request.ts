import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // 정적 로케일 제공, 사용자 설정 가져오기,
  // `cookies()`, `headers()` 등에서 읽기
  const locale = "ko";

  // 경로를 locales/en/common.json
  // 경로를 locales/en/home.json
  // 경로를 locales/en/profile.json
  // 경로를 locales/ko/common.json
  // 경로를 locales/ko/home.json
  // 경로를 locales/ko/profile.json

  return {
    locale,
    messages: (await import(`../../locales/${locale}/home.json`)).default,
  };
});
