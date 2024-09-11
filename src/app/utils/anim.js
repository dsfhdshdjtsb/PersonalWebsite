const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1.1, // Delay before children start animating
            staggerChildren: 0.1, // Delay between each child (p tag) animation
            
        },
    },
    exit: {
        opacity: 1,
        transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse the stagger animation
    }
};
const staggerContainer2 = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.9, // Delay before children start animating
            staggerChildren: 0.1, // Delay between each child (p tag) animation
            
        },
    },
    exit: {
        opacity: 1,
        transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse the stagger animation
    }
};

const fadeFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5} },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3} },
    hover: {transform: "translateX(1vw)", transition: {duration: 0.2}},
}

export {staggerContainer, staggerContainer2, fadeFromLeft};