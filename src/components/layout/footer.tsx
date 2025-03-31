import Inner from "@/components/layout/inner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterSectionProps = {
  title: string;
  href: string;
  items: { name: string; href: string }[];
};

// Footer section data
const footerSections = [
  {
    title: "kwak.dev",
    href: "/",
    items: [
      { name: "사이트 소개", href: "/" },
      { name: "사이트 피드", href: "/" },
      { name: "블로그", href: "/" },
    ],
  },
  {
    title: "프로젝트",
    href: "/",
    items: [{ name: "프로젝트 소개", href: "/" }],
  },
  {
    title: "고객센터",
    href: "/",
    items: [
      { name: "고객센터", href: "/" },
      { name: "자주 묻는 질문", href: "/" },
      { name: "문의하기", href: "/" },
      { name: "이용약관", href: "/" },
      { name: "개인정보처리방침", href: "/" },
    ],
  },
  {
    title: "테스트",
    href: "/",
    items: [{ name: "테스트 소개", href: "/" }],
  },
  {
    title: "커뮤니티",
    href: "/",
    items: [{ name: "커뮤니티 소개", href: "/" }],
  },
  { title: "개발자", href: "/", items: [{ name: "개발자 소개", href: "/" }] },
  {
    title: "Get the app",
    href: "/",
    items: [{ name: "앱 다운로드", href: "/" }],
  },
  {
    title: "소셜 미디어",
    href: "/",
    items: [{ name: "소셜 미디어", href: "/" }],
  },
  { title: "뉴스레터", href: "/", items: [{ name: "뉴스레터", href: "/" }] },
];

// Footer links data
const footerLinks = [
  { name: "깃허브", href: "/" },
  { name: "블로그", href: "/" },
  { name: "노션", href: "/" },
];

// Section component
const FooterSection = ({ title, href, items }: FooterSectionProps) => (
  <div className="flex flex-col space-y-4">
    <h4 className="font-bold mb-4">
      <Link href={href}>{title}</Link>
    </h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterTop = () => (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    {footerSections.map((section, index) => (
      <FooterSection key={index} {...section} />
    ))}
  </div>
);

const FooterBottom = () => (
  <div className="border-t pt-8 flex justify-between items-center flex-col md:flex-row">
    <div className="flex flex-col space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="bg-black p-2 w-6 h-6 rounded-full flex items-center justify-center">
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Kwak.dev logo"
              width={10}
              height={10}
              quality={75}
              layout="responsive"
              priority
            />
          </Link>
        </div>
        <ul className="flex space-x-4 mt-2">
          <li>
            <Link href="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link href="/">이용약관</Link>
          </li>
        </ul>
      </div>

      <div className="text-sm">
        <p>
          Kwak.dev | 제작자: 곽도억 |
          <Button variant="link" className="p-0">
            깃허브 확인
          </Button>
        </p>
        <p>
          웹 개발자 | 개인정보보호책임자: 곽도억 | 이메일: ddc.akari@gmail.com
        </p>
        <p>전화번호: 010-5116-5535 | 주소: 서울 강남구</p>
        <p className="mt-4">ⓒ 2025 miss-gif. All Rights Reserved.</p>
      </div>
    </div>

    <ul className="flex gap-4 mt-4 md:mt-0">
      {footerLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-100 py-8">
    <Inner>
      <FooterTop />
      <FooterBottom />
    </Inner>
  </footer>
);

export default Footer;
