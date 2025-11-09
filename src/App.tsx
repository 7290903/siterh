import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import MobileVideo from './components/MobileVideo';
import Projects from './components/Projects';
import Controls from './components/Controls';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Stats id="stats" />
      <Features id="features" />
      <Controls id="controls" />
      <MobileVideo id="mobile" />
      <Projects id="projects" />
      <FAQ id="faq" />
      <Contacts id="contacts" />
    </div>
  );
}

export default App;
