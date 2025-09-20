import type { PropsWithChildren } from 'react';
import styles from './DemoSection.module.css';

type DemoSectionProps = PropsWithChildren<{
  title: string;
  note?: string;
}>;

export function DemoSection({ title, note, children }: DemoSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {note && <p className={styles.note}>{note}</p>}
      <div>{children}</div>
    </section>
  );
}
