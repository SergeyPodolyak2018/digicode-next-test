import styles from '@/app/[locale]/breed/all/page.module.css';
import { fetchAllBreeds } from '@/app/[locale]/lib/data';
import { unstable_setRequestLocale } from 'next-intl/server';
import CardsAgregator from '@/app/[locale]/ui/cardsAgregator';

export default async function Page() {
  const result = await fetchAllBreeds();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CardsAgregator data={result} />
      </div>
    </div>
  );
}
