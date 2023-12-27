import {HTag} from '@/components/ui/HTag/HTag'
import styles from './page.module.css'
import {Button} from '@/components/ui/Button/Button';
import {PTag} from '@/components/ui/PTag/PTag';
import {Card, Tag} from '@/components';
import cardImg from '@/public/cardImg.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <HTag tag={'h1'}>Text</HTag>
      <Button arrow={'right'}>Buton</Button>
      <Button appearance={'ghost'}>Buton</Button>
      <PTag size={'L'}>Paragraph L</PTag>
      <PTag>Paragraph M</PTag>
      <PTag size={'S'}>Paragraph S</PTag>
      <Tag size={'S'}>Ghost</Tag>
      <Tag size={'M'} color={'red'}>red</Tag>
      <Tag size={'S'} color={'green'}>green</Tag>
      <Tag color={'primary'}>primary</Tag>
      <Card
        img={cardImg}
        tag={'Front-end'}
        like={'4'}
        month={'1'}
        title={'Как работать с CSS Grid'}
        text={'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..  '}
        minutes={'3'}
      />
    </main>
  )
}
