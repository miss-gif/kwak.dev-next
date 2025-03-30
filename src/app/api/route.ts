/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

// GET 요청을 처리하는 함수
export async function GET(request: NextRequest) {
  // 응답 데이터 정의
  const response = {
    message: "Hello from the API route!", // API 경로에서의 메시지
    data: "This is a sample API response", // 샘플 API 응답 데이터
  };

  // JSON 응답 반환 (상태 코드: 200)
  return NextResponse.json(response, { status: 200 });
}
