import { Header } from '../../components/Header';
import { Table } from '../../components/Table';

export function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12'>
      <Header />
      <Table />
    </div>
  )
}