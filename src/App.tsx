import { useState } from 'react';
import './App.css';  
import img1 from './assets/Studentimages/1.png';
import img9 from './assets/Studentimages/9.png';
import img24 from './assets/Studentimages/24.png';
import img25 from './assets/Studentimages/25.png';
import img34 from './assets/Studentimages/34.png';
import img40 from './assets/Studentimages/40.png';
import img46 from './assets/Studentimages/46.png';
import img55 from './assets/Studentimages/55.png';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');



  // Site data array - easily configurable
  const siteData = {
    title: 'Student Portfolio Directory',
    para: 'Kiet MCA Section-B',
    students: [
      { 
        id: 1, 
        name: 'Ayushman Singh', 
        rollNo: '001', 
        image: img1,
        portfolioLink: 'https://ayushman-singh-portfolio.vercel.app'
      },
       { 
        id: 9, 
        name: 'Bhumi Bhardwaj', 
        rollNo: '009', 
        image: img9,
        portfolioLink: 'https://portfolio-main-sooty-pi.vercel.app/'
      },
      { 
        id: 24, 
        name: 'Devvansh gupta', 
        rollNo: '024', 
        image: img24,
        portfolioLink: 'https://deva8126.github.io/p2/'
      },      
      { 
        id: 25, 
        name: 'Dhruv Goel', 
        rollNo: '025', 
        image: img25,
        portfolioLink: 'https://dhruvgoel23.github.io/First_portfolio/'
      },
        { 
        id: 34, 
        name: 'Gaurav Gupta', 
        rollNo: '034', 
        image: img34,
        portfolioLink: 'https://04-gaurav.github.io/My_Portfolio/'
      },
      { 
        id: 40, 
        name: 'Harsh Tiwari', 
        rollNo: '040', 
        image: img40,
        portfolioLink: 'https://harshdev4.github.io/harsh/'
      },
            { 
        id: 46, 
        name: 'Himanshu Srivastav', 
        rollNo: '046', 
        image: img46,
        portfolioLink: 'https://himanshu-770.github.io/portfolio/'
      },
      { 
        id: 52, 
        name: 'kali bakshi', 
        rollNo: '055', 
        image: img55,
        portfolioLink: 'https://v0-edgy-portfolio-website.vercel.app/'
      },
      
    ]
  };

  const filteredStudents = siteData.students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">{siteData.title}</h1>
          <p className="para">{siteData.para}</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name or roll number..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
        <div className="cards-grid">
            {filteredStudents.map(student => (
              <a
                key={student.id}
                href={student.portfolioLink}
                className="card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-image">
                  <img src={student.image} alt={student.name} />
                </div>
                <div className="card-content">
                  <h3 className="card-name">{student.name}</h3>
                  <p className="card-roll">Roll No: {student.rollNo}</p>
                </div>
              </a>
            ))}
          </div>
          
          {filteredStudents.length === 0 && (
            <div className="no-results">
              <p>No students found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;