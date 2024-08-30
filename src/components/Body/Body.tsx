import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { useStore } from '../store';
import FilterBar from '../FilterBar/FilterBar';
import FilterModal from '../FilterModal/FilterModal';

const beersPerPage = 12

function Body() {

  const [currentPage, setCurrentPage] = useState(1) 
  const { beers, loading, getBeers, filteredBeers } = useStore(); 

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  const lastIndex = currentPage * beersPerPage
  const firstIndex = lastIndex - beersPerPage
  const currentBeers = filteredBeers.length ? filteredBeers.slice(firstIndex, lastIndex) : beers.slice(firstIndex, lastIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='container'>
        <FilterBar />
        <Card beers={currentBeers} loading={loading} />
        <Pagination beersPerPage={beersPerPage} totalbeers={beers.length} paginate={paginate} />
        <FilterModal />
      </div >
    </>
  );
}

export default Body;