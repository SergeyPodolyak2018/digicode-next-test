import styles from '@/app/[locale]/breed/layout.module.css';
import NavLinks from '@/app/[locale]/ui/nav-links';
import LocaleSwitcher from '@/app/[locale]/ui/LocaleSwitcher';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavLinks />
        <LocaleSwitcher />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
