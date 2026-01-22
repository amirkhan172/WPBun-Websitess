import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Calendar, ChevronRight, Heart, Zap, Coffee, Globe, Award, Code, Sparkles, ArrowRight, Building, DollarSign } from 'lucide-react';

const jobOpenings = [
    {
        id: 1,
        title: 'Senior WordPress Developer',
        department: 'Engineering',
        experience: '4+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 2,
        description: 'Build and maintain high-quality WordPress plugins with clean, efficient code.',
        skills: ['PHP', 'WordPress', 'JavaScript', 'React', 'REST API'],
    },
    {
        id: 2,
        title: 'React Developer',
        department: 'Engineering',
        experience: '3+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 1,
        description: 'Create modern, responsive user interfaces for our WordPress plugins using React.',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Git'],
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        department: 'Design',
        experience: '3+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 1,
        description: 'Design intuitive and beautiful interfaces for our WordPress products.',
        skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    },
    {
        id: 4,
        title: 'Technical Support Specialist',
        department: 'Support',
        experience: '2+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 2,
        description: 'Provide exceptional support to our customers and help them succeed with our products.',
        skills: ['WordPress', 'Customer Service', 'Problem Solving', 'Documentation', 'Zendesk'],
    },
    {
        id: 5,
        title: 'Content Writer',
        department: 'Marketing',
        experience: '2+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 1,
        description: 'Create engaging blog posts, documentation, and marketing content for our WordPress audience.',
        skills: ['Content Writing', 'SEO', 'WordPress', 'Technical Writing', 'Marketing'],
    },
    {
        id: 6,
        title: 'QA Engineer',
        department: 'Engineering',
        experience: '2+ years',
        type: 'Full-time',
        location: 'Remote',
        deadline: 'Open',
        vacancies: 1,
        description: 'Ensure the quality and reliability of our WordPress plugins through comprehensive testing.',
        skills: ['Manual Testing', 'Automated Testing', 'WordPress', 'Bug Tracking', 'Selenium'],
    },
];

const benefits = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Remote-First',
        description: 'Work from anywhere in the world. We believe in flexibility and work-life balance.',
    },
    {
        icon: <DollarSign className="w-6 h-6" />,
        title: 'Competitive Salary',
        description: 'We offer competitive salaries based on experience and market standards.',
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        title: 'Flexible Hours',
        description: 'Set your own schedule. We focus on results, not hours in a seat.',
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Health Benefits',
        description: 'Comprehensive health insurance coverage for you and your family.',
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Learning Budget',
        description: 'Annual learning budget for courses, conferences, and books.',
    },
    {
        icon: <Coffee className="w-6 h-6" />,
        title: 'Team Retreats',
        description: 'Annual team retreats to connect and collaborate in person.',
    },
];

const values = [
    {
        icon: <Users className="w-8 h-8" />,
        title: 'User-Centric',
        description: 'We put our users first in everything we do. Their success is our success.',
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Quality Code',
        description: 'We take pride in writing clean, maintainable, and efficient code.',
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Innovation',
        description: 'We constantly push boundaries and explore new ways to solve problems.',
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of our work.',
    },
];

const timeline = [
    { step: 1, title: 'Application', description: 'Submit your application with resume and portfolio' },
    { step: 2, title: 'Screening', description: 'Initial review and screening call' },
    { step: 3, title: 'Technical', description: 'Technical assessment or assignment' },
    { step: 4, title: 'Interview', description: 'In-depth interview with the team' },
    { step: 5, title: 'Offer', description: 'Offer letter and onboarding' },
];

export default function Career() {
    return (
        <AppLayout>
            <Head title="Careers - Join Our Team | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#070707] to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Hiring Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-[#ff176b] text-white rounded-full px-5 py-2 mb-8"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="font-semibold">We're Hiring!</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            Ready to Take a
                            <span className="block text-[#cdf33b]">Challenge?</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-300 mb-10"
                        >
                            Join our team of passionate developers, designers, and marketers building the future of WordPress. Work remotely, grow your skills, and make an impact.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold text-[#cdf33b] mb-1">30+</div>
                                <div className="text-gray-400 text-sm">Team Members</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold text-[#cdf33b] mb-1">100%</div>
                                <div className="text-gray-400 text-sm">Remote</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold text-[#cdf33b] mb-1">10+</div>
                                <div className="text-gray-400 text-sm">Countries</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold text-[#cdf33b] mb-1">{jobOpenings.length}</div>
                                <div className="text-gray-400 text-sm">Open Positions</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-10"
                        >
                            <a
                                href="#openings"
                                className="inline-flex items-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold hover:bg-[#d8f655] transition-colors"
                            >
                                View Open Positions
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            OUR VALUES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These core values guide everything we do at WPBun.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#ff176b] rounded-full text-sm font-semibold mb-6">
                            BENEFITS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Why Work With Us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer competitive benefits to support your growth and well-being.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#1f66ff]">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#070707] mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section id="openings" className="py-20 bg-white scroll-mt-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#cdf33b]/20 text-[#070707] rounded-full text-sm font-semibold mb-6">
                            OPEN POSITIONS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Current Opportunities
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find your perfect role and join our growing team.
                        </p>
                    </motion.div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-2xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-[#1f66ff]/20"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-[#070707]">{job.title}</h3>
                                            <span className="text-xs bg-[#1f66ff]/10 text-[#1f66ff] px-2 py-1 rounded-full font-medium">
                                                {job.department}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {job.vacancies} {job.vacancies > 1 ? 'vacancies' : 'vacancy'}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {job.skills.map((skill) => (
                                                <span key={skill} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600 border border-gray-200">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a
                                            href={`mailto:careers@wpbun.com?subject=Application for ${job.title}`}
                                            className="inline-flex items-center gap-2 bg-[#ff176b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e01560] transition-colors"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process Section */}
            <section className="py-20 bg-[#070707]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#cdf33b]/20 text-[#cdf33b] rounded-full text-sm font-semibold mb-6">
                            OUR PROCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hiring Process
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our hiring process is designed to be transparent and efficient.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-5xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-1 text-center"
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 bg-[#cdf33b] rounded-full flex items-center justify-center mx-auto mb-4 text-[#070707] font-bold text-xl">
                                        {item.step}
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-[#cdf33b]/20"></div>
                                    )}
                                </div>
                                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-3xl p-12 text-center text-white"
                    >
                        <Code className="w-12 h-12 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Open Source Contributor?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            We value open source contributions! If you've contributed to WordPress core, popular plugins, or other open source projects, we'd love to hear from you. Open source contributors get priority consideration.
                        </p>
                        <a
                            href="mailto:careers@wpbun.com?subject=Open Source Contributor Application"
                            className="inline-flex items-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            Get in Touch
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Building className="w-12 h-12 mx-auto mb-6 text-[#1f66ff]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Don't See the Right Role?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            We're always looking for talented individuals. Send us your resume and tell us how you can contribute to WPBun.
                        </p>
                        <a
                            href="mailto:careers@wpbun.com?subject=General Application"
                            className="inline-flex items-center gap-2 bg-[#070707] text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                        >
                            Send Your Resume
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
