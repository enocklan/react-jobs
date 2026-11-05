import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <HomeCards />
              <JobListings isHome />
            </>
          }
        />
        <Route path='/jobs' element={<JobListings />} />
      </Routes>
    </div>
  )
}

export default App
