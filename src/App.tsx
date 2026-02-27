import About from './sections/About';
import Contact from './sections/Contact';
import FAQAdditional from './sections/FAQAdditional';
import FAQQuiz from './sections/FAQQuiz';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navigation from './sections/Navigation';
import Process from './sections/Process';
import Services from './sections/Services';

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
        <FAQAdditional />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
