import React from 'react';
import Squares from '../../components/bits/Squares/Squares';
import StarBorder from '../../components/bits/StarBorder/StarBorder';
import CircularText from '../../components/bits/CircularText/CircularText';
import ShinyText from '../../components/bits/TextAnimations/ShinyText/ShinyText';
import Magnet from '../../components/bits/Animations/Magnet/Magnet';
import AnimatedContent from '../../components/bits/Animations/AnimatedContent/AnimatedContent';
import DecryptedText from '../../components/bits/TextAnimations/DecryptedText/DecryptedText';
import BlurText from "../../components/bits/TextAnimations/BlurText/BlurText";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white py-4 relative">
            <div className="container-fluid mx-auto  flex flex-col items-center justify-center min-h-screen text-center relative">
                <div className='absolute inset-0 w-full h-full z-1'>
                    <Squares
                        speed={0.5}
                        squareSize={100}
                        direction="up"
                        borderColor="#333333FF"
                        hoverFillColor="#222"

                    ></Squares>
                </div>


                <div className="z-10 relative">
                    <h1 className="text-5xl mb-25">
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
                            <CircularText
                                text="Kreyt * Kreyt * Kreyt * "
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class"
                            />
                        </AnimatedContent>
                    </h1>
                    <Magnet padding={11000} disabled={false} magnetStrength={50}>
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
                            <h1 className="text-6xl mb-5">
                                <ShinyText text="KREYT" disabled={false} speed={5} />
                            </h1>
                        </AnimatedContent>
                    </Magnet>


                    <h1 className="text-5xl mb-5">


                        <DecryptedText
                            text="Your Gateway to Web3 & Blockchain Innovation"
                            speed={100}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                            animateOn='view'
                        />
                    </h1>
                    <p className="mb-5">

                        <BlurText
                            text=" As the digital landscape continues to evolve, our mission is to empower individuals and businesses alike with decentralized solutions that revolutionize."
                            delay={70}
                            animateBy="words"
                            direction="bottom"
                            onAnimationComplete={handleAnimationComplete}
                            className=""
                        />


                    </p>
                    
                    <StarBorder
                        as="button"
                        className="custom-class-btn mt-3 mr-5"
                        color="white"
                        speed="5s"
                    >
                        <p>Get Started</p>
                    </StarBorder>
                    <StarBorder
                        as="button"
                        className="custom-class"
                        color="white"
                        speed="7s"
                    >
                        See All Services
                    </StarBorder>
                </div>



            </div>

        </header>
    );
};

export default Header;
