import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // ✅ ADD THIS
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage /> {/* ✅ ADD THIS */}
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Counter/>
      <Footer />
    </div>
  );
}

export default App;

