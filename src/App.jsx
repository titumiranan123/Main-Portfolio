/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './App.css'
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import Header from './Component/Header/Header';
import Projects from './Component/Project/Projects';
import About from './Component/About/About';
import Skill from './Component/Skill/Skill';
import Socialmedia from './Component/SocialMedia/Socialmedia';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        section1: document.getElementById('section1').offsetTop,
        section2: document.getElementById('section2').offsetTop,
        section3: document.getElementById('section3').offsetTop
      };

      const scrollPosition = window.scrollY + 200; // Adjust the scroll position offset as needed

      let active = '';

      if (scrollPosition >= sectionOffsets.section1 && scrollPosition < sectionOffsets.section2) {
        active = 'section1';
      } else if (scrollPosition >= sectionOffsets.section2 && scrollPosition < sectionOffsets.section3) {
        active = 'section2';
      } else if (scrollPosition >= sectionOffsets.section3) {
        active = 'section3';
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='md:px-[136px] p-10 lg:px-[136px] md:py-[100px] lg:py-[100px] grid grid-col-1 lg:grid-cols-2 md:grid-cols-1   bg-[rgb(16,24,44)]'>
      <div className='lg:sticky lg:top-12 lg:flex lg:gap-40  lg:flex-col '>
        <Header />
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        <div className=' '>
          <Socialmedia />
        </div>
      </div>
      <div>
        <div id='section1' >
          <About />
        </div>
        <div id='section2' className='mt-[123px]'  >
          <Skill />
        </div>
        <div id='section3' className='mt-10' >
          <div className='sticky top-0 p-4 lg:grid-cols-2 md:grid-cols-1   bg-[rgb(16,24,44)]  font-bold uppercase tracking-widest lg:hidden text-xl text-slate-300 '>Projects</div>
          <Projects />
          <Projects />
          <Projects />
        </div>

      </div>
    </div>
  );
};

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className='hidden md:static lg:block'>
      <ul className='text-white'>
        <li>
          <Link
            className={activeSection === 'section1' ? 'active' : ''}
            onClick={() => scrollToSection('section1')}
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='group flex items-center py-3 '>
              <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
              <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className={activeSection === 'section2' ? 'active' : ''}
            onClick={() => scrollToSection('section2')}
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='group flex items-center py-3 '>
              <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
              <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Skills</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className={activeSection === 'section3' ? 'active' : ''}
            onClick={() => scrollToSection('section3')}
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='group flex items-center py-3 '>
              <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
              <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
// eslint-disable-next-line react/prop-types







export default App;
