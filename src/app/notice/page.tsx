import AddCreateButton from "@/app/notice/components/AddCreateButton";
import styles from "./page.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container_onBoarding}>
        <span className={styles.container_onBoarding_title}></span>
        <div className={styles.container_onBoarding_steps}>
          <span>1. Create a page</span>
          <span>2. Add boards to page</span>
        </div>
        {/* 페이지 추가 버튼 */}
        <AddCreateButton />
      </div>
    </div>
  );
}

export default Home;
