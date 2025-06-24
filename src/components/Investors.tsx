import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import AnimatedContent from '../../components/bits/Animations/AnimatedContent/AnimatedContent';

const InvestorTab: React.FC = () => {
  const investorLogos = [
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796f7cb123b27423d035_logo%20(5).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796f12e101db4ca7b74b_logo%20(7).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796fbef4b5d1ea5f6136_73e6d3de87a88ff834a0f8953117efe9_logo%20%286%29.avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796fb5a69929035d3da4_logo%20(9).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796fb5a69929035d3d7c_logo%20(2).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796fb1211c4e5da37c7c_logo%20(3).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796f3c7158693a8c21e3_logo%20(8).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796fe0746148479be4be_logo%20(1).avif',
    'https://cdn.prod.website-files.com/665c71122bb2018f6ed3f9c9/67a8796f0c98d4045eb87da5_logo%20(4).avif',
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-black text-white py-16 px-4 pb-25">
      {/* Intro Section */}
      <div className="container mx-auto max-w-8xl mb-20 mt-10">
        <AnimatedContent
                                distance={150}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0.2}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                                delay={0.2}
                            > 
        <h1 className="text-xl md:text-4xl font-extrabold text-white mb-4 text-center">
          Our Investors
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto text-center mb-24">
          Kreyt is backed by leading organizations committed to advancing a decentralized internet economy. Explore the partners supporting our mission to transform bandwidth into a valuable asset.
        </p>
        </AnimatedContent>
      </div>

      {/* Investors Logo Grid */}
      <div className="container mx-auto max-w-8xl px-4">
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {investorLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={logoVariants}
              custom={index}
            >
              <img
                src={logo}
                alt={`Investor Logo ${index + 1}`}
                className="max-w-[200px] h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorTab;
