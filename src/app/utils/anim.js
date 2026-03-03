const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5, 
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 1,
        transition: { staggerChildren: 0.1, staggerDirection: -1 },
    }
};
const staggerContainer2 = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5, 
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 1,
        transition: { staggerChildren: 0.1, staggerDirection: -1 },
    }
};

const wordStaggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.02,
        },
    },
    exit: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        }
    }
};

const fadeFromLeft = {
    hidden: { opacity: 0, x: "-1.5rem" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "-1.5rem", transition: { duration: 0.3 } },
    hover: { x: "1rem", transition: { duration: 0.2 } },
}

const fadeFromBottom = {
    hidden: { opacity: 0, y: "1.5rem" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "1.5rem", transition: { duration: 0.3 } },
}

const wordFadeVariant = {
    hidden: { opacity: 0, x: "-0.5rem" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: "-0.5rem", transition: { duration: 0.2 } },
};

const wordFadeBottomVariant = {
    hidden: { opacity: 0, y: "0.5rem" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: "0.5rem", transition: { duration: 0.2 } },
};

// Mobile-specific vertical animations
const mobileAboutExitUp = {
    exit: { opacity: 0, y: "-2rem", transition: { duration: 0.3 } }
};

const mobileProjectsEntryDown = {
    hidden: { opacity: 0, y: "-10rem" }, 
    visible: { opacity: 1, y: "-20rem", transition: { duration: 0.5, delay: 0.8 } },
    exit: { opacity: 0, y: "-10rem", transition: { duration: 0.3 } }
};

const mobileWordFadeUpVariant = {
    hidden: { opacity: 0, y: "0.5rem" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: "-0.5rem", transition: { duration: 0.2 } },
};

export {
    staggerContainer, 
    staggerContainer2, 
    wordStaggerContainer,
    fadeFromLeft, 
    fadeFromBottom, 
    wordFadeVariant, 
    wordFadeBottomVariant,
    mobileAboutExitUp,
    mobileProjectsEntryDown,
    mobileWordFadeUpVariant
};
