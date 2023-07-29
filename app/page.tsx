import Image from 'next/image';
import { Hero } from '@/components';
import CustomButton from '../components/CustomButton';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filters-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="air" />
          </div>
        </div>
      </div>
    </main>
  );
}
