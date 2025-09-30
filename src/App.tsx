import { useState } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, Mail, ExternalLink, Github, Linkedin, Instagram, Code, Sun, Moon } from 'lucide-react';
import Lottie from "lottie-react";
import './App.css';
import './new.css';
import { useTheme } from './useTheme';
import animationData from "./assets/Studentimages/Error_404.json";
import img1 from './assets/Studentimages/1.png';
import img3 from './assets/Studentimages/3.png';
import img4 from './assets/Studentimages/4.png';
import img5 from './assets/Studentimages/5.png';
import img6 from './assets/Studentimages/6.png';
import img7 from './assets/Studentimages/7.png';
import img9 from './assets/Studentimages/9.png';
import img10 from './assets/Studentimages/10.png';
import img12 from './assets/Studentimages/12.png';
import img14 from './assets/Studentimages/14.png';
import img15 from './assets/Studentimages/15.png';
import img17 from './assets/Studentimages/17.png';
import img18 from './assets/Studentimages/18.png';
import img19 from './assets/Studentimages/19.png';
import img20 from './assets/Studentimages/20.png';
import img22 from './assets/Studentimages/22.png';
import img23 from './assets/Studentimages/23.png';
import img24 from './assets/Studentimages/24.png';
import img25 from './assets/Studentimages/25.png';
import img26 from './assets/Studentimages/26.png';
import img27 from './assets/Studentimages/27.png';
import img28 from './assets/Studentimages/28.png';
import img29 from './assets/Studentimages/29.png';
import img32 from './assets/Studentimages/32.png';
import img33 from './assets/Studentimages/33.png';
import img34 from './assets/Studentimages/34.png';
import img35 from './assets/Studentimages/35.png';
import img40 from './assets/Studentimages/40.png';
import img41 from './assets/Studentimages/41.png';
import img42 from './assets/Studentimages/42.png';
import img43 from './assets/Studentimages/43.png';
import img44 from './assets/Studentimages/44.png';
import img46 from './assets/Studentimages/46.png';
import img48 from './assets/Studentimages/48.png';
import img51 from './assets/Studentimages/51.png';
import img52 from './assets/Studentimages/52.png';
import img55 from './assets/Studentimages/55.png';
import img56 from './assets/Studentimages/56.png';
import img59 from './assets/Studentimages/59.png';

interface Student {
  id: number;
  name: string;
  rollNo: string;
  image: string | React.ReactNode;
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

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const controls = useDragControls();

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
        email: 'ayushmansingh2512@gmail.com',
        github: 'https://github.com/ayushmansingh2512',
        linkedin: 'https://www.linkedin.com/in/ayushman-singh-9a6244265',
        instagram: 'https://www.instagram.com/ayushman_singh_red/?hl=en',
        leetcode: 'https://leetcode.com/u/ayushmansingh2512/'
      },
      {
        id: 2,
        name: 'Bhanu Sharan Yadav',
        rollNo: '002',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://bhanusharanyadav.github.io/portfolio/',
        email: 'bhanusharanyadav@gmail.com',
        github: 'https://github.com/bhanusharanyadav',
        linkedin: 'https://www.linkedin.com/feed/',
        instagram: '',
        leetcode: 'https://leetcode.com/u/bhanusharanyadav/'
        },
      {
        id: 3,
        name: 'Bhargwi raj',
        rollNo: '003',
        image: img3,
        portfolioLink: 'https://bhargwiraj.github.io/myresume/',
        email: 'bhargwishrivastava@gmail.com',
        github: 'https://github.com/Bhargwiraj',
        linkedin: 'https://www.linkedin.com/in/bhargwiraj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/s_a__a_shrivastava?igsh=MTV6cDl1bG1rNDF0aA==',
        leetcode: ''
      },
      {
        id: 4,
        name: 'Bhavishya Raj Mishra ',
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
        email: 'aggarwalbhavya83@gmail.com',
        github: 'https://bhavya171104.github.io/portfolio/',
        linkedin: 'https://www.linkedin.com/feed/?trk=sem-ga_campid.22935434840_asid._crid._kw._d.c_tid._n.x_mt._geo.9298366',
        instagram: '',
        leetcode: 'https://leetcode.com/u/BHAVYA171104/'
      },
      {
        id: 6,
        name: 'bhavya tyagi',
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
        email: 'pathakbhawna32@gmail.com',
        github: 'https://github.com/pathakbhawna32',
        linkedin: 'https://www.linkedin.com/in/bhawna-pathak-577098236/',
        instagram: '',
        leetcode: 'https://leetcode.com/u/BhawanaPathak/'
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
        portfolioLink: 'https://chandravijayportfolio.netlify.app',
        email: 'schandravijay46@gmail.com',
        github: 'https://github.com/chandravijaysingh',
        linkedin: 'https://www.linkedin.com/in/chandra-vijay-singh-5ab673248',
        instagram: 'https://www.instagram.com/rajput_raaj02?igsh=aDN5OHhtajc2dTd1',
        leetcode: 'https://share.google/M4LBQqlmv0mwEu0q2'
      },
      {
        id: 11,
        name: 'Chirag Sharma',
        rollNo: '011',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://chiragbhvp.github.io/Chirag-Portfolio/',
        email: 'ragingchirag@gmail.com',
        github: 'https://github.com/chiragbhvp',
        linkedin: 'https://www.linkedin.com/in/chirag-sharma-9823a430b',
        instagram: '',
        leetcode: 'https://leetcode.com/u/chiragbhvp/'
      },
      {
        id: 12,
        name: 'Dazy Baliyan',
        rollNo: '012',
        image: img12,
        portfolioLink: 'https://dazy1918.github.io/dazy-portfolio/',
        email: 'baliyandazy22@gmail.com',
        github: 'https://github.com/Dazy1819',
        linkedin: 'https://www.linkedin.com/i.n/dazy-baliyan-173758259',
        instagram: '',
        leetcode: 'https://leetcode.com/u/Dazy1918/'
        },
      {
        id: 13,
        name: 'Deepak',
        rollNo: '013',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://student-deepak.github.io/Portfolio/',
        email: 'deepak97562@gmail.com',
        github: 'https://github.com/Student-Deepak?tab=repositories',
        linkedin: 'https://www.linkedin.com/in/deepak-saloniya-195271309/?originalSubdomain=in',
        instagram: '',
        leetcode: ''
      },
      {
        id: 14,
        name: 'Deepak Sharma',
        rollNo: '014',
        image: img14,
        portfolioLink: 'https://deepaksharma-dadhich.github.io/portfolio/ ',
        email: 'deepak@example.com',
        github: 'https://github.com/deepak',
        linkedin: 'https://linkedin.com/in/deepak',
        instagram: 'https://instagram.com/deepak',
        leetcode: 'https://leetcode.com/deepak'
      },
      {
        id: 15,
        name: 'Deepak Tyagi',
        rollNo: '015',
        image: img15,
        portfolioLink: 'https://deepaktyagi2002.github.io/p1/',
        email: 'deepaktyagi@example.com',
        github: 'https://github.com/deepaktyagi',
        linkedin: 'https://linkedin.com/in/deepaktyagi',
        instagram: 'https://instagram.com/deepaktyagi',
        leetcode: 'https://leetcode.com/deepaktyagi'
      },
      {
        id: 17,
        name: 'Deepanshi Mishra',
        rollNo: '017',
        image: img17,
        portfolioLink: 'https://portfolio-i5xq-pkxk701et-deepanshi8006s-projects.vercel.app/',
        email: 'mishradeepanshi8006@gmail.com',
        github: 'https://github.com/deepanshi8006',
        linkedin: 'https://www.linkedin.com/in/deepanshi-mishra-53a9362a9/',
        instagram: '',
        leetcode: 'https://leetcode.com/u/deepanshi8006/'
      },
      {
        id: 18,
        name: 'Deepanshu',
        rollNo: '018',
        image: img18,
        portfolioLink: 'https://deepanshu9898.github.io/deepanshu/',
        email: 'deepanshu@example.com',
        github: 'https://github.com/deepanshu',
        linkedin: 'https://linkedin.com/in/deepanshu',
        instagram: 'https://instagram.com/deepanshu',
        leetcode: 'https://leetcode.com/deepanshu'
      },
      {
        id: 19,
        name: 'Deepika Sharma ',
        rollNo: '019',
        image: img19,
        portfolioLink: 'https://deepikasharma-04.github.io/Project/',
        email: 'dee001sharma@gmai.com',
        github: 'https://github.com/Deepikasharma-04',
        linkedin: 'www.linkedin.com/in/deepikasharma1704',
        instagram: '',
        leetcode: ''
      },
      {
        id: 20,
        name: 'Dev deep mishra',
        rollNo: '020',
        image: img20,
        portfolioLink: 'https://portfolio-one-liart-pzgho3e3kz.vercel.app/',
        email: 'dev.devdeep24@gmail.com',
        github: 'https://github.com/devdevdeep24-tech',
        linkedin: 'https://www.linkedin.com/in/devdeep-mishra-a41576275/',
        instagram: 'https://www.instagram.com/thedevdeepmishraa_/',
        leetcode: ''
      },
      {
        id: 21,
        name: 'Devansh Bhardwaj',
        rollNo: '021',
        image: <Lottie animationData={animationData} />,
        portfolioLink: '#',
        email: 'dev2004bhardwaj@gmail.com',
        github: 'https://github.com/Devansh1Bhardwaj',
        linkedin: 'www.linkedin.com/in/devanshbhardwaj-43ab17258',
        instagram: '',
        leetcode: ''
      },
      {
        id: 22,
        name: 'Devansh Garg',
        rollNo: '022',
        image: img22,
        portfolioLink: 'https://dev981175.github.io/P2/',
        email: 'devansh@example.com',
        github: 'https://github.com/devansh',
        linkedin: 'https://linkedin.com/in/devansh',
        instagram: 'https://instagram.com/devansh',
        leetcode: 'https://leetcode.com/devansh'
      },
      {
        id: 23,
        name: 'Devansh Narvariya',
        rollNo: '023',
        image: img23,
        portfolioLink: 'https://devanshnarvariya.github.io/devanshportfolio/',
        email: 'devanshnarvariya2848@gmail.com',
        github: 'https://github.com/DevanshNarvariya',
        linkedin: 'https://linkedin.com/in/devanshnarvariya480/',
        instagram: '',
        leetcode: 'https://leetcode.com/u/devansh_480/'
      },
      {
        id: 24,
        name: 'Devvansh gupta',
        rollNo: '024',
        image: img24,
        portfolioLink: 'https://deva8126.github.io/p2/',
        email: 'devvansh@example.com',
        github: 'https://github.com/devvansh',
        linkedin: 'https://linkedin.com/in/devvansh',
        instagram: 'https://instagram.com/devvansh',
        leetcode: 'https://leetcode.com/devvansh'
      },
      {
        id: 25,
        name: 'Dhruv Goel',
        rollNo: '025',
        image: img25,
        portfolioLink: 'https://dhruvgoel23.github.io/First_portfolio/ ',
        email: 'dhruvg775@gmail.com',
        github: 'https://github.com/dhruvgoel23',
        linkedin: 'https://www.linkedin.com/in/i-am-dhruv-goel ',
        instagram: 'https://www.instagram.com/iamdhruvgoel',
        leetcode: ''
        },
      {
        id: 26,
        name: 'Dhruv Mittal',
        rollNo: '026',
        image: img26,
        portfolioLink: 'https://dhruvmittal7652-star.github.io/dhruvmittal.github.io/',
        email: 'dhruvmittal7652@gmail.com',
        github: 'https://github.com/dhruvmittal7652-star/dhruvmittal.github.io',
        linkedin: 'https://www.linkedin.com/in/dhruv-mittal-b28805250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/dhruv__mittal__?igsh=NnI5amtmNmM0ampx',
        leetcode: 'www.leetcode.com/'
      },
      {
        id: 27,
        name: 'Divya Jha',
        rollNo: '027',
        image: img27,
        portfolioLink: 'https://divya2027.github.io/portfolio/',
        email: 'divyajha9838@gmail.com',
        github: 'https://github.com/Divya2027',
        linkedin: 'https://www.linkedin.com/in/divyajha-webdev/',
        instagram: 'https://www.instagram.com/divvya326/ ',
        leetcode: 'https://leetcode.com/u/divya_jh25/ '
      },
      {
        id: 28,
        name: 'Divyansh Singhal',
        rollNo: '028',
        image: img28,
        portfolioLink: 'https://divyanshsinghal1743.github.io/portfolio/',
        email: 'divyansh@example.com',
        github: 'https://github.com/divyansh',
        linkedin: 'https://linkedin.com/in/divyansh',
        instagram: 'https://instagram.com/divyansh',
        leetcode: 'https://leetcode.com/divyansh'
      },
   
      {
        id: 29,
        name: 'Eeshu Bhardwaj',
        rollNo: '029',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://portfolio-github-io-omega-nine.vercel.app/',
        email: 'bhardwaj.eeshu123@gmail.com',
        github: 'https://github.com/Eeshubhardwaj',
        linkedin: 'https://www.linkedin.com/in/eeshu-bhardwaj ',
        instagram: 'https://www.instagram.com/eeshu.bhardwaj1902',
        leetcode: ''
        },
      {
        id: 31,
        name: 'Faisal Khan',
        rollNo: '031',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://faisalkhan02.github.io/',
        email: 'faisal.dataanalyst@gmail.com',
        github: 'https://github.com/faisalkhan02',
        linkedin: 'https://www.linkedin.com/in/faisal-khan-77690b249/',
        instagram: '',
        leetcode: ''
      },
      {
        id: 32,
        name: 'Faisal Khan',
        rollNo: '032',
        image: img32,
        portfolioLink: 'https://faisalkhan-fk.github.io/portfolio/',
        email: 'faisalkhan7863030@gmail.com',
        github: 'https://github.com/faisalkhan-fk',
        linkedin: 'https://www.linkedin.com/public-profile/settings',
        instagram: 'https://www.instagram.com/faisal.25161094?igsh=MTNkcDEzN3N2dzY5ZQ==',
        leetcode: 'https://leetcode.com/u/jR7OY6xwAb/'
      },
      {
        id: 33,
        name: 'Gagan Bana',
        rollNo: '033',
        image: img33,
        portfolioLink: 'https://gaganbana23-dev.github.io/portfolio-/',
        email: 'gagan@example.com',
        github: 'https://github.com/gagan',
        linkedin: 'https://linkedin.com/in/gagan',
        instagram: 'https://instagram.com/gagan',
        leetcode: 'https://leetcode.com/gagan'
      },
      {
        id: 34,
        name: 'Gaurav Gupta',
        rollNo: '034',
        image: img34,
        portfolioLink: 'https://04-gaurav.github.io/My_Portfolio/',
        email: 'gaurav@example.com',
        github: 'https://github.com/gaurav',
        linkedin: 'https://linkedin.com/in/gaurav',
        instagram: 'https://instagram.com/gaurav',
        leetcode: 'https://leetcode.com/gaurav'
      },
      {
        id: 35,
        name: 'Gaurav Gupta',
        rollNo: '035',
        image: img35,
        portfolioLink: 'https://gauravgupta2005.github.io/portfolio/',
        email: 'gauravg@example.com',
        github: 'https://github.com/gauravg',
        linkedin: 'https://linkedin.com/in/gauravg',
        instagram: 'https://instagram.com/gauravg',
        leetcode: 'https://leetcode.com/gauravg'
      },
      {
        id: 36,
        name: 'Gaurav Tyagi',
        rollNo: '036',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'gauravtyagiportfolio.netlify.app',
        email: 'gaurav.25161098@kiet.edu',
        github: 'gauravtyagi.gethub.it',
        linkedin: 'www.linkedin.com/in/gaurav-tyagi-991586387',
        instagram: '',
        leetcode: ''
      },
      {
        id: 39,
        name: 'Harsh Joshi',
        rollNo: '039',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://harshjoshi104.github.io/index.html',
        email: 'vasuharsh501@gmail.com',
        github: 'https://github.com/Harshjoshi104',
        linkedin: 'https://www.linkedin.com/in/harsh-joshi-7086252b4/',
        instagram: '',
        leetcode: ''
      },
      {
        id: 40,
        name: 'Harsh Tiwari',
        rollNo: '040',
        image: img40,
        portfolioLink: 'https://harshdev4.github.io/harsh/',
        email: 'harsh@example.com',
        github: 'https://github.com/harsh',
        linkedin: 'https://linkedin.com/in/harsh',
        instagram: 'https://instagram.com/harsh',
        leetcode: 'https://leetcode.com/harsh'
      },
      {
        id: 41,
        name: 'Harsh Verma',
        rollNo: '041',
        image: img41,
        portfolioLink: 'https://verma0104.github.io/P01/ ',
        email: 'vermaharsh438@gmail.com',
        github: 'https://github.com/Verma0104 ',
        linkedin: 'https://www.linkedin.com/in/harsh-verma-22aa31383/ ',
        instagram: '  ',
        leetcode: 'https://leetcode.com/u/harshverma0104/ '
      },
      {
        id: 42,
        name: 'Harshit saini',
        rollNo: '042',
        image: img42,
        portfolioLink: 'https://harshitsaini-2004.github.io/',
        email: 'harshit@example.com',
        github: 'https://github.com/harshit',
        linkedin: 'https://linkedin.com/in/harshit',
        instagram: 'https://instagram.com/harshit',
        leetcode: 'https://leetcode.com/harshit'
      },
      {
        id: 43,
        name: 'Hemank Kumar',
        rollNo: '043',
        image: img43,
        portfolioLink: 'https://hemank-kumar.netlify.app/',
        email: 'hemank.fsu@gmail.com',
        github: 'https://github.com/Hemank-Kumar',
        linkedin: 'https://linkedin.com/in/hemank-kumar',
        instagram: 'https://instagram.com/hemank_kumar_',
        leetcode: 'https://leetcode.com/Hemank_Kumar_/'
      },
      {
        id: 44,
        name: 'Hemant Singh',
        rollNo: '044',
        image: img44,
        portfolioLink: 'https://hemantsingh-hs.github.io/portfolio/',
        email: 'singhemant363@gmail.com',
        github: 'https://github.com/Hemantsingh-hs/',
        linkedin: 'https://www.linkedin.com/in/hemant-singh12682b233',
        instagram: 'https://www.instagram.com/hemant_singh1.33/',
        leetcode: '#'
      },
      {
        id: 46,
        name: 'Himanshu Srivastav',
        rollNo: '046',
        image: img46,
        portfolioLink: 'https://himanshu-770.github.io/portfolio/',
        email: 'himanshu@example.com',
        github: 'https://github.com/himanshu',
        linkedin: 'https://linkedin.com/in/himanshu',
        instagram: 'https://instagram.com/himanshu',
        leetcode: 'https://leetcode.com/himanshu'
      },
      {
        id: 48,
        name: 'Ishika Tyagi',
        rollNo: '048',
        image: img48,
        portfolioLink: 'https://tyagiishika609-bot.github.io/ISHIKATYAGI.PORTFOLIO/',
        email: 'tyagiishika609@gmail.com',
        github: 'https://github.com/tyagiishika609-bot',
        linkedin: 'https://www.linkedin.com/in/ishika-tyagi-558060386/',
        instagram: '',
        leetcode: 'https://leetcode.com/u/ISHIKATYAGI_13/'
      },
      {
        id: 50,
        name: 'Jagriti gupta',
        rollNo: '050',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://jagriti125.github.io/portfolio.github.io/',
        email: 'jagritigupta219@gmail.com',
        github: 'https://github.com/Jagriti125',
        linkedin: 'https://www.linkedin.com/in/jagriti-gupta-297566262/',
        instagram: '',
        leetcode: ''
      },
      {
        id: 51,
        name: 'Jatin Kumar',
        rollNo: '051',
        image: img51,
        portfolioLink: 'https://techwithjatin.github.io/my_portfolio.io/ ',
        email: 'jatinkumar140703@gmail.com',
        github: 'https://github.com/techwithjatin ',
        linkedin: 'https://www.linkedin.com/in/jatin-kumar191/ ',
        instagram: 'https://www.instagram.com/jatinkumar191/ ',
        leetcode: ''
      },
      {
        id: 52,
        name: 'Kajal',
        rollNo: '052',
        image: img52,
        portfolioLink: 'https://kajalnagar.github.io/KAJAL-PORTFOLIOO/',
        email: 'nagarkajal420@gmail.com',
        github: 'https://github.com/Kajalnagar',
        linkedin: 'https://www.linkedin.com/in/kajal-nagar-520641385',
        instagram: '',
        leetcode: 'https://leetcode.com/'
      },
      {
        id: 57,
        name: 'Kanhaiya Pal',
        rollNo: '057',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://kanha642.github.io/MY-PORTFOLIO/',
        email: 'kanhapal642@gmail.com',
        github: 'https://github.com/KANHA642',
        linkedin: 'www.linkedin.com/in/kanhaiya-pal-b8557b371',
        instagram: '',
        leetcode: ''
      },
        {
        id: 55,
        name: 'kali bakshi',
        rollNo: '055',
        image: img55,
        portfolioLink: 'https://v0-edgy-portfolio-website.vercel.app/',
        email: 'kali@example.com',
        github: 'https://github.com/kali',
        linkedin: 'https://linkedin.com/in/kali',
        instagram: 'https://instagram.com/kali',
        leetcode: 'https://leetcode.com/kali'
      },
      {
        id: 56,
        name: 'Kamlakar Tiwari',
        rollNo: '056',
        image: img56,
        portfolioLink: 'https://kt-personal-portfolio.netlify.app/',
        email: 'mejk768@gmail.com',
        github: 'https://github.com/KT7890',
        linkedin: 'https://www.linkedin.com/in/kamlakar-tiwari/',
        instagram: 'https://www.instagram.com/kwmlakar/',
        leetcode: 'https://leetcode.com/u/kwmlakar/'
        },
      {
        id: 59,
        name: 'Karmik Tyagi',
        rollNo: '059',
        image: img59,
        portfolioLink: 'https://karmiktyagi.github.io/p2/ ',
        email: 'karmiktyagi@gmail.com',
        github: 'https://github.com/Karmiktyagi ',
        linkedin: 'https://www.linkedin.com/in/karmik-tyagi-506583276/ ',
        instagram: 'https://www.instagram.com/karmiktyagi/ ',
        leetcode: 'https://leetcode.com/u/karmiktyagi/ '
      },
      {
        id: 60,
        name: 'Kartik Madan',
        rollNo: '060',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://calm-ocean.github.io/Portfolio/',
        email: 'madankartik48@gmail.com',
        github: 'https://github.com/Calm-Ocean',
        linkedin: 'https://www.linkedin.com/in/kartik-madan-4a8235260',
        instagram: 'https://www.instagram.com/kartikmadan.21?igsh=MTFjdDB4M3Njb3QzbQ==',
        leetcode: 'https://leetcode.com/u/madankartik48/'
      },
      {
        id: 61,
        name: 'Kashika Maheshwari',
        rollNo: '061',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://github.com/Itskashika/itskashika.github.io/blob/main/km.jpg',
        email: 'maheshwarikashika212@gmail.com',
        github: 'https://github.com/Itskashika',
        linkedin: 'https://www.linkedin.com/in/kashika-maheshwari-6b7b05251',
        instagram: '',
        leetcode: 'https://leetcode.com/u/kashika212/'
      },
      {
        id: 62,
        name: 'kaushal kumar',
        rollNo: '062',
        image: <Lottie animationData={animationData} />,
        portfolioLink: 'https://kaushal0402.github.io/portfolio',
        email: 'nitinkushavah08@gmail.com',
        github: 'https://github.com/kaushal0402',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        leetcode: ''
      },
    
    ]
  };

  const filteredStudents = siteData.students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (student: Student, e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setSelectedStudent(student);
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = (): void => {
    setIsBottomSheetOpen(false);
    setTimeout(() => setSelectedStudent(null), 300);
  };

  const handleLinkClick = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className={`app ${theme}`}>
      <motion.header className="header">
        <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="logo">{siteData.title}</h1>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </div>
          <p className="para">{siteData.para}</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name or roll number..."
              className="search-input"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </motion.header>

      <main className="main">
        <div className="container">
          <div className="cards-grid">
            {filteredStudents.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={(e) => handleCardClick(student, e)}
                className="card"
              >
                <div className="card-image">
                  {typeof student.image === 'string' ? (
                    <motion.img
                      src={student.image}
                      alt={student.name}
                      whileHover={{ scale: 1.05 }}
                    />
                  ) : (
                    <div className="lottie-container">{student.image}</div>
                  )}
                </div>
                <div className="card-content">
                  <motion.h3
                    className="card-name"
                    whileHover={{ color: 'var(--primary-color)' }}
                  >
                    {student.name}
                  </motion.h3>
                  <p className="card-roll">Roll No: {student.rollNo}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="no-results">
              <p>No students found matching your search.</p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {isBottomSheetOpen && selectedStudent && (
            <>
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
                  zIndex: 40,
                }}
              />

              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.2 }}
                dragMomentum={false}
                dragControls={controls}
                onDragEnd={(_, info) => {
                  if (info.offset.y > 150) {
                    closeBottomSheet();
                  }
                }}
                style={{
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: theme === 'light' ? 'var(--bottom-sheet-bg-light)' : 'var(--bottom-sheet-bg-dark)',
                  borderTopLeftRadius: '24px',
                  borderTopRightRadius: '24px',
                  zIndex: 50,
                  height: '85vh',
                  maxHeight: '85vh',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
                }}
              >
                {/* Header with drag handle - Fixed */}
                <div
                  onPointerDown={(e) => controls.start(e)}
                  style={{
                    cursor: 'grab',
                    padding: '1rem 1.5rem 0.5rem',
                    flexShrink: 0,
                    backgroundColor: theme === 'light' ? 'var(--bottom-sheet-header-bg-light)' : 'var(--bottom-sheet-header-bg-dark)',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '6px',
                      backgroundColor: 'var(--primary-color)',
                      borderRadius: '3px',
                      margin: '0 auto 1.5rem',
                      opacity: 0.3,
                    }}
                  ></div>

                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <h2
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: theme === 'light' ? 'var(--text-light)' : 'var(--text-dark)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {selectedStudent.name}
                    </h2>
                    <p style={{ color: theme === 'light' ? 'var(--card-roll-light)' : 'var(--card-roll-dark)', fontSize: '1rem' }}>
                      Roll No: {selectedStudent.rollNo}
                    </p>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={closeBottomSheet}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px',
                    borderRadius: 'none',
                    backgroundColor: theme === 'light' ? 'var(--bottom-sheet-btn-bg-light)' : 'var(--bottom-sheet-btn-bg-dark)',
                    border: 'none',
                    color: theme === 'light' ? 'var(--bottom-sheet-btn-color-light)' : 'var(--bottom-sheet-btn-color-dark)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                  }}
                >
                  <X size={20} />
                </button>

                {/* Scrollable content */}
                <div
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 1.5rem 2rem',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                      paddingBottom: '2rem',
                    }}
                  >
                    {/* Profile Image */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--primary-color)',
                        boxShadow: '0 4px 12px rgba(217, 119, 87, 0.2)'
                      }}>
                        {typeof selectedStudent.image === 'string' ? (
                          <img
                            src={selectedStudent.image}
                            alt={selectedStudent.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="lottie-container">{selectedStudent.image}</div>
                        )}
                      </div>
                    </motion.div>

                    {/* Email Section */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      style={{
                        backgroundColor: theme === 'light' ? 'var(--header-bg-light)' : 'var(--header-bg-dark)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: '600',
                          color: theme === 'light' ? 'var(--text-light)' : 'var(--text-dark)',
                          marginBottom: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '1.1rem'
                        }}
                      >
                        <Mail size={20} style={{ color: 'var(--primary-color)' }} />
                        Email
                      </h3>
                      <button
                        onClick={() => window.open(`mailto:${selectedStudent.email}`)}
                        style={{
                          color: 'var(--primary-color)',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          fontSize: '1rem',
                          wordBreak: 'break-all',
                          textAlign: 'left',
                          padding: 0
                        }}
                      >
                        {selectedStudent.email}
                      </button>
                    </motion.div>

                    {/* Portfolio Section */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        backgroundColor: theme === 'light' ? 'var(--header-bg-light)' : 'var(--header-bg-dark)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: '600',
                          color: theme === 'light' ? 'var(--text-light)' : 'var(--text-dark)',
                          marginBottom: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '1.1rem'
                        }}
                      >
                        <ExternalLink size={20} style={{ color: 'var(--primary-color)' }} />
                        Portfolio
                      </h3>
                      <button
                        onClick={() => handleLinkClick(selectedStudent.portfolioLink)}
                        style={{
                          color: 'var(--primary-color)',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          wordBreak: 'break-all',
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          padding: 0
                        }}
                      >
                        {selectedStudent.portfolioLink}
                      </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      style={{
                        backgroundColor: theme === 'light' ? 'var(--header-bg-light)' : 'var(--header-bg-dark)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: '600',
                          color: theme === 'light' ? 'var(--text-light)' : 'var(--text-dark)',
                          marginBottom: '1.5rem',
                          fontSize: '1.1rem'
                        }}
                      >
                        Social Links
                      </h3>
                      
                      {/* First Row: GitHub and LinkedIn */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <motion.button
                          onClick={() => handleLinkClick(selectedStudent.github)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            backgroundColor: theme === 'light' ? 'var(--social-btn-bg-light)' : 'var(--social-btn-bg-dark)',
                            borderRadius: '12px',
                            border: `1px solid ${theme === 'light' ? 'var(--social-btn-border-light)' : 'var(--social-btn-border-dark)'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? 'var(--social-btn-color-light)' : 'var(--social-btn-color-dark)',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            fontSize: '1rem',
                            fontWeight: '500'
                          }}
                        >
                          <Github size={20} style={{ color: '#333' }} />
                          <span>GitHub</span>
                        </motion.button>

                        <motion.button
                          onClick={() => handleLinkClick(selectedStudent.linkedin)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            backgroundColor: theme === 'light' ? 'var(--social-btn-bg-light)' : 'var(--social-btn-bg-dark)',
                            borderRadius: '12px',
                            border: `1px solid ${theme === 'light' ? 'var(--social-btn-border-light)' : 'var(--social-btn-border-dark)'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? 'var(--social-btn-color-light)' : 'var(--social-btn-color-dark)',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            fontSize: '1rem',
                            fontWeight: '500'
                          }}
                        >
                          <Linkedin size={20} style={{ color: '#0077b5' }} />
                          <span>LinkedIn</span>
                        </motion.button>
                      </div>

                      {/* Second Row: Instagram and LeetCode */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem'
                      }}>
                        <motion.button
                          onClick={() => handleLinkClick(selectedStudent.instagram)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            backgroundColor: theme === 'light' ? 'var(--social-btn-bg-light)' : 'var(--social-btn-bg-dark)',
                            borderRadius: '12px',
                            border: `1px solid ${theme === 'light' ? 'var(--social-btn-border-light)' : 'var(--social-btn-border-dark)'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? 'var(--social-btn-color-light)' : 'var(--social-btn-color-dark)',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            fontSize: '1rem',
                            fontWeight: '500'
                          }}
                        >
                          <Instagram size={20} style={{ color: '#e4405f' }} />
                          <span>Instagram</span>
                        </motion.button>

                        <motion.button
                          onClick={() => handleLinkClick(selectedStudent.leetcode)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            backgroundColor: theme === 'light' ? 'var(--social-btn-bg-light)' : 'var(--social-btn-bg-dark)',
                            borderRadius: '12px',
                            border: `1px solid ${theme === 'light' ? 'var(--social-btn-border-light)' : 'var(--social-btn-border-dark)'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? 'var(--social-btn-color-light)' : 'var(--social-btn-color-dark)',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            fontSize: '1rem',
                            fontWeight: '500'
                          }}
                        >
                          <Code size={20} style={{ color: '#f89f1b' }} />
                          <span>LeetCode</span>
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Extra space for better scrolling */}
                    <div style={{ height: '2rem' }} />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;