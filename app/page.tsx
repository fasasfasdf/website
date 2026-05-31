"use client"

import { useState } from "react"
import { SparklesCursor } from "@/components/sparkles-cursor"
import { DevMenu } from "@/components/dev-menu"

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "rules", label: "Rules" },
  { id: "links", label: "Links" },
]

const features = [
  { title: "Game Mods", description: "Mods, updates, and tools." },
  { title: "Steam Mods", description: "Steam Workshop support." },
  { title: "Giveaways", description: "Regular game giveaways." },
]

const rules = [
  { title: "Discord TOS", description: "Follow Discord's Terms of Service." },
  { title: "No NSFW/Gore", description: "Keep content clean and appropriate." },
  { title: "Be Respectful", description: "Treat all members with respect." },
]

const links = [
  { title: "Discord", description: "Join our community.", href: "https://discord.gg/b8dJxkjSf7" },
  { title: "Support", description: "Get help from staff." },
  { title: "Updates", description: "Latest mod releases." },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-black cursor-none overflow-hidden">
      <SparklesCursor />
      <DevMenu />
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-zinc-800/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-12 px-4">
        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-8">
          <span className="text-red-400">7</span>
          <span className="text-red-600">s</span>
          <span className="text-red-800">-</span>
        </h1>
        
        {/* Navigation */}
        <nav className="flex items-center justify-center gap-3 mb-16 relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`button-3d px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-none ${
                activeSection === item.id
                  ? "active bg-zinc-800 border-zinc-500 text-white shadow-[0_0_20px_rgba(255,255,255,0.15),0_8px_20px_-4px_rgba(255,255,255,0.2)]"
                  : "bg-zinc-900/80 border-zinc-700/50 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1),0_10px_25px_-5px_rgba(255,255,255,0.25)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Content Container */}
        <div className="w-full max-w-4xl">
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/50 p-8 md:p-12 backdrop-blur-sm">
            
            {/* Home Section */}
            {activeSection === "home" && (
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-6">
                  What We Are
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  7s- is a high-quality gaming hub made for mods, Steam mods, giveaways, free games, and community support. Everything gets released through the Discord.
                </p>
                
                {/* Plus icon */}
                <div className="flex justify-center mb-8">
                  <div className="text-zinc-600 text-3xl">+</div>
                </div>
                
                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none"
                    >
                      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-zinc-100">{feature.title}</h3>
                      <p className="text-zinc-500 text-sm group-hover:text-zinc-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Features Section */}
            {activeSection === "features" && (
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-6">
                  Features
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  Everything you need for gaming mods and more. We provide the best resources for the community.
                </p>
                
                <div className="flex justify-center mb-8">
                  <div className="text-zinc-600 text-3xl">+</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none">
                    <h3 className="text-white font-semibold text-base mb-2">100+ Mods</h3>
                    <p className="text-zinc-500 text-sm">Access to various game mods.</p>
                  </div>
                  <div className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none">
                    <h3 className="text-white font-semibold text-base mb-2">Free Games</h3>
                    <p className="text-zinc-500 text-sm">Daily free game alerts.</p>
                  </div>
                  <div className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none">
                    <h3 className="text-white font-semibold text-base mb-2">Giveaways</h3>
                    <p className="text-zinc-500 text-sm">Regular prizes and rewards.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Rules Section */}
            {activeSection === "rules" && (
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-6">
                  Rules
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                  Simple rules to keep our community great for everyone.
                </p>
                
                <div className="flex justify-center mb-8">
                  <div className="text-zinc-600 text-3xl">+</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {rules.map((rule, index) => (
                    <div 
                      key={index}
                      className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none"
                    >
                      <h3 className="text-white font-semibold text-base mb-2">{rule.title}</h3>
                      <p className="text-zinc-500 text-sm">{rule.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Links Section */}
            {activeSection === "links" && (
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-6">
                  Links
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                  Connect with us and join the community.
                </p>
                
                <div className="flex justify-center mb-8">
                  <div className="text-zinc-600 text-3xl">+</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {links.map((link, index) => (
                    link.href ? (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group block cursor-none"
                      >
                        <h3 className="text-white font-semibold text-base mb-2">{link.title}</h3>
                        <p className="text-zinc-500 text-sm">{link.description}</p>
                      </a>
                    ) : (
                      <div 
                        key={index}
                        className="button-3d p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 text-center group cursor-none"
                      >
                        <h3 className="text-white font-semibold text-base mb-2">{link.title}</h3>
                        <p className="text-zinc-500 text-sm">{link.description}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
        
        {/* Footer line */}
        <div className="w-full max-w-4xl mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>
      </div>
    </main>
  )
}
