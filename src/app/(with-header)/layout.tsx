import Footer from "@/components/layout/footer";
import HeaderWrap from "@/components/layout/header/header-wrap";
import TopBanner from "@/components/layout/header/top-banner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBanner />
      <HeaderWrap />
      {children}
      <Footer />
    </div>
  );
}
