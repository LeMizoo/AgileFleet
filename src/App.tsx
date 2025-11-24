import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Drivers from './pages/Drivers';
import Fuel from './pages/Fuel';
import OtherCosts from './pages/OtherCosts';

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/fuel" element={<Fuel />} />
            <Route path="/other-costs" element={<OtherCosts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#f8fafc'
  },
  main: {
    flex: 1
  }
};

export default App; 
