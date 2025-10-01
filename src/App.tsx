import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';
const DetailPage = lazy(() => import('./pages/DetailPage'));
const MainPage = lazy(() => import('./pages/MainPage'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recipe/:id" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
