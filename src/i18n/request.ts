import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const DEFAULT_LOCALE = "ko"; // 기본 언어 설정
const SUPPORTED_LOCALES = ["ko", "en", "ja"]; // 지원되는 언어 목록

// 쿠키에서 언어 정보를 가져오는 함수
const getLocaleFromCookies = async (): Promise<string> => {
  const cookieStore = await cookies(); // 쿠키 객체 가져오기
  const locale = cookieStore.get("NEXT_LOCALE")?.value || DEFAULT_LOCALE; // 쿠키에서 NEXT_LOCALE 값을 가져오거나 기본 언어 반환
  return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE; // 지원되는 언어인지 확인 후 반환
};

// 특정 언어의 메시지를 로드하는 함수
const loadMessages = async (
  locale: string
): Promise<Record<string, string>> => {
  const modules = await Promise.all([
    import(`../../locales/${locale}/common.json`), // 공통 메시지 로드
    import(`../../locales/${locale}/home.json`), // 홈 페이지 메시지 로드
    import(`../../locales/${locale}/profile.json`), // 프로필 페이지 메시지 로드
  ]);
  return Object.assign({}, ...modules.map((mod) => mod.default)); // 로드된 메시지를 병합하여 반환
};

// 요청에 대한 설정을 생성하는 함수
export default getRequestConfig(async () => {
  const locale = await getLocaleFromCookies(); // 쿠키에서 언어 가져오기
  const messages = await loadMessages(locale); // 해당 언어의 메시지 로드
  return { locale, messages }; // 언어와 메시지 반환
});

// 헤더 데이터를 가져오는 함수
export const getHeaderData = async () => {
  const locale = await getLocaleFromCookies(); // 쿠키에서 언어 가져오기

  try {
    const data = await import(`../../locales/${locale}/header-data.json`); // 헤더 데이터 로드
    return data.default; // 로드된 데이터 반환
  } catch (error) {
    console.error(
      `Failed to load header-data.json for locale: ${locale}`, // 데이터 로드 실패 시 에러 로그 출력
      error
    );
    return { TopBanner: { navLinks: [], actionLinks: [] } }; // 기본값 반환
  }
};
