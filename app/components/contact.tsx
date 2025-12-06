'use client'
import { Github, Mail, Linkedin, } from 'lucide-react';
const Contect = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-xl text-slate-400">
                        Have a project in mind? Whether it's a new design, a full-stack system, or a senior project consultation.
                    </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-white transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-white transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-white transition-all" placeholder="Tell me about your project..." />
                        </div>
                        <button type="button" className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8">
                        <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" /> nuspeerapat@gmail.com
                        </a>
                        <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                        <a href="https://github.com/Bangnus" target='_blink' rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contect