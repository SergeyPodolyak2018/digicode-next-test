import React from 'react';
import { fetchAgregatedDataBreeds } from '@/app/[locale]/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from '@/app/[locale]/breed/cats/[id]/page.module.css';
import InfoCard from '@/app/[locale]/ui/infoCard';
import { UNIT_FIELDS } from '@/app/[locale]/lib/const';

export const metadata: Metadata = {
  title: 'Person data agregation',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchAgregatedDataBreeds(id, 'dog');

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <InfoCard
        data={data}
        fields={UNIT_FIELDS[data.data.type]}
      />
    </div>
  );
}
