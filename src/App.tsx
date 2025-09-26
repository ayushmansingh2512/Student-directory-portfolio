
import { useState } from 'react';
import './App.css';  
import img1 from './assets/Studentimages/1.png';
import img3 from './assets/Studentimages/3.png';
import img5 from './assets/Studentimages/5.png';
import img6 from './assets/Studentimages/6.png';
import img9 from './assets/Studentimages/9.png';
import img10 from './assets/Studentimages/10.png';
import img14 from './assets/Studentimages/14.png';
import img15 from './assets/Studentimages/15.png';
import img18 from './assets/Studentimages/18.png';
import img22 from './assets/Studentimages/22.png';
import img24 from './assets/Studentimages/24.png';
import img25 from './assets/Studentimages/25.png';
import img26 from './assets/Studentimages/26.png';
import img27 from './assets/Studentimages/27.png';
import img28 from './assets/Studentimages/28.png';
import img32 from './assets/Studentimages/32.png';
import img33 from './assets/Studentimages/33.png';
import img34 from './assets/Studentimages/34.png';
import img40 from './assets/Studentimages/40.png';
import img41 from './assets/Studentimages/41.png';
import img43 from './assets/Studentimages/43.png';
import img44 from './assets/Studentimages/44.png';
import img46 from './assets/Studentimages/46.png';
import img51 from './assets/Studentimages/51.png';
import img52 from './assets/Studentimages/52.png';
import img55 from './assets/Studentimages/55.png';
import img56 from './assets/Studentimages/56.png';

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
        id: 3, 
        name: 'Bhargwi raj', 
        rollNo: '003', 
        image: img3,
        portfolioLink: 'https://bhargwiraj.github.io/p1/'
      },
  { 
        id: 5, 
        name: 'bhavya', 
        rollNo: '005', 
        image: img5,
        portfolioLink: 'https://bhavya171104.github.io/portfolio/'
      },

            { 
        id: 6, 
        name: 'bhavya tyagi', 
        rollNo: '006', 
        image: img6,
        portfolioLink: 'https://bhavyatyagi013-bit.github.io/portfolio/'
      },
       { 
        id: 9, 
        name: 'Bhumi Bhardwaj', 
        rollNo: '009', 
        image: img9,
        portfolioLink: 'https://portfolio-main-sooty-pi.vercel.app/'
      },
             { 
        id: 10, 
        name: 'Chandra Vijay Singh', 
        rollNo: '010', 
        image: img10,
        portfolioLink: 'https://chandravijaysinghportfolio.netlify.app/'
      },
         { 
        id: 14, 
        name: 'Deepak Sharma', 
        rollNo: '014', 
        image: img14,
        portfolioLink: 'https://deepaksharma-dadhich.github.io/portfolio/ '
      },
             { 
        id: 15, 
        name: 'Deepak Tyagi', 
        rollNo: '015', 
        image: img15,
        portfolioLink: 'https://deepaktyagi2002.github.io/p1/'
      },
      { 
        id: 18, 
        name: 'Deepanshu', 
        rollNo: '018', 
        image: img18,
        portfolioLink: 'https://deepanshu9898.github.io/deepanshu/'
      },
             { 
        id: 22, 
        name: 'Devansh Garg', 
        rollNo: '022', 
        image: img22,
        portfolioLink: 'https://dev981175.github.io/P2/'
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
        id: 26, 
        name: 'Dhruv mittal', 
        rollNo: '026', 
        image: img26,
        portfolioLink: 'https://dhruvmittal7652-star.github.io/dhruvmittal.github.io/'
      },

            { 
        id: 27, 
        name: 'Divya Jha', 
        rollNo: '027', 
        image: img27,
        portfolioLink: 'https://divya2027.github.io/portfolio/'
      },
       { 
        id: 28, 
        name: 'Divyansh Singhal', 
        rollNo: '028', 
        image: img28,
        portfolioLink: 'https://divyanshsinghal1743.github.io/portfolio/'
      },
              { 
        id: 32, 
        name: 'Faisal Khan', 
        rollNo: '032', 
        image: img32,
        portfolioLink: 'https://faisalkhan-fk.github.io/portfolio/'
      },
         { 
        id: 33, 
        name: 'Gagan Bana', 
        rollNo: '033', 
        image: img33,
        portfolioLink: 'https://gaganbana23-dev.github.io/portfolio-/'
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
        id: 41, 
        name: 'Harsh Verma', 
        rollNo: '041', 
        image: img41,
        portfolioLink: 'https://verma0104.github.io/P01/'
      },
      { 
        id: 43, 
        name: 'Hemank Kumar', 
        rollNo: '043', 
        image: img43,
        portfolioLink: 'https://hemank-kumar.netlify.app/'
      },
           { 
        id: 44, 
        name: 'Hemant Singh', 
        rollNo: '044', 
        image: img44,
        portfolioLink: 'https://hemantsingh-hs.github.io/portfolio/'
      },
      { 
        id: 46, 
        name: 'Himanshu Srivastav', 
        rollNo: '046', 
        image: img46,
        portfolioLink: 'https://himanshu-770.github.io/portfolio/'
      },
       { 
        id: 51, 
        name: 'Jatin Kumar', 
        rollNo: '051', 
        image: img51,
        portfolioLink: 'https://techwithjatin.github.io/my_portfolio.io/'
      },
        { 
        id: 52, 
        name: 'Kajal', 
        rollNo: '052', 
        image: img52,
        portfolioLink: 'https://kajalnagar.github.io/KAJAL-PORTFOLIOO/'
      },
      { 
        id: 55, 
        name: 'kali bakshi', 
        rollNo: '055', 
        image: img55,
        portfolioLink: 'https://v0-edgy-portfolio-website.vercel.app/'
      },
       { 
        id: 56, 
        name: 'Kamlakar Tiwari', 
        rollNo: '056', 
        image: img56,
        portfolioLink: 'https://kt-personal-portfolio.netlify.app/ '
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