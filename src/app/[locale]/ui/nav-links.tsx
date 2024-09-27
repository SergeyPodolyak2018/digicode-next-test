'use client';

import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import clsx from 'clsx';
import { LINKS } from '@/app/[locale]/lib/const';
import styles from './nav-links.module.css';
import { useTranslations } from 'next-intl';

export default function NavLinks() {
  const pathname = usePathname();
  const t = useTranslations('HomePage');

  return (
    <>
      {LINKS.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              styles.linck,
              pathname === link.href && styles.active
            )}
          >
            <p className='hidden md:block'>{t(link.name)}</p>
          </Link>
        );
      })}
    </>
  );
}
