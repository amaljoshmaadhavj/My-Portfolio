import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { SectionTransition, StaggerWrapper, StaggerItem } from './components/SectionTransition';
import { StatusIndicator } from './components/StatusIndicator';
import { Timeline } from './components/Timeline';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Code as Github, Briefcase as Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Cpu, Brain, Layers, Award, CheckCircle2, ChevronDown } from 'lucide-react';
import profileImage from './assets/AMALJOSH MAADHAV J.jpg';

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/10 selection:text-foreground bg-subtle-mesh overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          <div className="lg:col-span-2">
            <StaggerWrapper delay={0.1} className="flex flex-col items-start gap-12">
              <StaggerItem>
                <StatusIndicator className="bg-transparent border-primary/10" />
              </StaggerItem>
              
              <div className="flex flex-col gap-6 w-full">
                <StaggerItem>
                  <h2 className="text-sm md:text-base font-display font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Amaljosh Maadhav J
                  </h2>
                </StaggerItem>
                
                <StaggerItem>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                    AI & DATA SCIENCE <br />
                    UNDERGRADUATE<span className="text-primary">.</span>
                  </h1>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                    Building scalable, production-ready AI systems from data to deployment. 
                    Focused on end-to-end machine learning pipelines.
                  </p>
                </StaggerItem>
              </div>
              
              <StaggerItem className="flex flex-wrap gap-6">
                <Button size="lg" className="rounded-lg px-8 h-14 text-base font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]" asChild>
                  <a href="#projects">
                    View Research & Projects <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <div className="flex items-center gap-6 border-l border-border pl-6">
                  <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:amal018josephmathi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </StaggerItem>
            </StaggerWrapper>
          </div>
          
          <SectionTransition delay={0.3} className="hidden lg:flex justify-center items-center lg:col-span-1">
            <img 
              src={profileImage}
              alt="Amaljosh Maadhav J" 
              className="w-full max-w-xs h-auto rounded-lg object-cover shadow-lg"
            />
          </SectionTransition>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-white/50 border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-12">
            <SectionTransition>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 inline-flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary/20"></span>
                The Mission
              </h2>
            </SectionTransition>
          </div>
          
          <div className="lg:col-span-7">
            <SectionTransition delay={0.1}>
              <p className="text-xl md:text-3xl font-normal leading-relaxed text-foreground/80 mb-12 italic border-l-4 border-primary/10 pl-8">
                "Building intelligent AI systems that solve real-world problems through data, automation, and scalable machine learning.”
              </p>
            </SectionTransition>
            
            <StaggerWrapper className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <StaggerItem>
                Applied AI & Data Science undergraduate passionate about Data Science, Machine Learning, and AI Engineering.
                Focused on creating impactful solutions in areas like cyber forensics, predictive analytics, recruitment automation, and intelligent decision systems.
              </StaggerItem>
              <StaggerItem>
                Currently exploring NLP, RAG systems, cyber investigation AI, and scalable deployment architectures while preparing for Data Scientist and ML Engineer roles.
              </StaggerItem>
            </StaggerWrapper>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
             <SectionTransition delay={0.3} className="space-y-4">
                <h3 className="font-display font-bold uppercase text-xs tracking-widest text-primary opacity-60">Focus</h3>
                <ul className="space-y-2 text-sm">
                   <li>Predictive Modeling</li>
                   <li>NLP & RAG</li>
                   <li>AI Product Development </li>
                </ul>
             </SectionTransition>
             <SectionTransition delay={0.4} className="space-y-4">
                <h3 className="font-display font-bold uppercase text-xs tracking-widest text-primary opacity-60">Interests</h3>
                <ul className="space-y-2 text-sm">
                   <li>Data Analytics</li>
                   <li>Cyber AI</li>
                   <li>Intelligent Systems</li>
                </ul>
             </SectionTransition>
          </div>
        </div>

        {/* My Journey Timeline */}
        <div className="max-w-7xl mx-auto mt-32">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              My Journey
            </h2>
          </SectionTransition>
          
          <Timeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              Technical Arsenal
            </h2>
          </SectionTransition>

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border border border-border">
            <SkillCard 
              icon={<Brain className="w-6 h-6" />}
              title="Machine Learning"
              skills={["Regression", "Clustering", "Explainable AI", "Feature Engineering", "Scikit-Learn"]}
            />
            <SkillCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Deep Learning & NLP"
              skills={["Transformers", "CNNs", "RAG", "LLMs", "Tf-Idf", "PyTorch", "TensorFlow"]}
            />
            <SkillCard 
              icon={<Code className="w-6 h-6" />}
              title="Computer Vision"
              skills={["YOLO", "OCR", "OpenCV", "Object Detection", "Image Processing"]}
            />
            <SkillCard 
              icon={<Database className="w-6 h-6" />}
              title="Data Systems"
              skills={["MongoDB", "SQL", "FAISS Vector DB", "Pandas", "NumPy", "Tableau"]}
            />
            <SkillCard 
              icon={<Layers className="w-6 h-6" />}
              title="Engineering"
              skills={["Node.js", "Docker", "REST APIs", "FastAPI", "Microservices", "Git"]}
            />
            <SkillCard 
              icon={<Award className="w-6 h-6" />}
              title="Foundations"
              skills={["Model Deployment", "Data Leakage Prevention", "Cross Validation", "Model Eval"]}
            />
          </StaggerWrapper>
        </div>
      </section>

      {/* Projects Section - Problem -> Solution -> Impact */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              The Solutions
            </h2>
            <p className="mt-4 text-muted-foreground font-light max-w-xl italic">
              A selection of engineering projects focused on real-world impact and technical depth.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProjectCard 
              title="FlipVision"
              category="AI Commerce & Computer Vision"
              problem="Manual product verification and freshness assessment in e-commerce systems are time-consuming and inconsistent."
              solution="Built an AI-powered e-commerce platform using YOLO, PaddleOCR, and ResNet50 to detect brands, assess freshness, and extract expiry dates from product images."
              impact="Improves product quality assurance, automates inventory verification, and enhances intelligent retail workflows."
              tech={["YOLO", "PaddleOCR", "Django", "ResNet50"]}
              link="https://github.com/amaljoshmaadhavj/FlipVision.git"
            />
            <ProjectCard 
              title="REVA AI"
              category="Recruitment Automation & Document Intel"
              problem="Traditional recruitment and document verification workflows are slow, fragmented, and prone to tampering."
              solution="Developed a federated AI ecosystem integrating OCR, ATS scoring, interview simulation, skill analysis, and intelligent verification modules."
              impact="Creates a scalable and secure AI-driven hiring ecosystem with automated candidate evaluation and document authentication."
              tech={["React", "FastAPI", "MongoDB", "DocTR OCR"]}
              link="https://github.com/amaljoshmaadhavj/REVA-AI.git"
            />
            <ProjectCard 
              title="TRIAGEON"
              category="Clinical Health Tech"
              problem="Delayed identification of high-risk patients often leads to poor healthcare prioritization and avoidable complications."
              solution="Built an ML-powered digital triage platform for disease risk prediction, urgency classification, and explainable patient prioritization."
              impact="Enables faster medical risk assessment and supports healthcare teams with intelligent urgency-aware recommendations."
              tech={["Python", "React", "Flask", "Scikit-Learn"]}
              link="https://github.com/amaljoshmaadhavj/Triageon.git"
            />
            <ProjectCard 
              title="TraceGuard AI"
              category="Cyber Forensics"
              problem="Most forensic investigation systems rely on cloud infrastructure, risking privacy and offline accessibility."
              solution="Created an offline AI-powered cyber investigation assistant using RAG, FAISS, and local LLMs for forensic evidence analysis."
              impact="Supports secure investigation of Windows Event Logs and network traffic in isolated and privacy-focused environments."
              tech={["Ollama", "FAISS", "Python", "RAG"]}
              link="https://github.com/amaljoshmaadhavj/TraceGuard-AI.git"
            />
            <ProjectCard 
              title="MatExtractAI"
              category="Research Automation"
              problem="Scientific research PDFs are difficult to convert into structured and machine-readable datasets."
              solution="Designed an AI-powered extraction pipeline using local LLM agents and hybrid PDF parsing for evidence-backed material science data extraction."
              impact="Automates scientific data extraction workflows while improving research traceability and reproducibility."
              tech={["PyMuPDF", "Camelot", "Next.js", "Local LLMs"]}
              link="https://github.com/amaljoshmaadhavj/MatExtractAI.git"
            />
            <ProjectCard 
              title="INYA Airlines"
              category="Travel & Booking Systems"
              problem="Lightweight flight booking systems often lack simple APIs for reservation tracking and cancellation workflows."
              solution="Developed a RESTful flight booking API supporting reservations, booking status tracking, multilingual responses, and refund calculations."
              impact="Simplifies airline reservation workflows with fast and lightweight backend operations."
              tech={["Node.js", "Express.js", "REST API", "JSON Storage"]}
              link="https://github.com/amaljoshmaadhavj/INYA-Airlines.git"
            />
          </div>

          {/* Explore More Projects Button */}
          <SectionTransition className="mt-20 flex justify-center">
            <Button 
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="h-14 px-8 rounded-lg font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98] flex items-center gap-3"
            >
              Explore More Projects
              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showMoreProjects ? 'rotate-180' : ''}`} />
            </Button>
          </SectionTransition>

          {/* Additional Projects - Expandable Section */}
          <div className={`mt-16 overflow-hidden transition-all duration-700 ${showMoreProjects ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
              <ProjectCard 
                title="InterviewIQ"
                category="AI Interview & Career Assistance"
                problem="Candidates lack realistic interview practice environments with detailed performance feedback."
                solution="Built an AI-powered interview practice platform with resume analysis, real-time evaluation, and intelligent feedback systems."
                impact="Helps candidates improve technical interview performance through personalized AI-driven assessments."
                tech={["Next.js", "FastAPI", "OpenRouter", "Node.js"]}
                link="https://github.com/amaljoshmaadhavj/InterviewIQ.git"
              />
              <ProjectCard 
                title="ArthroCare AI"
                category="AI Clinical Decision Support"
                problem="Rheumatoid Arthritis is frequently underdiagnosed due to inconsistent symptom interpretation and fragmented analysis."
                solution="Developed an intelligent clinical decision support system for RA risk prediction, longitudinal monitoring, and personalized recommendations."
                impact="Supports early detection and personalized healthcare guidance using explainable machine learning models."
                tech={["React", "Python", "Node.js", "XGBoost"]}
                link="https://github.com/santhoshr-15/arthrocare-ai.git"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-12">
                  <SectionTransition>
                    <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
                      <span className="w-12 h-[1px] bg-primary/20"></span>
                      Experience
                    </h2>
                  </SectionTransition>
               </div>
               
               <div className="lg:col-span-8">
                  <SectionTransition delay={0.1} className="relative pl-12 py-10 border-l border-border hover:border-primary transition-colors duration-500">
                     <span className="absolute top-10 left-[-4px] w-2 h-2 rounded-full bg-primary" />
                     <div className="mb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                        <div>
                           <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Artificial Intelligence Trainee</h3>
                           <p className="text-primary font-medium mt-1 uppercase tracking-widest text-sm">KaviiTamil Solutions</p>
                        </div>
                        <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.2em] bg-muted px-4 py-2 border border-border">July 2024 – August 2024</p>
                     </div>
                     <ul className="space-y-4 text-muted-foreground leading-relaxed">
                        <li className="flex gap-4">
                           <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                           Developed supervised and unsupervised ML models using Scikit-Learn on real-world datasets for predictive performance.
                        </li>
                        <li className="flex gap-4">
                           <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                           Implemented modular machine learning workflows from data preprocessing to feature engineering and validation.
                        </li>
                        <li className="flex gap-4">
                           <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                           Optimized predictive performance using practical evaluation techniques and data leakage prevention strategies.
                        </li>
                     </ul>
                  </SectionTransition>
               </div>
               
               <div className="lg:col-span-4 space-y-8">
                  <SectionTransition delay={0.3}>
                     <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-8 border-b border-border pb-4">Key Certifications</h3>
                     <div className="space-y-4">
                        <CertItem title="Data Science Bootcamp" issuer="Udemy" />
                        <CertItem title="Machine Learning Beginner" issuer="Infosys Springboard" />
                        <CertItem title="CUDA at Scale" issuer="Johns Hopkins" />
                        <CertItem title="PyTorch Foundations" issuer="Packt" />
                        <CertItem title="Student Automation Dev" issuer="UiPath" />
                     </div>
                  </SectionTransition>
               </div>
            </div>
         </div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-16">
          <SectionTransition>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-4">
              Designing the future <br />
              of practical AI<span className="text-white opacity-20">.</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-xl">
              Open to collaborations on research-focused AI products and scalable ML systems.
            </p>
          </SectionTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            <div className="space-y-6">
               <h4 className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">Contact</h4>
               <a href="mailto:amal018josephmathi@gmail.com" className="block text-xl md:text-2xl font-display hover:text-white/70 transition-colors">
                  amal018josephmathi@gmail.com
               </a>
            </div>
            <div className="space-y-6">
               <h4 className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">Location</h4>
               <p className="text-xl md:text-2xl font-display">Saveetha Engineering College, Tamil Nadu, India</p>
            </div>
            <div className="space-y-6">
               <h4 className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">Social</h4>
               <div className="flex gap-8">
                  <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-white/60 hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
               </div>
            </div>
          </div>
          
          <div className="w-full h-[1px] bg-white/10 mt-16" />
          
          <div className="w-full flex justify-between items-center opacity-40 text-xs uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} Amaljosh Maadhav J</p>
            <p className="hidden md:block">Engineered with Precision</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="group p-10 bg-white hover:bg-muted/30 transition-all duration-500 relative overflow-hidden">
      <div className="mb-8 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-1 duration-500">{icon}</div>
      <h3 className="text-xl font-bold font-display uppercase tracking-tight mb-4">{title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-sm text-muted-foreground font-medium">{skill}</span>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
    </div>
  );
}

function ProjectCard({ title, category, problem, solution, impact, tech, link }: { title: string, category: string, problem: string, solution: string, impact: string, tech: string[], link: string }) {
  return (
    <SectionTransition>
    <Card className="rounded-xl border border-border bg-white shadow-none transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden">
      <CardHeader className="space-y-2 p-10 pb-6 border-b border-border/50">
        <div className="flex items-center justify-between">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">{category}</span>
           <div className="flex gap-3">
             <a href={link} target="_blank" className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-all">
               <Github className="w-4 h-4" />
             </a>
             <a href={link} target="_blank" className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-all">
               <ExternalLink className="w-4 h-4" />
             </a>
           </div>
        </div>
        <CardTitle className="text-4xl font-display font-bold tracking-tighter">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-10 space-y-10 flex-grow">
        <div className="space-y-8">
          <ProjectStep label="Problem" content={problem} />
          <ProjectStep label="Solution" content={solution} />
          <ProjectStep label="Impact" content={impact} highlighted />
        </div>
        
        <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
          {tech.map((t, i) => (
            <Badge key={i} variant="secondary" className="bg-muted/50 text-muted-foreground font-medium rounded-md px-3 py-1 text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </SectionTransition>
  );
}

function ProjectStep({ label, content, highlighted = false }: { label: string, content: string, highlighted?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
      <div className="whitespace-nowrap w-24">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/30">{label}</span>
      </div>
      <p className={`text-base leading-relaxed ${highlighted ? 'text-primary font-medium' : 'text-muted-foreground font-normal'}`}>
        {content}
      </p>
    </div>
  );
}

function CertItem({ title, issuer }: { title: string, issuer: string }) {
   return (
      <div className="flex items-center justify-between group p-2 rounded-lg transition-colors hover:bg-muted/50 cursor-default">
         <div className="flex items-center gap-4">
            <CheckCircle2 className="w-4 h-4 text-primary opacity-30 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-medium">{title}</span>
         </div>
         <span className="text-[10px] font-bold uppercase opacity-30 group-hover:opacity-100 tracking-tighter">{issuer}</span>
      </div>
   );
}

export default App;
