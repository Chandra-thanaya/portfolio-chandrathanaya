import {
  Gamepad2,
  Brain,
  Code2,
  Download,
  Dumbbell,
  GraduationCap,
  Heart,
  Lightbulb,
  Music,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import Lottie from "lottie-react";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";

import animationData from "../../assets/coder.json";
import { Reveal } from "@/components/animations/Reveal";
import SpotifyCard from "./SpotifyCard";

const AboutSection = () => {
  const interests = [
    {
      icon: Brain,
      label: "Continuous Learning",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Gamepad2,
      label: "Gaming",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Trophy,
      label: "Football",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Music,
      label: "Music",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Wrench,
      label: "Crafting",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Lightbulb,
      label: "Problem Solving",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
    {
      icon: Users,
      label: "Leadership",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Heart,
      label: "Mentoring",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
  ];

  const stats = [
    {
      value: "8.23",
      label: "CGPA",
    },
    {
      value: "8+",
      label: "Projects",
    },
    {
      value: "250+",
      label: "LeetCode",
    },
    {
      value: "AI",
      label: "Focus",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-7xl">

        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.35em] text-sm font-semibold">
              01
            </span>

            <h2 className="section-title mt-4 mb-4">
              About Me
            </h2>

            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              The story behind the code.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="relative overflow-hidden h-full neobrutalist-card p-8 bg-card border border-border">

              {/* Blueprint Glow */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#22d3ee_1px,transparent_1px),linear-gradient(90deg,#22d3ee_1px,transparent_1px)] bg-[size:28px_28px]" />

              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10">

                <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">
                  01 · Who I Am
                </span>

                <h3 className="text-3xl font-bold mt-3 flex items-center gap-3">
                  <Code2 className="text-primary w-7 h-7" />
                  Building Ideas Into Reality
                </h3>

                <div className="space-y-6 mt-8 text-lg leading-9 text-foreground/80">

                  <p>
                    I'm a <strong>Computer Science undergraduate</strong> passionate
                    about transforming ambitious ideas into polished digital
                    products. Whether it's Artificial Intelligence, Machine
                    Learning, or Full-Stack Development, I enjoy solving problems
                    that combine logic with creativity.
                  </p>

                  <p>
                    My journey revolves around continuously learning modern
                    technologies, experimenting with new ideas, and building
                    projects that strengthen both my engineering fundamentals and
                    product-thinking mindset.
                  </p>

                  <p>
                    Beyond academics, I believe the best way to learn is by
                    building. Every project I complete represents another step
                    toward becoming an engineer capable of creating meaningful,
                    scalable software.
                  </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border bg-background/40 px-5 py-5 hover:border-primary/40 transition-all duration-300"
                    >
                      <h4 className="text-3xl font-extrabold text-primary">
                        {item.value}
                      </h4>

                      <p className="text-sm text-foreground/60 mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Quote */}

                <div className="mt-10 border-l-2 border-primary pl-5 italic text-foreground/70">
                  "When a measure becomes a target, it ceases to be a good measure."
                  <div className="text-sm text-primary mt-2 not-italic">
                    — Goodhart's Law
                  </div>
                </div>

                {/* Resume */}

                <div className="mt-10">
                  <Link to="/resume">
                    <button className="group px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-3 hover:bg-primary/90 transition-all">

                      <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />

                      Explore Resume →

                    </button>
                  </Link>
                </div>

              </div>

            </div>
          </Reveal>
                    {/* ================= RIGHT CARD ================= */}

          <Reveal delay={0.2} className="md:col-span-1 md:row-span-2">
            <div className="relative h-full overflow-hidden neobrutalist-card border border-border bg-card">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

              {/* Number */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">
                  02 · Profile
                </span>
              </div>

              {/* Lottie */}

              <div className="relative flex items-center justify-center h-[430px] overflow-hidden">

                <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 w-full scale-110 transition duration-700 hover:scale-125">
                  <Lottie
                    animationData={animationData}
                    loop
                    className="w-full h-auto"
                  />
                </div>

              </div>

              {/* Bottom Info */}

              <div className="border-t border-border px-6 py-6 space-y-4">
{/* 
                <div className="flex justify-between"> */}

                  {/* <span className="text-foreground/50 text-sm">
                    Current Focus
                  </span>

                  <span className="font-semibold text-primary">
                    AI / ML
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-foreground/50 text-sm">
                    Interests
                  </span>

                  <span className="font-semibold">
                    Full Stack
                  </span>

                </div> */}

                <div className="flex justify-between">

                  <span className="text-foreground/50 text-sm">
                    Spotify
                  </span>

                  <span className="text-green-400 font-semibold">
                    All time favorite
                  </span>

                  

                </div>

              

              </div>
            <SpotifyCard />

            </div>
          </Reveal>

          {/* ================= EDUCATION ================= */}

          <Reveal delay={0.3} className="md:col-span-2">

            <div className="relative neobrutalist-card p-8 bg-card border border-border overflow-hidden">

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

              <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">
                03 · Education
              </span>

              <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">

                <GraduationCap
                  className="text-secondary"
                  size={28}
                />

                Academic Journey

              </h3>

              <div className="mt-10 relative border-l-2 border-primary/20 pl-8">

                {/* Dot */}

                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/40" />

                <h4 className="text-xl font-bold">
                  Bachelor of Engineering
                </h4>

                <p className="text-lg text-primary font-medium">
                  Computer Science & Engineering
                </p>

                <p className="text-foreground/60 mt-1">
                  BMS Institute of Technology & Management
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                  <div className="rounded-xl bg-background/40 border border-border p-4">

                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                      CGPA
                    </p>

                    <h4 className="text-3xl font-bold text-primary mt-2">
                      8.23
                    </h4>

                  </div>

                  <div className="rounded-xl bg-background/40 border border-border p-4">

                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                      Semester
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      7th
                    </h4>

                  </div>

                  <div className="rounded-xl bg-background/40 border border-border p-4">

                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                      Graduation
                    </p>

                    <h4 className="text-xl font-bold mt-3">
                      2027
                    </h4>

                  </div>

                  <div className="rounded-xl bg-background/40 border border-border p-4">

                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                      Current Goal
                    </p>

                    <h4 className="text-sm font-semibold text-primary mt-3">
                      AI / ML Internship
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

                    {/* ================= BEYOND CODE ================= */}

          <Reveal delay={0.4} className="md:col-span-3">
            <div className="relative overflow-hidden neobrutalist-card p-8 bg-card border border-border">

              {/* Glow */}

              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

              <div className="relative z-10">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

                  <div>

                    <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">
                      04 · Beyond Code
                    </span>

                    <h3 className="text-3xl font-bold mt-3 flex items-center gap-3">
                      <WiStars
                        size={30}
                        className="text-primary"
                      />
                      Life Outside Programming
                    </h3>

                    <p className="mt-3 text-foreground/60 max-w-xl">
                      The experiences and interests that inspire the
                      way I think, build, and solve problems.
                    </p>

                  </div>

                  <div className="mt-6 md:mt-0 text-right">

                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                      Interests & Values
                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                  {interests.map((interest) => {
                    const Icon = interest.icon;

                    return (

                      <div
                        key={interest.label}
                        className="
                          group
                          rounded-2xl
                          border
                          border-border
                          bg-background/40
                          p-5
                          transition-all
                          duration-300
                          hover:border-primary/40
                          hover:-translate-y-2
                          hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
                        "
                      >

                        <div
                          className={`
                            h-12
                            w-12
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            ${interest.bg}
                            ${interest.color}
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:rotate-6
                          `}
                        >
                          <Icon size={22} />
                        </div>

                        <h4 className="mt-5 font-semibold text-lg">
                          {interest.label}
                        </h4>

                        <p className="mt-2 text-sm text-foreground/55 leading-6">

                          {interest.label === "Continuous Learning" &&
                            "Always exploring new technologies and challenging myself."}

                          {interest.label === "Gaming" &&
                            "I enjoy strategy, RPG and competitive games that challenge creativity and decision-making."}

                          {interest.label === "Football" &&
                            "Teamwork, strategy and competition fuel my mindset."}

                          {interest.label === "Music" &&
                            "My favorite companion while building projects."}

                          {interest.label === "Crafting" &&
                            "I enjoy designing and building ideas from scratch."}

                          {interest.label === "Problem Solving" &&
                            "Finding elegant solutions is what excites me most."}

                          {interest.label === "Leadership" &&
                            "Helping teams collaborate towards meaningful goals."}

                          {interest.label === "Mentoring" &&
                            "Sharing knowledge is one of the best ways to grow."}

                        </p>

                      </div>

                    );
                  })}

                </div>

                {/* Bottom Quote */}

                <div className="mt-14 border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-6">

                  <div>

                    <p className="text-xl italic text-foreground/75">
                      "Technology isn't just about writing code—
                      it's about creating experiences that people enjoy."
                    </p>

                    <p className="mt-3 text-primary font-semibold">
                      — Chandra Thanaya
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-foreground/45 uppercase tracking-[0.25em]">
                      Always Learning
                    </p>

                    <h4 className="mt-2 text-2xl font-bold">
                      Build • Learn • Improve
                    </h4>

                  </div>

                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;