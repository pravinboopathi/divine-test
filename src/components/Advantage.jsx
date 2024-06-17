import React from 'react';
import { FiUsers, FiMonitor, FiAward } from 'react-icons/fi'; // Importing Feather icons
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { useInView } from 'react-intersection-observer';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <FiUsers className="text-4xl text-blue-500" />,
      title: 'Faculty',
      description: 'Our experienced instructors are industry veterans with a passion for teaching. They bring real-world insights and practical knowledge to every course, ensuring you get the best education possible.',
      bgClass: 'bg-gradient-to-r from-blue-200 to-blue-100',
    },
    {
      icon: <FiMonitor className="text-4xl text-purple-500" />,
      title: 'Infrastructure',
      description: 'Our state-of-the-art facilities provide the perfect environment for learning and innovation. Equipped with the latest technology and tools, our classrooms and labs are designed to enhance your educational experience.',
      bgClass: 'bg-gradient-to-r from-purple-200 to-purple-100',
    },
    {
      icon: <FiAward className="text-4xl text-yellow-500" />,
      title: 'Support',
      description: 'At Divine Infotech, we are committed to your success. Our support services include career counseling, job placement assistance, and continuous learning opportunities to help you stay ahead in your career.',
      bgClass: 'bg-gradient-to-r from-yellow-200 to-yellow-100',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              ref={ref} // Assign the ref from useInView
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className={`rounded-lg p-6 shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg md:hover:shadow-xl md:hover:scale-105 ${advantage.bgClass}`}
            >
              <div className=" flex items-center justify-center h-20 w-20 rounded-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg">
                {advantage.icon}
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                <p className="mt-4 text-base text-gray-800">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
