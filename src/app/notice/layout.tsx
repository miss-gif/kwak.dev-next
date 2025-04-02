import SideNavigation from "@/app/notice/components/navigation/SideNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <SideNavigation />
      {children}
    </section>
  );
}
