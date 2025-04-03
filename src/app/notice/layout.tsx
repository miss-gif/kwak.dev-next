import SideNavigation from "@/app/notice/components/navigation/SideNavigation";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import { createClient } from "../../../utils/supabase/server";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Supabase",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section className="flex">
      <SideNavigation user={user} />
      {children}
      <Toaster />
    </section>
  );
}
