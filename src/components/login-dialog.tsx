import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="text-sm">
          로그인
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader></DialogHeader>
        <div className="grid gap-4">
          <div className="text-center text-4xl font-semibold pt-5 pb-8">
            Kwak.dev
          </div>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button className="w-full">로그인</Button>

          <ul className="flex gap-4 justify-center text-xs">
            <li className="border-b pb-0.5 border-b-neutral-200 hover:border-b-black">
              <Link href={"/"}>비밀번호 찾기</Link>
            </li>
            <li className="border-b pb-0.5 border-b-neutral-200 hover:border-b-black">
              <Link href={"/"}>회원가입</Link>
            </li>
            <li className="border-b pb-0.5 border-b-neutral-200 hover:border-b-black">
              <Link href={"/"}>아이디(이메일) 찾기</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-2 py-2">
          <span></span>
          <p className="text-xs">간편 로그인</p>
          <span></span>
        </div>

        <div className="flex justify-center gap-2">
          <Button size="icon">1</Button>
          <Button size="icon">1</Button>
          <Button size="icon">1</Button>
          <Button size="icon">1</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
