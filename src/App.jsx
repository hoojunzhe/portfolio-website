import React, { useState, useEffect } from 'react';

function App() {
  // Image carousel logic
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "WhatsApp Image 2026-07-28 at 10.21.49 PM.jpeg",
    "WhatsApp Image 2026-07-28 at 10.21.48 PM.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* HEADER / HERO SECTION (Banner Style) */}
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((src, index) => (
            <img
              key={src}
              src={`/${src}`}
              alt="Hoo Jun Zhe Profile Background"
              className={`absolute inset-0 w-full h-full object-cover object-[45%_center] transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-950/60 z-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">Hoo Jun Zhe</h1>
          <h2 className="text-xl md:text-3xl text-blue-400 font-medium mt-3 drop-shadow">Business Analyst / Product Owner</h2>
          
          <p className="mt-6 text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl drop-shadow-md">
            Strategic Business Analyst and former Software Developer with hands-on experience driving Agile projects through the complete SDLC. Currently pursuing an MBA, I specialize in translating complex stakeholder needs into actionable user stories using Jira and Figma. I also excel at managing cross-functional teams to deliver impactful products, including large-scale mobile app migrations.
          </p>

          {/* Mobile-friendly Button Stacking */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap w-full sm:w-auto justify-center md:justify-start gap-4">
            <a href="https://wa.me/60175517696" target="_blank" rel="noreferrer" className="bg-green-700 text-white px-8 py-3 rounded-md font-medium text-center hover:bg-green-600 transition shadow-lg shadow-green-900/40">
              WhatsApp Me
            </a>
            <a href="mailto:hoojunzhe@gmail.com" className="bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-center hover:bg-blue-600 transition shadow-lg shadow-blue-900/40">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/hoojunzhe/" target="_blank" rel="noreferrer" className="bg-slate-800/80 backdrop-blur-sm text-slate-200 px-8 py-3 rounded-md font-medium text-center hover:bg-slate-700 transition border border-slate-600">
              LinkedIn
            </a>
            <a href="https://github.com/hoojunzhe" target="_blank" rel="noreferrer" className="bg-slate-800/80 backdrop-blur-sm text-slate-200 px-8 py-3 rounded-md font-medium text-center hover:bg-slate-700 transition border border-slate-600">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-20">
        
        {/* MY RESUME DOWNLOAD SECTION */}
        <section className="bg-slate-800/40 p-8 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">My Resume</h3>
            <p className="text-slate-400 text-sm">Download a full copy of my resume for your records.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* PDF Download Button */}
            <a 
              href="/Hoo Jun Zhe_resume.pdf" 
              download="Hoo_Jun_Zhe_Resume.pdf" 
              className="inline-flex items-center justify-center bg-red-600/90 text-white px-6 py-3 rounded-md font-medium hover:bg-red-500 transition shadow-lg shadow-red-900/20 border border-red-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 13l2 2 4-4"></path>
              </svg>
              PDF
            </a>

            {/* Word Download Button */}
            <a 
              href="/Hoo Jun Zhe_resume.docx" 
              download="Hoo_Jun_Zhe_Resume.docx" 
              className="inline-flex items-center justify-center bg-blue-600/90 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 border border-blue-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Word
            </a>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-8 text-white">Core Competencies</h3>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {['Agile methodology', 'Process mapping', 'Jira and Confluence', 'Figma', 'Generative AI tools', 'Excel', 'User Acceptance Testing', 'SQL'].map((skill) => (
              <div 
                key={skill} 
                className="bg-slate-800 border border-slate-700 px-4 py-4 md:px-5 md:py-5 rounded-md text-sm md:text-base font-medium text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:text-blue-300 hover:shadow-md hover:border-slate-500 flex items-center justify-center text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section>
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-8 text-white">Experience</h3>
          
          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 mb-6 hover:border-slate-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-1">
              <h4 className="text-xl font-bold text-white">Senior Business Consultant</h4>
              <span className="text-sm font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full self-start md:self-auto">July 2023 - Present</span>
            </div>
            <a href="http://www.hitachi-ebworx.com/index.html" target="_blank" rel="noreferrer" className="text-blue-400 font-medium mb-5 inline-block hover:text-blue-300 hover:underline">
              Hokenso (subsidiary under Hitachi ebWorx) ↗
            </a>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm md:text-base">
              <li>Main consultant for SG insurance mobile app project and React Native migration project.</li>
              <li>Collaborate with cross-functional team (Product, UX, QA, Dev etc...) on Scrum-Agile methodology and be involved throughout the SDLC phases.</li>
              <li>Prepare functional specification document (FSD), process / data mapping, and other documentations to ensure the requirement is aligned.</li>
              <li>Gather, analyze and refine the requirements from stakeholders, then translate into user story with Jira, Confluence and Figma.</li>
              <li>Host various sessions (DSM, sprint review, requirement workshop etc.) and present user story demo to the stakeholders.</li>
              <li>Assist Project Manager on the scope management, effort estimation and identify potential blockers, to ensure the project delivery is on track.</li>
              <li>Work with QA team to review test plan, execute test cases and resolve defect tickets in SIT, UAT, PROD environments.</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 mb-6 hover:border-slate-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-1">
              <h4 className="text-xl font-bold text-white">L1 Software Support Engineer</h4>
              <span className="text-sm font-medium text-slate-400 self-start md:self-auto">March 2023 - June 2023</span>
            </div>
            <a href="http://www.ncr.com" target="_blank" rel="noreferrer" className="text-blue-400 font-medium mb-5 inline-block hover:text-blue-300 hover:underline">
              NCR (Malaysia) ↗
            </a>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm md:text-base">
              <li>Supporting retail industry clients including NTUC Fair Price (SG) and Lotus's (MY).</li>
              <li>Identify and troubleshoot the software issues for POS and self-checkout systems that had been escalated by clients.</li>
              <li>Log issues using tools like JIRA and properly escalate unresolved issues to higher level technical teams.</li>
              <li>Perform system maintenance tasks for self-checkout and POS systems to ensure they operate efficiently without causing business impact.</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 mb-6 hover:border-slate-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-1">
              <h4 className="text-xl font-bold text-white">Software Developer</h4>
              <span className="text-sm font-medium text-slate-400 self-start md:self-auto">Dec 2021 - Oct 2022</span>
            </div>
            <a href="http://www.maybank.com/en/index.page" target="_blank" rel="noreferrer" className="text-blue-400 font-medium mb-5 inline-block hover:text-blue-300 hover:underline">
              Malayan Banking Berhad ↗
            </a>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm md:text-base">
              <li>Collaborate with oversea Maybank Indonesia team on the development and bug-fixing of the ongoing Maybank2u Indonesia revamping project.</li>
              <li>Assisting the development of features and functions on the web application with modern technology stacks.</li>
              <li>Understand user requirements and translate them into reusable code.</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-1">
              <h4 className="text-xl font-bold text-white">Web Development Intern</h4>
              <span className="text-sm font-medium text-slate-400 self-start md:self-auto">Sep 2019 - Apr 2020</span>
            </div>
            <a href="http://www.veecotech.com.my" target="_blank" rel="noreferrer" className="text-blue-400 font-medium mb-5 inline-block hover:text-blue-300 hover:underline">
              VeecoTech ↗
            </a>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm md:text-base">
              <li>Design and develop dynamic web applications using PHP.</li>
              <li>Maintaining, debugging and upgrading existing websites.</li>
              <li>Communicate key insights and findings to the developer team.</li>
              <li>Adapt to the fast paced and start-up style working environment, involved everything including fixing bugs, developing new features and communicating with clients.</li>
            </ul>
          </div>
        </section>

        {/* PERSONAL PROJECTS SECTION */}
        <section>
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-8 text-white">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Portfolio Website Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors flex flex-col shadow-lg p-6">
              <div className="flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">My Portfolio Website</h4>
                <p className="text-slate-300 text-sm mb-4 flex-grow">
                  Build this React portfolio website with my coding knowledge and the help of AI tools.
                </p>
                <div className="mb-5 flex gap-2 flex-wrap">
                  <span className="bg-slate-700 text-blue-300 text-xs px-2.5 py-1 rounded-sm font-medium">React.js</span>
                  <span className="bg-slate-700 text-purple-300 text-xs px-2.5 py-1 rounded-sm font-medium">AI Tools</span>
                </div>
              </div>
            </div>

            {/* Cryptocurrency Tracker Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors flex flex-col overflow-hidden shadow-lg">
              <img src="/crypto-tracker.png" alt="Cryptocurrency Tracker Interface" className="w-full h-48 object-cover object-top border-b border-slate-700" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">Cryptocurrency Tracker</h4>
                <p className="text-slate-300 text-sm mb-4 flex-grow">
                  This React web application will track the current price of various cryptocurrencies. User can search for 100 types of cryptocurrencies in the application.
                </p>
                <div className="mb-5 flex gap-2 flex-wrap">
                  <span className="bg-slate-700 text-blue-300 text-xs px-2.5 py-1 rounded-sm font-medium">React.js</span>
                </div>
                <a href="https://hoo-crypto-tracker.netlify.app" target="_blank" rel="noreferrer" className="text-blue-400 text-sm font-medium hover:text-blue-300 hover:underline mt-auto inline-flex items-center">
                  View Live App ↗
                </a>
              </div>
            </div>

            {/* React Todo List Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors flex flex-col overflow-hidden shadow-lg">
              <img src="/todo-list.png" alt="React Todo List Interface" className="w-full h-48 object-cover object-top border-b border-slate-700" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">React Todo List</h4>
                <p className="text-slate-300 text-sm mb-4 flex-grow">
                  A to-do list application that allow user to perform add, delete, edit and mark tasks as completed. The web app is developed with React.
                </p>
                <div className="mb-5 flex gap-2 flex-wrap">
                  <span className="bg-slate-700 text-blue-300 text-xs px-2.5 py-1 rounded-sm font-medium">React.js</span>
                </div>
                <a href="https://junzhe-todolist.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-400 text-sm font-medium hover:text-blue-300 hover:underline mt-auto inline-flex items-center">
                  View Live App ↗
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section>
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-8 text-white">Education</h3>
          <div className="space-y-6">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-bold text-white flex flex-col md:flex-row md:items-baseline">
                Master of Business Administration 
                <span className="text-blue-400 text-sm md:ml-2 font-normal mt-1 md:mt-0">(Current Grade: 3.62)</span>
              </h4>
              <p className="text-slate-400 mt-2">
                <a href="http://www.apu.edu.my" target="_blank" rel="noreferrer" className="text-slate-300 underline underline-offset-4 hover:text-blue-400 transition-colors">Asia Pacific University</a> 
                {" / "} 
                <a href="http://www.dmu.ac.uk/home.aspx" target="_blank" rel="noreferrer" className="text-slate-300 underline underline-offset-4 hover:text-blue-400 transition-colors">De Montfort University</a> 
                {" | Aug 2024 - Present"}
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-bold text-white flex flex-col md:flex-row md:items-baseline">
                Bachelor of Technology, Information System (Honours)
                <span className="text-blue-400 text-sm md:ml-2 font-normal mt-1 md:mt-0">(Grade: Second Upper-Class Honours)</span>
              </h4>
              <p className="text-slate-400 mt-2">
                <a href="http://www.utp.edu.my/Pages/Home.aspx" target="_blank" rel="noreferrer" className="text-slate-300 underline underline-offset-4 hover:text-blue-400 transition-colors">University Teknologi PETRONAS</a> 
                {" | Jan 2017 - Sep 2021"}
              </p>
            </div>
          </div>
        </section>

        {/* REFERENCES SECTION */}
        <section>
          <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-8 text-white">References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h4 className="text-lg font-bold text-white">Ms. Wee Yee Lynn</h4>
              <p className="text-blue-400 font-medium">Lead Business Consultant</p>
              <p className="text-slate-400 text-sm mt-1">Hokenso</p>
              <p className="text-slate-500 text-sm mt-3 italic">*Phone number available upon request</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h4 className="text-lg font-bold text-white">Ms. Nur Fara’ain</h4>
              <p className="text-blue-400 font-medium">Senior Business Consultant</p>
              <p className="text-slate-400 text-sm mt-1">Hokenso</p>
              <p className="text-slate-500 text-sm mt-3 italic">*Phone number available upon request</p>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-10 text-center text-sm px-6">
        <p>&copy; {new Date().getFullYear()} Hoo Jun Zhe. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;