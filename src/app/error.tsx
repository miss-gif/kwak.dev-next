"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter(); // 라우터 객체 초기화

  useEffect(() => {
    console.error(error.message); // 에러 메시지를 콘솔에 출력
  }, [error]); // 에러가 변경될 때만 실행

  return (
    <div>
      <p>오류가 발생했습니다.</p>
      <Button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴
            reset(); // 에러 상태를 초기화하고 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </Button>
    </div>
  );
};

export default Error;
