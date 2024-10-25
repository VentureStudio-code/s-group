// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import MembershipApply from './pages/MembershipApply';
import Events from './pages/Events';
import Webinars from './pages/Webinars';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-the-s-group" element={<About />} />
          <Route path="/s-group-memberships" element={<Membership />} />
          <Route path="/apply-for-s-group-membership" element={<MembershipApply/>} />
          <Route path="/businessnetworkingevents" element={<Events />} />
          <Route path="/s-group-webinars" element={<Webinars />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
