import styles from '@/app/[locale]//breed/all/page.module.css';
import { fetchBreads } from '@/app/[locale]/lib/data';
import CardsAgregator from '@/app/[locale]/ui/cardsAgregator';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Page() {
  const result = await fetchBreads('cat');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CardsAgregator data={result} />
      </div>
    </div>
  );
}
