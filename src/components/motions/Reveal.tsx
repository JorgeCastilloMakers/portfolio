import { motion, useInView, useAnimation } from "framer-motion";
import React, {useRef, useEffect} from "react";


interface Props{
    children: JSX.Element;
    width?: 'fit-content' | '100%';
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    duration?: number;
    delay?: number;
}

export const Reveal = ({ children, width = 'fit-content', justifyContent = 'center', duration= 0.8, delay= 0.25 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])
    
    return (
        <div ref={ref} style={{position: 'relative', width, overflow: 'hidden', display:'flex', justifyContent}}>
            <motion.div
                style={{width, display:'flex', justifyContent}}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration, delay}}
            >
                {children}
            </motion.div>
        </div>
    )
}