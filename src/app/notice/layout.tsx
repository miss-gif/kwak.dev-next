import SideNavigation from "@/app/notice/components/navigation/SideNavigation";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Supabase",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <SideNavigation />
      {children}
      <Toaster />
    </section>
  );
}
