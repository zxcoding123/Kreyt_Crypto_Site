import React from 'react';
import { Coins, ShieldCheck, Wifi, Globe, Zap, Lock, Wallet, Network } from "lucide-react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import SpotlightCard from '../../components/bits/Components/SpotlightCard/SpotlightCard';
import GradientText from '../../components/bits/GradientText/GradientText';
import Orb from '../../components/bits/Orb/Orb';
import MagnetLines from '../../components/bits/Animations/MagnetLines/MagnetLines';
import Waves from '../../components/bits/Backgrounds/Waves/Waves';
import Threads from '../../components/bits/Backgrounds/Threads/Threads';
import Dither from '../../components/bits/Backgrounds/Dither/Dither';
import CountUp from '../../components/bits/TextAnimations/CountUp/CountUp';
import AnimatedContent from '../../components/bits/Animations/AnimatedContent/AnimatedContent';
import Magnet from '../../components/bits/Animations/Magnet/Magnet';

import { motion, useInView,  } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ Type-only import
import { useRef } from "react";




const AboutUs: React.FC = () => {

    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });
    const text = "WHO THE F*** ARE WE?!".split(" ");

    const paraRef = useRef(null);

    const textPara = `At Kreyt is redefining the internet economy — turning unused bandwidth into a valuable asset. 
  As a pioneer in decentralized infrastructure, we empower everyday users to earn cryptocurrency 
  effortlessly while supporting a faster, more resilient Web3.`.split(" ");

    const headingRef2 = useRef(null);
    const text2 = "By building a decentralized, community-powered network where you control access - you earn your share of the value.".split(" ");

    const listRef = useRef(null);
    const items = [
        {
            title: "True Ownership:",
            desc: "You keep control over what you share and when.",
        },
        {
            title: "No Technical Setup:",
            desc: "Start earning with just a few clicks.",
        },
        {
            title: "Borderless Earnings:",
            desc: "Join a global network and get paid in crypto.",
        },
    ];

    const gridRef = useRef(null);
    const isInViewGrid = useInView(gridRef, { once: true });

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };


    const titles = [
        "Connect & Share Bandwidth",
        "Mine Cryptocurrency",
        "Earn & Withdraw Rewards",
    ];

    const descriptions = [
        "Join Kreyt by installing our lightweight app or browser extension. Share your unused internet bandwidth to contribute to our decentralized mining network. No complex setup—just connect and start earning.",
        "Your shared bandwidth powers Kreyt’s distributed mining pool. Our advanced algorithms optimize mining tasks across the network, allowing you to earn cryptocurrency rewards without needing specialized hardware.",
        "Withdraw your earnings seamlessly through our intuitive dashboard. Convert your crypto into fiat or use it within the growing ecosystem of Web3 services powered by Kreyt.",
    ];



    return (
        <div className="bg-black text-white py-16 px-4">
            <div className="container mx-auto max-w-8xl  mb-10">
                <h2 className="text-xl md:text-6xl text-center font-extrabold text-white mb-25">
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
                        delay={0.3}
                    >
                        <GradientText
                            colors={["#ffffff", "#cccccc", "#999999", "#cccccc", "#ffffff"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="p-3"
                        >
                            ABOUT US
                        </GradientText>
                    </AnimatedContent>
                </h2>
                <div className="flex flex-col md:flex-row items-start justify-between">


                    <div className="max-w-3xl">

                        <section>
                            <h2
                                ref={headingRef}
                                className="text-xl md:text-6xl font-extrabold text-white mb-4 flex flex-wrap gap-2"
                            >
                                {text.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.15, duration: 0.4 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h2>
                        </section>


                        <p
                            ref={paraRef}
                            className="text-xl md:text-2xl text-gray-300 flex flex-wrap gap-1 leading-relaxed"
                        >
                            {textPara.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.025, duration: 0.3 }}
                                    className={word === "Kreyt" ? "font-extrabold" : ""}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </p>

                    </div>

                    <motion.div
                        className="relative w-60 h-60 md:ml-8 mt-8 md:mt-0"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    >
                        <div className="absolute w-24 h-24 rounded-full border-2 border-white top-0 left-0"></div>
                        <div className="absolute w-24 h-24 rounded-full border-2 border-white top-0 left-12"></div>
                        <div className="absolute w-24 h-24 rounded-full border-2 border-white top-10 left-6"></div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto max-w-8xl px-4 mb-10 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1: Active Users */}

                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-3xl font-extrabold text-white mb-2"><CountUp
                            from={0}
                            to={250}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />K+</h3>
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
                            delay={0.3}
                        >


                            <p className="text-xl text-gray-300">Active Users</p>
                            <p className="text-gray-300">
                                Over 250,000 users worldwide share their bandwidth, powering Kreyt’s decentralized network.
                            </p>
                        </AnimatedContent>
                    </div>


                    {/* Stat 2: Bandwidth Shared */}

                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-3xl font-extrabold text-white mb-2"><CountUp
                            from={0}
                            to={10}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        /> PB</h3>
                        <AnimatedContent
                            distance={175}
                            direction="vertical"
                            reverse={false}
                            duration={1.4}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.6}
                        >
                            <p className="text-xl text-gray-300">Monthly Bandwidth</p>
                            <p className="text-gray-300">
                                10 petabyte of data processed monthly, driving a faster and more resilient Web3 ecosystem.
                            </p>
                        </AnimatedContent>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-3xl font-extrabold text-white mb-2"><CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />M</h3>
                        <AnimatedContent
                            distance={200}
                            direction="vertical"
                            reverse={false}
                            duration={1.6}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.9}
                        >
                            <p className="text-xl text-gray-300">KREYT Tokens</p>
                            <p className="text-gray-300">
                                10 million tokens rewarded to users for contributing bandwidth to the network.
                            </p>
                        </AnimatedContent>
                    </div>
                </div>


                <div className="container mx-auto max-w-10xl mb-10 mt-25 ">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        {/* Magnet Lines */}
                        <div className="max-w-6xl">
                            <MagnetLines
                                rows={6}
                                columns={7}
                                containerSize="40vmin"
                                lineColor="white"
                                lineWidth="0.8vmin"
                                lineHeight="5vmin"
                                baseAngle={0}
                                style={{ margin: "2rem auto" }}
                            />
                        </div>

                        {/* Text Content */}
                        <div className="relative h-auto md:ml-8 mt-8 md:mt-0 max-w-xl text-white">

                            <h2 className="text-xl md:text-4xl font-extrabold mb-6 flex flex-wrap gap-2" ref={headingRef2}>
                                {text2.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.15, duration: 0.4 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h2>

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
                                delay={0.3}
                            >



                                <p className="text-lg text-gray-400 mb-6">
                                    At <span className="text-white font-semibold">Kreyt</span>, we believe your unused internet bandwidth shouldn't go to waste. Instead, it should generate passive crypto income — securely, privately, and automatically.
                                </p>

                            </AnimatedContent>

                            <ul
                                ref={listRef}
                                className="list-disc list-inside space-y-3 text-gray-300 mb-8"
                            >
                                {items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.2, duration: 0.4 }}
                                    >
                                        <strong className="text-white">{item.title}</strong> {item.desc}
                                    </motion.li>
                                ))}
                            </ul>
                            <Magnet padding={100} disabled={false} magnetStrength={20}>
                                <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-500 transition-all">
                                    Start Earning with Kreyt
                                </button>
                            </Magnet>
                        </div>
                    </div>
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
                        delay={0.3}
                    >
                        <p className='mb-10 mt-20 text-lg text-left border rounded-full w-fit pl-2 pr-2 uppercase'>
                            Our Mission // 01
                        </p>
                    </AnimatedContent>
                </div>
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
                    delay={0.6}
                >
                    <div className="container mx-auto max-w-8xl px-4">
                        <Splide
                            options={{
                                perPage: 1,
                                perMove: 1,
                                gap: '2rem',
                                pagination: false,
                                arrows: false,

                            }}
                        >
                            <SplideSlide>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Feature 1: Earn Cryptocurrency */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <Coins className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Earn Cryptocurrency</h3>
                                            <p className="text-gray-300">
                                                Transform your unused internet bandwidth into a revenue stream. Kreyt enables users to mine cryptocurrency effortlessly by sharing their connection, rewarding you with digital assets for contributing to the network.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                    {/* Feature 2: Secure & Decentralized */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <ShieldCheck className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Secure & Decentralized</h3>
                                            <p className="text-gray-300">
                                                Built on decentralized infrastructure, Kreyt ensures your data and earnings are protected with cutting-edge encryption. Participate in a trustless network where security and privacy are paramount.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Feature 3: Support Web3 */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <Wifi className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Support Web3</h3>
                                            <p className="text-gray-300">
                                                By joining Kreyt, you’re powering the future of the internet. Your bandwidth strengthens a decentralized Web3 ecosystem, enabling faster, more resilient applications and services worldwide.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                    {/* Feature 4: Global Accessibility */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <Globe className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Global Accessibility</h3>
                                            <p className="text-gray-300">
                                                Kreyt connects users worldwide, allowing anyone with an internet connection to participate. Access our platform from any device, anywhere, and contribute to a borderless digital economy.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Feature 5: Instant Rewards */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <Zap className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Instant Rewards</h3>
                                            <p className="text-gray-300">
                                                Receive real-time cryptocurrency payouts for your contributions. Kreyt’s seamless reward system ensures you get instant access to your earnings, with no delays or hidden fees.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                    {/* Feature 6: Privacy First */}
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
                                        <div className="flex flex-col">
                                            <Lock className="w-12 h-12 text-white mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Privacy First</h3>
                                            <p className="text-gray-300">
                                                Your privacy is our priority. Kreyt uses zero-knowledge proofs and decentralized protocols to ensure your personal data remains anonymous and secure while you earn.
                                            </p>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </AnimatedContent>
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
                    delay={0.6}
                >
                    <p className='mb-10 mt-20 text-lg text-left border rounded-full w-fit pl-2 pr-2 uppercase'>
                        Our Vision // 02
                    </p>
                </AnimatedContent>
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
                    delay={0.9}
                >
                    <div className="container-fluid mx-auto  flex flex-col items-center justify-center min-h-screen text-center relative">

                        <div className='absolute inset-0 w-full h-full z-1'>
                            <Orb
                                hoverIntensity={0.1}
                                rotateOnHover={false}
                                hue={0}
                                forceHoverState={false}
                            />
                        </div>
                        <div style={{ width: '25%', height: '0px', position: 'sticky' }}>
                            <h1 className="text-3xl text-white">
                                At <b>Kreyt</b>, our vision is to empower creators and businesses with intuitive, transformative digital solutions.
                            </h1>
                        </div>

                    </div>
                </AnimatedContent>

                <div className="container-fluid mx-auto max-w-10xl px-4">
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
                        delay={0.3}
                    >
                        <p className="mb-10 mt-20 text-lg text-left border rounded-full w-fit pl-2 pr-2 uppercase">
                            Our Processes // 03
                        </p>
                    </AnimatedContent>
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="relative flex flex-col items-start p-6 border border-gray-700 rounded-lg bg-gray-900 bg-opacity-50 h-85 overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate={isInViewGrid ? "visible" : "hidden"}
          custom={i}
        >
          {/* Background effects */}
          {i === 0 && (
            <div className="absolute inset-1 z-1 h-25">
              <Waves
                lineColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.05)"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
            </div>
          )}
          {i === 1 && (
            <div style={{ width: '100%', height: '94px', position: 'absolute' }}>
              <Threads amplitude={5} distance={0} enableMouseInteraction={true} />
            </div>
          )}
          {i === 2 && (
            <div className="absolute inset-1 z-1 h-25">
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
              />
            </div>
          )}

          {/* Foreground content */}
          <div className="relative z-10 mt-25">
            {i === 0 && <Coins className="w-12 h-12 text-white mb-4" />}
            {i === 1 && <Network className="w-12 h-12 text-white mb-4" />}
            {i === 2 && <Coins className="w-12 h-12 text-white mb-4" />}
            <h3 className="text-2xl font-bold text-white mb-2">{titles[i]}</h3>
            <p className="text-gray-300 text-left">{descriptions[i]}</p>
          </div>
        </motion.div>
      ))}
    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;