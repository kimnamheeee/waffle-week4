import { Suspense } from 'react';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <MainPage />
      </Suspense>
    </div>
  );
};

export default App;
