// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Membership from './pages/Membership';
// import MembershipApply from './pages/MembershipApply';
// import Events from './pages/Events';
// import Webinars from './pages/Webinars';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import Disclaimer from './pages/Disclaimer';
// import Termsandcondition from './pages/Termsandcondition';
// import Cart from './pages/Cart';

// const App = () => {


  
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-the-s-group" element={<About />} />
//           <Route path="/s-group-memberships" element={<Membership />} />
//           <Route path="/apply-for-s-group-membership" element={<MembershipApply/>} />
//           <Route path="/businessnetworkingevents" element={<Events />} />
//           <Route path="/s-group-webinars" element={<Webinars />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/s-group-network-pty-ltd-disclaimer" element={<Disclaimer />} />
//           <Route path="/terms-and-condition" element={<Termsandcondition />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSkeleton from './components/SkeletonLoader';

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Membership = lazy(() => import('./pages/Membership'));
const MembershipApply = lazy(() => import('./pages/MembershipApply'));
const Events = lazy(() => import('./pages/Events'));
const Webinars = lazy(() => import('./pages/Webinars'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Termsandcondition = lazy(() => import('./pages/Termsandcondition'));
const Cart = lazy(() => import('./pages/Cart'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-the-s-group" element={<About />} />
            <Route path="/s-group-memberships" element={<Membership />} />
            <Route path="/apply-for-s-group-membership" element={<MembershipApply />} />
            <Route path="/businessnetworkingevents" element={<Events />} />
            <Route path="/s-group-webinars" element={<Webinars />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/s-group-network-pty-ltd-disclaimer" element={<Disclaimer />} />
            <Route path="/terms-and-condition" element={<Termsandcondition />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
