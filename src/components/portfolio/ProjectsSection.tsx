import { Github, ExternalLink } from "lucide-react";
import ledgerProjectImage from "@/assets/ledger.png";
import apexscriptImage from "@/assets/apexscript.png";
import tradeproImage from "@/assets/tradepro.png"
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ProjectsSection = () => {
    const featuredProjects = [
        {
            title: "TITLE",
            description: "DESCRIPTION",
            image: ledgerProjectImage,
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "JWT"],
            github: "GITHUB LINK",
            live: "DEPLOY LINK",
        },

    ];

    const otherProjects = [
        {
            title: "NONE",
            description: "Built a RESTful API using Node.js, Express.js, and MongoDB for secure contact management. Utilized JWT authentication for user registration, login, and CRUD operations. Optimized queries with MongoDB and managed code using Git/GitHub.",
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
            github: "GITHUBLINK",
            live: "#",
        },
        
    ];

    // return (
    //     <section id="projects" className="min-h-screen py-24 px-4">
    //         <div className="container mx-auto max-w-6xl">
    //             <Reveal>
    //                 <h2 className="section-title text-center">My Projects</h2>
    //             </Reveal>

    //             <div className="space-y-24 mt-16">
    //                 {featuredProjects.map((project, index) => (
    //                     <Reveal key={index}>
    //                         <div className="grid md:grid-cols-2 gap-12 items-center neobrutalist-card md:relative">
    //                             <div className="relative group overflow-hidden rounded-lg ring-1 ring-primary/10">
    //                                 <img
    //                                     src={project.image}
    //                                     alt={project.title}
    //                                     className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
    //                                 />
    //                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    //                             </div>

    //                             <div className="space-y-6">
    //                                 <div>
    //                                     <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
    //                                     <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
    //                                         {project.title}
    //                                     </h3>
    //                                 </div>

    //                                 <div className="relative bg-foreground/5 border border-border/60 rounded-xl shadow-lg p-6 md:p-8 md:-ml-16 backdrop-blur-sm">
    //                                     <p className="text-foreground/80 leading-relaxed">
    //                                         {project.description}
    //                                     </p>
    //                                 </div>

    //                                 <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary font-mono text-sm">
    //                                     {project.technologies.map((tech, index) => (
    //                                         <span key={tech} className="opacity-90">
    //                                             {tech}
    //                                             {index < project.technologies.length - 1 && (
    //                                                 <span className="mx-2 text-foreground/40">•</span>
    //                                             )}
    //                                         </span>
    //                                     ))}
    //                                 </div>

    //                                 <div className="flex items-center gap-4 mt-6">
    //                                     <a
    //                                         href={project.github}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
    //                                         aria-label="View source code on GitHub"
    //                                     >
    //                                         <Github size={24} />
    //                                     </a>
    //                                     <a
    //                                         href={project.live}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
    //                                         aria-label="View live project"
    //                                     >
    //                                         <ExternalLink size={24} />
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </Reveal>
    //                 ))}
    //             </div>

    //             <Reveal className="mt-24">
    //                 <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Other Noteworthy Projects</h3>
    //                 <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //                     {otherProjects.map((project, index) => (
    //                         <FadeInItem
    //                             key={index}
    //                             className="relative neobrutalist-card h-full flex flex-col group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl after:pointer-events-none after:absolute after:-right-10 after:-top-10 after:h-24 after:w-24 after:rounded-full after:bg-primary/20 after:blur-3xl after:opacity-0 group-hover:after:opacity-100"
    //                         >
    //                             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    //                             <div className="flex items-center justify-between mb-6">
    //                                 <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
    //                                     {project.title}
    //                                 </h4>
    //                                 <div className="flex items-center gap-4">
    //                                     <a
    //                                         href={project.github}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         className="rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
    //                                         aria-label="View source code on GitHub"
    //                                     >
    //                                         <Github size={20} />
    //                                     </a>
    //                                     <a
    //                                         href={project.live}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         className="rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
    //                                         aria-label="View live project"
    //                                     >
    //                                         <ExternalLink size={20} />
    //                                     </a>
    //                                 </div>
    //                             </div>

    //                             <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
    //                                 {project.description}
    //                             </p>

    //                             <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/60">
    //                                 {project.technologies.map((tech) => (
    //                                     <span
    //                                         key={tech}
    //                                         className="text-[11px] font-mono text-secondary/90 bg-secondary/5 border border-secondary/30 rounded-full px-2.5 py-1 transition-colors group-hover:bg-secondary/10"
    //                                     >
    //                                         {tech}
    //                                     </span>
    //                                 ))}
    //                             </div>
    //                         </FadeInItem>
    //                     ))}
    //                 </FadeInStagger>
    //             </Reveal>
    //         </div>
    //     </section>
    // );
};

export default ProjectsSection;