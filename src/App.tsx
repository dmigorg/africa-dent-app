import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import FAQQuiz from './sections/FAQQuiz';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <FAQQuiz />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
