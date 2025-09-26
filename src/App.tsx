import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X, Mail, ExternalLink, Github, Linkedin, Instagram, Code } from 'lucide-react';

// TypeScript interfaces
interface Student {
  id: number;
  name: string;
  rollNo: string;
  image: string;
  portfolioLink: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  leetcode: string;
}

interface SiteData {
  title: string;
  para: string;
  students: Student[];
}

// Mock images - replace with your actual imports
const img1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face';
const img3 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face';
const img4 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face';
const img5 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face';
const img6 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face';
const img7 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face';
const img9 = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face';
const img10 = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face';

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const controls = useAnimation();

  // Site data array with additional contact info
  const siteData: SiteData = {
    title: 'Student Portfolio Directory',
    para: 'Kiet MCA Section-B',
    students: [
      { 
        id: 1, 
        name: 'Ayushman Singh', 
        rollNo: '001', 
        image: img1,
        portfolioLink: 'https://ayushman-singh-portfolio.vercel.app',
        email: 'ayushman@example.com',
        github: 'https://github.com/ayushman',
        linkedin: 'https://linkedin.com/in/ayushman',
        instagram: 'https://instagram.com/ayushman',
        leetcode: 'https://leetcode.com/ayushman'
      },
      { 
        id: 3, 
        name: 'Bhargwi Raj', 
        rollNo: '003', 
        image: img3,
        portfolioLink: 'https://bhargwiraj.github.io/myresume/',
        email: 'bhargwi@example.com',
        github: 'https://github.com/bhargwiraj',
        linkedin: 'https://linkedin.com/in/bhargwi',
        instagram: 'https://instagram.com/bhargwi',
        leetcode: 'https://leetcode.com/bhargwi'
      },
      { 
        id: 4, 
        name: 'Bhavishya Raj Mishra', 
        rollNo: '004', 
        image: img4,
        portfolioLink: 'https://bhavishyamishra1210-a11y.github.io/bhavishyamishra.github.io/',
        email: 'bhavishya@example.com',
        github: 'https://github.com/bhavishya',
        linkedin: 'https://linkedin.com/in/bhavishya',
        instagram: 'https://instagram.com/bhavishya',
        leetcode: 'https://leetcode.com/bhavishya'
      },
      { 
        id: 5, 
        name: 'Bhavya', 
        rollNo: '005', 
        image: img5,
        portfolioLink: 'https://bhavya171104.github.io/portfolio/',
        email: 'bhavya@example.com',
        github: 'https://github.com/bhavya',
        linkedin: 'https://linkedin.com/in/bhavya',
        instagram: 'https://instagram.com/bhavya',
        leetcode: 'https://leetcode.com/bhavya'
      },
      { 
        id: 6, 
        name: 'Bhavya Tyagi', 
        rollNo: '006', 
        image: img6,
        portfolioLink: 'https://bhavyatyagi013-bit.github.io/portfolio/',
        email: 'bhavyatyagi@example.com',
        github: 'https://github.com/bhavyatyagi',
        linkedin: 'https://linkedin.com/in/bhavyatyagi',
        instagram: 'https://instagram.com/bhavyatyagi',
        leetcode: 'https://leetcode.com/bhavyatyagi'
      },
      { 
        id: 7, 
        name: 'Bhawana Pathak', 
        rollNo: '007', 
        image: img7,
        portfolioLink: 'https://pathakbhawna32.github.io/BHAWANA-PORTFOLIO/',
        email: 'bhawana@example.com',
        github: 'https://github.com/bhawana',
        linkedin: 'https://linkedin.com/in/bhawana',
        instagram: 'https://instagram.com/bhawana',
        leetcode: 'https://leetcode.com/bhawana'
      },
      { 
        id: 9, 
        name: 'Bhumi Bhardwaj', 
        rollNo: '009', 
        image: img9,
        portfolioLink: 'https://portfolio-main-sooty-pi.vercel.app/',
        email: 'bhumi@example.com',
        github: 'https://github.com/bhumi',
        linkedin: 'https://linkedin.com/in/bhumi',
        instagram: 'https://instagram.com/bhumi',
        leetcode: 'https://leetcode.com/bhumi'
      },
      { 
        id: 10, 
        name: 'Chandra Vijay Singh', 
        rollNo: '010', 
        image: img10,
        portfolioLink: 'https://chandravijayportfolio.netlify.app/',
        email: 'chandra@example.com',
        github: 'https://github.com/chandra',
        linkedin: 'https://linkedin.com/in/chandra',
        instagram: 'https://instagram.com/chandra',
        leetcode: 'https://leetcode.com/chandra'
      }
    ]
  };

  const filteredStudents = siteData.students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (student: Student, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedStudent(student);
    setIsBottomSheetOpen(true);
    controls.start({ y: 0 });
  };

  const closeBottomSheet = () => {
    controls.start({ y: "100%" });
    setTimeout(() => {
        setIsBottomSheetOpen(false);
        setSelectedStudent(null);
    }, 300);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #F0EEE6;
          font-family: 'Satoshi', sans-serif;
        }
        .scrollbar-custom::-webkit-scrollbar {
            width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
            background: #E3DACC;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
            background-color: #D97757;
            border-radius: 10px;
            border: 2px solid #E3DACC;
        }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#F0EEE6' }}>
        {/* Header */}
        <header style={{
          background: '#E3DACC',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
          padding: '1rem 0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#D97757',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              {siteData.title}
            </h1>
            <p style={{
              textAlign: 'center',
              fontSize: '1rem',
              color: '#555',
              marginBottom: '1rem',
              fontWeight: '800'
            }}>
              {siteData.para}
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}>
              <input
                type="text"
                placeholder="Search by name or roll number..."
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '12px 20px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '25px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#D97757';
                  e.target.style.boxShadow = '0 0 0 3px rgba(217, 119, 87, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e1e5e9';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: '2rem 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
              padding: '2rem 0'
            }}>
              {filteredStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  onClick={(e: React.MouseEvent) => handleCardClick(student, e)}
                  style={{
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                  className="card"
                >
                  <div style={{
                    width: '90%',
                    height: '400px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '24px'
                  }}>
                    <motion.img 
                      src={student.image} 
                      alt={student.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div style={{ padding: '1rem 0' }}>
                    <motion.h3 
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '0.2rem',
                        color: '#222',
                        transition: 'color 0.3s ease'
                      }}
                      whileHover={{ color: '#D97757' }}
                    >
                      {student.name}
                    </motion.h3>
                    <p style={{
                      color: '#717171',
                      fontSize: '0.9rem',
                      fontWeight: '400'
                    }}>
                      Roll No: {student.rollNo}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredStudents.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '3rem 0',
                color: '#717171'
              }}>
                <p style={{ fontSize: '1.1rem' }}>No students found matching your search.</p>
              </div>
            )}
          </div>
        </main>

        {/* Bottom Sheet */}
        <AnimatePresence>
          {isBottomSheetOpen && selectedStudent && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeBottomSheet}
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 40
                }}
              />
              
              {/* Bottom Sheet */}
              <motion.div
                initial={{ y: "100%" }}
                animate={controls}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 40, stiffness: 200 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.y > 100) {
                    closeBottomSheet();
                  } else {
                    controls.start({ y: 0 });
                  }
                }}
                style={{
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: '#F0EEE6',
                  borderTopLeftRadius: '24px',
                  borderTopRightRadius: '24px',
                  padding: '1.5rem',
                  zIndex: 50,
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 -10px 30px rgba(0,0,0,0.1)'
                }}
              >
                {/* Header for drag handle and close button */}
                <div style={{
                  position: 'relative',
                  paddingBottom: '1.5rem',
                  flexShrink: 0
                }}>
                  {/* Drag Handle */}
                  <div style={{
                    width: '48px',
                    height: '6px',
                    backgroundColor: '#D97757',
                    borderRadius: '3px',
                    margin: '0 auto 1.5rem',
                    opacity: 0.3
                  }}></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeBottomSheet}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#E3DACC',
                      border: 'none',
                      color: '#555',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.target.style.backgroundColor = '#D97757'}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.target.style.backgroundColor = '#E3DACC'}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div style={{
                  overflowY: 'auto',
                  paddingTop: '0',
                  paddingBottom: '1.5rem',
                  flexGrow: 1
                }}
                className="scrollbar-custom"
                >
                  {/* Student Info */}
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto 1rem',
                        border: '4px solid #D97757',
                        boxShadow: '0 4px 15px rgba(217, 119, 87, 0.2)'
                      }}
                    >
                      <img 
                        src={selectedStudent.image} 
                        alt={selectedStudent.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#222',
                      marginBottom: '0.5rem'
                    }}>
                      {selectedStudent.name}
                    </h2>
                    <p style={{ color: '#717171', fontSize: '1rem' }}>
                      Roll No: {selectedStudent.rollNo}
                    </p>
                  </div>

                  {/* Contact Sections */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Email Section */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      style={{
                        backgroundColor: '#E3DACC',
                        padding: '1.2rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      <h3 style={{
                        fontWeight: '600',
                        color: '#222',
                        marginBottom: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Mail size={20} style={{ color: '#D97757' }} />
                        Email
                      </h3>
                      <button
                        onClick={() => window.open(`mailto:${selectedStudent.email}`)}
                        style={{
                          color: '#D97757',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          fontSize: '1rem'
                        }}
                      >
                        {selectedStudent.email}
                      </button>
                    </motion.div>

                    {/* Portfolio Section */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      style={{
                        backgroundColor: '#E3DACC',
                        padding: '1.2rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      <h3 style={{
                        fontWeight: '600',
                        color: '#222',
                        marginBottom: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <ExternalLink size={20} style={{ color: '#D97757' }} />
                        Portfolio
                      </h3>
                      <button
                        onClick={() => handleLinkClick(selectedStudent.portfolioLink)}
                        style={{
                          color: '#D97757',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          wordBreak: 'break-all',
                          fontSize: '0.9rem'
                        }}
                      >
                        {selectedStudent.portfolioLink}
                      </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        backgroundColor: '#E3DACC',
                        padding: '1.2rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      <h3 style={{
                        fontWeight: '600',
                        color: '#222',
                        marginBottom: '1rem'
                      }}>
                        Social Links
                      </h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.75rem'
                      }}>
                        {[
                          { icon: Github, name: 'GitHub', link: selectedStudent.github, color: '#333' },
                          { icon: Linkedin, name: 'LinkedIn', link: selectedStudent.linkedin, color: '#0077b5' },
                          { icon: Instagram, name: 'Instagram', link: selectedStudent.instagram, color: '#e4405f' },
                          { icon: Code, name: 'LeetCode', link: selectedStudent.leetcode, color: '#f89f1b' }
                        ].map(({ icon: Icon, name, link, color }) => (
                          <motion.button
                            key={name}
                            onClick={() => handleLinkClick(link)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0.75rem',
                              backgroundColor: '#F0EEE6',
                              borderRadius: '12px',
                              border: '1px solid rgba(217, 119, 87, 0.2)',
                              cursor: 'pointer',
                              color: '#222',
                              gap: '0.5rem',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                              const target = e.currentTarget as HTMLButtonElement;
                              target.style.backgroundColor = '#D97757';
                              target.style.color = 'white';
                              target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                              const target = e.currentTarget as HTMLButtonElement;
                              target.style.backgroundColor = '#F0EEE6';
                              target.style.color = '#222';
                              target.style.transform = 'translateY(0)';
                            }}
                          >
                            <Icon size={18} style={{ color }} />
                            <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{name}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
