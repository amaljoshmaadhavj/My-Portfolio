import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { SectionTransition, StaggerWrapper, StaggerItem } from './components/SectionTransition';
import { StatusIndicator } from './components/StatusIndicator';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Code as Github, Briefcase as Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Cpu, Brain, Layers, Award, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/10 selection:text-foreground bg-subtle-mesh overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <StaggerWrapper delay={0.1} className="flex flex-col items-start gap-12">
          <StaggerItem>
            <StatusIndicator className="bg-transparent border-primary/10" />
          </StaggerItem>
          
          <div className="flex flex-col gap-6 max-w-4xl">
            <StaggerItem>
              <h2 className="text-sm md:text-base font-display font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Amaljosh Maadhav J
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
                AI & DATA SCIENCE <br />
                UNDERGRADUATE<span className="text-primary">.</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="max-w-2xl text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
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
                "Building end-to-end machine learning systems that bridge the gap between academic research and production environments."
              </p>
            </SectionTransition>
            
            <StaggerWrapper className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <StaggerItem>
                Applied AI and Data Science undergraduate specializing in NLP, Computer Vision, and predictive analytics. 
                Focusing on building intelligent systems like recruitment automation platforms and clinical risk prediction tools.
              </StaggerItem>
              <StaggerItem>
                Active practitioner of modern AI architectures including Transformers, RAG (Retrieval-Augmented Generation), 
                and microservice-based ML deployment.
              </StaggerItem>
            </StaggerWrapper>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
             <SectionTransition delay={0.3} className="space-y-4">
                <h3 className="font-display font-bold uppercase text-xs tracking-widest text-primary opacity-60">Focus</h3>
                <ul className="space-y-2 text-sm">
                   <li>Scalable Models</li>
                   <li>Production Pipelines</li>
                   <li>Explainable AI</li>
                </ul>
             </SectionTransition>
             <SectionTransition delay={0.4} className="space-y-4">
                <h3 className="font-display font-bold uppercase text-xs tracking-widest text-primary opacity-60">Interests</h3>
                <ul className="space-y-2 text-sm">
                   <li>Legal AI</li>
                   <li>Clinical Triage</li>
                   <li>Cyber Forensics</li>
                </ul>
             </SectionTransition>
          </div>
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
              title="REVA AI"
              category="Automation & Document Intel"
              problem="The recruitment process for manual document verification is slow and prone to human error."
              solution="Implemented a federated microservices architecture using YOLO and PaddleOCR for automated document intelligence."
              impact="Created a unified, tamper-resistant system for candidate verification and document extraction."
              tech={["PaddleOCR", "YOLO", "Node.js", "MongoDB"]}
              link="https://github.com/vishal23000591/Project-REVA-AI.git"
            />
            <ProjectCard 
              title="TRIAGEON"
              category="Clinical Health Tech"
              problem="Patient risk assessment in clinical environments is often delayed, affecting decision-making speed."
              solution="Built a machine learning-powered healthcare triage system to prioritize patient risk in real-time."
              impact="Provides clinical teams with explainable AI outputs to guide urgency prioritization without replacing diagnosis."
              tech={["Python", "Scikit-Learn", "React", "FastAPI"]}
              link="https://github.com/amaljoshmaadhavj/Triageon.git"
            />
            <ProjectCard 
              title="TraceGuard AI"
              category="Cyber Forensics"
              problem="Forensic log analysis is often a locked-cloud or online process, sacrificing data privacy."
              solution="Developed an offline AI assistant using RAG and local LLMs (Ollama) to detect security threats in logs."
              impact="Enables secure, private investigation of Windows Event Logs and network traffic (.pcap) in isolated environments."
              tech={["Ollama", "FAISS", "RAG", "Python"]}
              link="https://github.com/amaljoshmaadhavj/TraceGuard-AI.git"
            />
            <ProjectCard 
              title="MatExtractAI"
              category="Research Automation"
              problem="Unstructured research PDFs are difficult to convert into structured, machine-readable datasets."
              solution="Utilized hybrid parsing (PyMuPDF / Camelot) and multi-agent local LLMs for evidence-backed extraction."
              impact="Automated the generation of evidence-backed datasets, significantly reducing research data-entry time."
              tech={["PyMuPDF", "Camelot", "Local LLMs", "Pandas"]}
              link="https://github.com/amaljoshmaadhavj/MatExtractAI.git"
            />
          </div>
          
          <SectionTransition className="mt-16 text-center">
            <Button variant="outline" className="h-14 px-12 rounded-lg border-primary/20 hover:bg-white hover:border-primary/50 transition-all" asChild>
               <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="flex items-center gap-3">
                  <Github className="w-5 h-5" /> Explore all repositories
               </a>
            </Button>
          </SectionTransition>
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
                        <CertItem title="Introduction to Tableau" issuer="Simplilearn" />
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
               <p className="text-xl md:text-2xl font-display">University of Petroleum and Energy Studies, India</p>
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
