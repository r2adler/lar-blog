import {HTag} from '@/components/HTag/HTag'
import styles from './page.module.css'
import {Button} from '@/components/Button/Button';
import {PTag} from '@/components/PTag/PTag';
import { Tag } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <HTag tag={'h1'}>Text</HTag>
      <Button>Buton</Button>
      <Button appearance={'ghost'}>Buton</Button>
      <PTag size={'L'}>Paragraph L</PTag>
      <PTag>Paragraph M</PTag>
      <PTag size={'S'}>Paragraph S</PTag>
      <Tag size={'S'}>Ghost</Tag>
      <Tag size={'M'} color={'red'}>red</Tag>
      <Tag size={'S'} color={'green'}>green</Tag>
      <Tag color={'primary'}>primary</Tag>
    </main>
  )
}
