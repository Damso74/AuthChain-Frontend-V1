// src/App.tsx
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy loading des composants avec React.lazy et Suspense
const Header = lazy(() => import('./components/Common/Header'));
const Footer = lazy(() => import('./components/Common/Footer'));
const Home = lazy(() => import('./components/Home/Home'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Business = lazy(() => import('./components/Business/Business'));
//const Dashboard = lazy(() => import('./components/Dashboard/DashBoardddd'));
//const Dashboard = lazy(() => import('./components/Dashboard/MonSecret'));
const Settings = lazy(() => import('./components/Settings/UserSettings'));
const Signup = lazy(() => import('./components/Authentication/Signup'));
const About = lazy(() => import('./components/About/About'));
const Document = lazy(() => import('./components/Document/Document'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div className="loading-container">Chargement...</div>}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Document/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
