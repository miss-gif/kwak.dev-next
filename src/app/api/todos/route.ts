import { NextRequest, NextResponse } from "next/server";
import dummyData from "@/data/dummy.json"; // JSON 파일 import

// toto 목록 조회
export async function GET() {
  const response = {
    message: "Fetching todos data", // API 메시지
    data: dummyData, // 샘플 데이터
  };

  return NextResponse.json(response, { status: 200 }); // 상태 코드 200 응답
}

// toto 쓰기
export async function POST(request: NextRequest) {
  const { title } = await request.json(); // 요청 본문에서 JSON 데이터 추출

  const newTodo = {
    id: Math.random(), // 임의 ID 생성 (실제 환경에서는 DB 사용)
    title, // 요청 본문에서 받은 제목
    is_done: false, // 기본값: 완료되지 않음
  };

  const response = {
    message: "POST request successful", // API 메시지
    data: newTodo, // 생성된 데이터 반환
  };

  return NextResponse.json(response, { status: 201 }); // 상태 코드 201 응답
}
