import React, { useState, useEffect, useRef } from "react";

const CounterComponent = () => {
    const sectionRef = useRef(null); // Ref for the section
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Start animation when visible
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const countersData = [
        { target: 1500, text: "Happy Customers", isColored: true },
        { target: 1700, text: "Registered Members", isColored: false },
        { target: 289, text: "Available Products", isColored: false },
        { target: 3500, text: "Saved Trees", isColored: false },
    ];

    return (
        <div className="container" ref={sectionRef}>
            <div className="row">
                {countersData.map((counter, index) => (
                    <Counter
                        key={index}
                        target={counter.target}
                        text={counter.text}
                        isColored={counter.isColored}
                        isVisible={isVisible} // Pass visibility state
                    />
                ))}
            </div>
        </div>
    );
};

const Counter = ({ target, text, isColored, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return; // Start animation only when section is visible

        let start = 0;
        const duration = 15000; // Animation duration in ms
        const increment = target / (duration / 100);

        const step = () => {
            start = Math.ceil(start + increment);
            if (start < target) {
                setCount(start);
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(step);
    }, [target, isVisible]); // Run when the section becomes visible

    return (
        // <section className="">

            <div className={`four col-lg-3 col-md-6 mt-3`}>
                <div className={`counter-box ${isColored ? "colored" : ""}`}>
                    <span className="counter">{count}</span>
                    <p>{text}</p>
                </div>
            </div>
        // </section>

    );
};

export default CounterComponent;
