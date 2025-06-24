import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from 'framer-motion';
import { useState } from "react"
import AnimatedContent from '../../components/bits/Animations/AnimatedContent/AnimatedContent'


const faqData = [
  {
    question: "What is Kreyt?",
    answer:
      "Kreyt is a decentralized infrastructure platform that turns unused internet bandwidth into a valuable asset, allowing users to earn crypto effortlessly.",
  },
  {
    question: "How do I start earning with Kreyt?",
    answer:
      "Simply install our lightweight app or browser extension, share your bandwidth, and start earning rewards—no technical setup required.",
  },
  {
    question: "Is sharing my bandwidth secure?",
    answer:
      "Yes. Kreyt uses encrypted, anonymized routing to ensure your data and activity remain private while your unused bandwidth is safely distributed.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "You can withdraw your cryptocurrency earnings to your wallet at any time via our dashboard.",
  },
  {
    question: "Is Kreyt available globally?",
    answer:
      "Yes! Kreyt is a borderless platform—anyone with an internet connection can join and start earning.",
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="bg-white text-black py-16 px-4 pb-20">
  
      <div className="container mx-auto max-w-4xl mb-20 mt-10">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Frequently Asked Questions
          </h2>
        </AnimatedContent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <Accordion
            type="single"
            collapsible
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqData.map(({ question, answer }, index) => {
              const value = `item-${index}`
              return (
                <motion.div key={value}           variants={itemVariants}>
                  <AccordionItem value={value}>
                    <AccordionTrigger><h1 className="text-xl">{question}</h1></AccordionTrigger>
                    <AnimatePresence initial={false}>
                      {openItem === value && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4 pt-2 text-sm text-gray-700">
                            {answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </AccordionItem>
                </motion.div>
              )
            })}
          </Accordion>
        </motion.div>
        
      </div>
    </div>
  )
}
