
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Tech from './components/Tech';
import Who from './components/Who';

function App() {
  return (
    <section >
      <section><Nav /></section>
      <section id='about'><Hero /></section>
      <section><Tech /></section>
      <section><Who /></section>
      <section><Footer /></section>


    </section>
  );
}

export default App;
