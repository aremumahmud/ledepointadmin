// src/ScrollIndicator.js
import { useEffect, useState } from 'react';
import '../css/ScrollIndicator.css';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollIndicator = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [iconColor, setIconColor] = useState('#fff'); // Default icon color
   
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollPosition(scrolled);

         // Determine the current background color
         const currentSection = document.elementFromPoint(0, window.innerHeight - 20);
         if (currentSection) {
             const bgColor = window.getComputedStyle(currentSection).backgroundColor;
             const rgb = bgColor.match(/\d+/g).map(Number);
            
             const brightness = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
             console.log(brightness)
             setIconColor(brightness < 0.05 ? '#000' : '#fff'); // Change icon color based on brightness
         }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-indicator">
            <svg className="circular-progress" viewBox="0 0 36 36">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray={`${scrollPosition}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            
            <FaArrowUp onClick={scrollToTop} size={20} color={iconColor} className='up_arrow' />
        </div>
    );
};

export default ScrollIndicator;
