import { React, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const feedbacks = [
    {
      initial: 'V',
      name: 'Ved Pawar',
      role: 'Senior Dev',
      comment: 'Great implementation! Consider using hooks for clarity.'
    },
    {
      initial: 'A',
      name: 'Aryan Vibhuti',
      role: 'Lead Reviewer',
      comment: 'Try extracting this logic to a custom hook.'
    },
    {
      initial: 'R',
      name: 'Rohan Singh',
      role: 'Mentor',
      comment: 'Well done! Next time focus on error handling too.'
    }
  ];

  const phases = [
    {
      name: 'Fork',
      merged: 12,
      open: 4,
      leaderboard: [
        { name: 'Ved', score: 600 },
        { name: 'Rohan Singh', score: 500 },
        { name: 'Aryan Vibhuti', score: 400 }
      ]
    },
    {
      name: 'Spec',
      merged: 18,
      open: 3,
      leaderboard: [
        { name: 'Ved', score: 800 },
        { name: 'Rohan Singh', score: 700 },
        { name: 'Aryan Vibhuti', score: 600 }
      ]
    },
    {
      name: 'Merge',
      merged: 24,
      open: 8,
      leaderboard: [
        { name: 'Ved', score: 1270 },
        { name: 'Rohan Singh', score: 1000 },
        { name: 'Aryan Vibhuti', score: 920 }
      ]
    },
    {
      name: 'Elite',
      merged: 30,
      open: 2,
      leaderboard: [
        { name: 'Ved', score: 1500 },
        { name: 'Rohan Singh', score: 1300 },
        { name: 'Aryan Vibhuti', score: 1100 }
      ]
    }
  ];

  const [activePhase, setActivePhase] = useState(phases[2]);
  const [index, setIndex] = useState(0);
  const mergedTotal = 40;
  const openTotal = 40;
  const mergedPercent = (activePhase.merged / mergedTotal) * 100;
  const openPercent = (activePhase.open / openTotal) * 100;
  const weeks = 26;
  const days = 5;
  const levels = [1, 2, 3, 4];

  const data = useMemo(
    () =>
      Array.from(
        { length: weeks * days },
        () => levels[Math.floor(Math.random() * levels.length)]
      ),
    []
  );

  const getColor = level => {
    switch (level) {
      case 1:
        return '#1d4428';
      case 2:
        return '#3fa14d';
      case 3:
        return '#56d364';
      case 4:
        return '#6fe87a';
      default:
        return '#1d4428';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 md:px-16 bg-black text-center py-24">
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-green-500 text-sm tracking-widest mb-8">
          MADE ACCESSIBLE
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Open-source development
        </h2>
        <p className="text-gray-400 mt-4">
          Join DCODE and transform your coding journey. Contribute to real
          projects, learn from industry experts, and build a portfolio that
          stands out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-[#0B0F0B] border border-[#1D261D] rounded-2xl p-6 flex flex-col h-full w-full max-w-sm mx-auto">
          <h3 className="text-white font-bold text-lg mb-2">
            <span className="text-[#BCDD19] mr-2">&lt;/&gt;</span> Real-World
            Experience
          </h3>
          <p className="text-gray-400 mb-6">
            Work on production-level code in curated open-source repositories.
          </p>
          <div className="bg-[#121A12] border rounded-xl p-4 text-left flex flex-col">
            <div className="flex items-center mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              <span className="bg-[#1D261D] text-[#BCDD19] text-xs px-2 py-1 rounded">
                MERGED
              </span>
            </div>
            <p className="text-white mb-1 flex items-center">
              <span className="mr-2">🌿</span> feat: Add user authentication
            </p>
            <p className="text-gray-400 text-sm mb-3">
              +127 -43 • 3 files changed
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-2 bg-red-800 rounded-full">
                <div className="h-2 bg-green-400 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0F0B] border border-[#1D261D] rounded-2xl p-6 flex flex-col h-full w-full max-w-sm mx-auto">
          <h3 className="text-white font-bold text-lg mb-2">
            <span className="text-[#BCDD19] mr-2">👥</span> Industry Mentorship
          </h3>
          <p className="text-gray-400 mb-6">
            Get guidance from experienced developers and industry professionals.
          </p>
          <div className="bg-[#121A12] border border-[#1D261D] rounded-xl p-4 flex flex-col">
            <div className="relative overflow-hidden h-[120px] mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center mr-3 text-sm font-bold">
                      {feedbacks[index].initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">
                        {feedbacks[index].name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {feedbacks[index].role}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#1D261D] text-white text-sm px-4 py-2 rounded-lg border-l-2 border-[#BCDD19]">
                    "{feedbacks[index].comment}"
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0F0B] border border-[#1D261D] rounded-2xl p-6 flex flex-col h-full w-full max-w-sm mx-auto">
          <h3 className="text-white font-bold text-lg mb-2">
            <span className="text-[#BCDD19] mr-2">🐱</span> Build Your Portfolio
          </h3>
          <p className="text-gray-400 mb-6">
            Showcase your contributions and build an impressive DCODE profile.
          </p>
          <div className="bg-[#121A12] border border-[#1D261D] rounded-xl p-4 flex flex-col scrollbar-hide">
            <p className="text-white mb-4">Contributions</p>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1">
                {Array.from({ length: weeks }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col space-y-1">
                    {Array.from({ length: days }).map((_, dayIdx) => {
                      const index = weekIdx * days + dayIdx;
                      const level = data[index];
                      return (
                        <div
                          key={dayIdx}
                          className="w-2.5 h-2.5 rounded-[2px]"
                          style={{ backgroundColor: getColor(level) }}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-3 text-gray-400 text-xs mt-3">
              <span>Less</span>
              <div className="flex space-x-1">
                {levels.map(level => (
                  <div
                    key={level}
                    className="w-2.5 h-2.5 rounded-[2px]"
                    style={{ backgroundColor: getColor(level) }}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0F0B] border border-[#1D261D] rounded-2xl p-4 md:col-span-2 h-full">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-bold mb-1 flex items-center pb-2">
                <span className="text-[#BCDD19] mr-1">↗</span> Collaborative
                Learning
              </h3>
              <p className="text-gray-400 text-xs p-2">
                Git workflows, code reviews, and dev practices.
              </p>
            </div>
          </div>

          <div className="bg-[#121A12] border border-[#1D261D] rounded p-5 mt-2">
            <div className="flex flex-wrap gap-3 mb-3">
              {phases.map(phase => (
                <button
                  key={phase.name}
                  onClick={() => setActivePhase(phase)}
                  className={`px-6 py-1 rounded-lg p-3 text-2xs transition-all
                    ${
                      activePhase.name === phase.name
                        ? 'bg-[#333D00] border border-[#BCDD19] text-white'
                        : 'bg-[#1D261D] text-gray-300 hover:border-[#BCDD19]'
                    }`}
                >
                  {phase.name.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-2 bg-[#142416] p-2 rounded-lg border border-[#152918]">
                <h4 className="text-white font-medium text-2xs mb-1">
                  Pull Requests
                </h4>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-gray-400 pb-2 text-xs">
                      <span>Merged</span>
                      <span className="text-white">{activePhase.merged}</span>
                    </div>
                    <div className="w-full bg-[#1D261D] rounded-full h-1 overflow-hidden mt-0.5">
                      <motion.div
                        className="h-1 bg-[#37CD5A] rounded-full"
                        animate={{ width: `${mergedPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-gray-400 pb-2 text-xs">
                      <span>Open</span>
                      <span className="text-white">{activePhase.open}</span>
                    </div>
                    <div className="w-full bg-[#1D261D] rounded-full h-1 overflow-hidden mt-0.5">
                      <motion.div
                        className="h-1 bg-yellow-400 rounded-full"
                        animate={{ width: `${openPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 bg-[#142416] p-2 rounded-lg border border-[#152918]">
                <h4 className="text-white font-medium text-2xs mb-1">
                  Leaderboard
                </h4>
                <div className="space-y-1">
                  {activePhase.leaderboard.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-white text-2xs flex items-center">
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}{' '}
                        {item.name.split(' ')[0]}
                      </span>
                      <span className="text-white text-2xs px-1.5 py-0.5 rounded">
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0F0B] border border-[#1D261D] rounded-2xl p-6 flex flex-col h-full">
          <div className="mb-4">
            <h3 className="text-white font-bold text-lg mb-1">
              <span className="text-[#BCDD19] mr-2">🎓</span> Career
              Opportunities
            </h3>
            <p className="text-gray-400 text-sm">
              Access internships, recommendations, and industry connections
            </p>
          </div>

          <div className="bg-[#121A12] border border-[#1D261D] rounded-xl p-4 flex flex-col items-start">
            <div className="mb-3 text-left">
              <h4 className="text-white font-medium text-sm mb-2">
                Top Performer
              </h4>
              <p className="text-[#BCDD19] text-xs">Merge Phase Winner</p>
            </div>

            <ul className="space-y-2 w-full text-left">
              <li className="flex items-center text-white text-sm">
                <span className="w-1.5 h-1.5 bg-[#BCDD19] rounded-full mr-2"></span>
                Internship interviews
              </li>
              <li className="flex items-center text-white text-sm">
                <span className="w-1.5 h-1.5 bg-[#BCDD19] rounded-full mr-2"></span>
                Industry mentorship
              </li>
              <li className="flex items-center text-white text-sm">
                <span className="w-1.5 h-1.5 bg-[#BCDD19] rounded-full mr-2"></span>
                Letter of recommendation
              </li>
              <li className="flex items-center text-white text-sm">
                <span className="w-1.5 h-1.5 bg-[#BCDD19] rounded-full mr-2"></span>
                Premium Development Kits
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
