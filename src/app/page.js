import styles from './page.module.css';
import Header from '@/components/header/Header';
import Filter from '@/components/filter/Filter';
import BlockItem from '@/components/blockItem/BlockItem';
import Proposal from '@/components/proposal/proposal';
import Pagination from '@/components/pagination/Pagination';
export default function Home() {
  //console.log(item);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <Filter />
        <div className='items'>
          {[...Array(9)].map((item, index) => {
            return <BlockItem key={`_${index}`} />;
          })}
        </div>
        {/* <Proposal/> */}
        <Pagination/>
        
      </main>
    </>
  );
}
