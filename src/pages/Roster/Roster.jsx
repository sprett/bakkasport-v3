import React from 'react';
import Footer from '../../frontend/components/Footer/Footer';
import Navbar from '../../frontend/components/Navbar/Navbar';
import RosterDisplay from '../../frontend/components/Roster/RosterTest';

export const Roster = () => {
  return <div>
      <Navbar />
      <RosterDisplay />
      <Footer />
  </div>;
};


export default Roster