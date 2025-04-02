import AddCreateButton from "@/app/notice/components/AddCreateButton";
import styles from "./SideNavigation.module.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SideNavigation() {
  return (
    <div className={styles.container}>
      {/* 검색창 */}
      <div className={styles.container_searchBox}>
        <Input
          type="text"
          placeholder="검색어를 입력하세요."
          className="focus-visible:right"
        />
        <Button variant={"outline"} size={"icon"}>
          <Search className="w-4 h-4" />
        </Button>
      </div>
      {/* page 추가 버튼 */}
      <div className={styles.container_buttonBox}>
        <AddCreateButton />
      </div>
      {/* 추가 항목 출력 영역 */}
      <div className={styles.container_todos}>
        <div className={styles.container_todos_label}>Your Todo</div>
      </div>
    </div>
  );
}

export default SideNavigation;
