import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pics from '/profile.jpg'
import Profile from './Profile';
import ContactInformation from './ContactInformation';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function App() {
  const [count, setCount] = useState(0);

  const developerName = 'Quennie Sofia A. Bolante';
  const developerDescription = 'A passionate web developer who loves creating beautiful UIs.';
  const contactInfo = {
    email: 'quennie@gmail.com',
    phone: '123-456-7890',
    address: 'San Ramon, Donsol, Sorsogont'
  };
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
  const experiences = [
    {
      title: 'Frontend Developer',
      description: 'Developing and maintaining the front end of the company website.'
    },
    {
      title: 'Web Developer at Web Solutions',
      description: 'Worked on various development projects for clients.'
    }
  ];

  return (
    <>
      <Profile name={developerName} description={developerDescription} imgSrc={pics} />
      <ContactInformation email={contactInfo.email} phone={contactInfo.phone} address={contactInfo.address} />
      <Skills skills={skills} />
      <WorkExperience experiences={experiences} />
    </>
  );
}

export default App;