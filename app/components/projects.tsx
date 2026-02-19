import React from 'react'
import { Github, PenTool } from 'lucide-react';
import Image from 'next/image';
import ClinicDesign from '../../public/images/ClinicDesign.png'

export const Featured_Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-slate-400">Selected freelance works and complex system developments.</p>
                    </div>
                    <a href='https://github.com/Bangnus' target='_blank' rel='noopener noreferrer' className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors mt-4 md:mt-0">
                        View GitHub <Github className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Project Card 1 - แปลงจากงานโปรเจคจบ */}
                    <div className="group rounded-2xl bg-slate-800/40 border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
                        {/* Mockup Image Area */}
                        <div className="h-64 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                            {/* Placeholder for project image */}
                            <div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-slate-500">
                                [Image: Inventory System Dashboard Mockup]
                            </div>
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">PHP Laravel</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">MySQL</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Admin Panel</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Enterprise Inventory Management</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                A custom-built web application designed to streamline stock tracking and order processing. Features include real-time data visualization, barcode integration, and automated reporting.
                            </p>
                            <div className="flex gap-4">
                                <a href='' target='_blank' rel='noopener noreferrer' className="text-sm font-semibold text-slate-400 flex items-center gap-2 hover:text-white transition-colors">
                                    <Github className="w-4 h-4" /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 - งาน UI Freelance */}
                    <div className="group rounded-2xl bg-slate-800/40 border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
                        <div className="h-64 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                            <div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-slate-500">
                                <Image src={ClinicDesign} alt='Wellness Clinic' />
                            </div>
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">UI / UX Design</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Figma Prototype</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Accessibility</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Wellness Clinic — UI/UX Design</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                High-fidelity UI/UX design for a wellness clinic focusing on clear information hierarchy, accessible components, and a streamlined appointment booking flow. Created interactive prototypes in Figma and delivered responsive, pixel-perfect screens for mobile and desktop.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.figma.com/design/Xg9t6LVwGMecUeTpmFOtmd/Balavi?node-id=2-2&t=7HyTqSHAYyXQzy7y-1" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 flex items-center gap-2 hover:text-white transition-colors">
                                    <PenTool className="w-4 h-4" /> View Figma
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
