import { NextRequest, NextResponse } from "next/server";

// 단일 toto 조회
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // 요청 URL에서 쿼리 파라미터 추출
  const query = request.nextUrl.searchParams.get("query");

  // 응답 데이터 정의
  const response = {
    message: "GET 요청 처리 성공", // 처리 결과 메시지
    data: [{ id: slug, title: "Todo 1", is_done: false, query }], // 샘플 데이터
  };

  // JSON 응답 반환 (HTTP 상태 코드: 200)
  return NextResponse.json(response, { status: 200 });
}

// 단일 todo 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // 응답 데이터 정의
  const response = {
    message: "DELETE 요청 처리 성공", // 처리 결과 메시지
    data: [{ id: slug, title: "Todo 1", is_done: false }], // 샘플 데이터
  };

  // JSON 응답 반환 (HTTP 상태 코드: 200)
  return NextResponse.json(response, { status: 200 });
}

// 단일 todo 수정
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // 요청 본문에서 JSON 데이터 추출
  const { title, is_done } = await request.json();

  // 수정된 Todo 데이터 정의
  const editTodo = {
    id: slug, // Todo ID
    title, // 요청 본문에서 전달받은 제목
    is_done, // 요청 본문에서 전달받은 완료 상태
  };

  // 응답 데이터 정의
  const response = {
    message: "POST 요청 처리 성공", // 처리 결과 메시지
    data: editTodo, // 수정된 Todo 데이터
  };

  // JSON 응답 반환 (HTTP 상태 코드: 200)
  return NextResponse.json(response, { status: 200 });
}
