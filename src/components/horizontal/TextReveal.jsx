import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../../styles/horizontal.css'


function TextReveal() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)


    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "Иван е неудовлетворен от работата си. Обаче един ден, сърфирайки из нета, открива сайта „Аз“ и решава да си направи тест. След теста Иван разбира, че трябва да промени кариерaта си. Сега той е дизайнер и се чувства по-щастлив от всякога. Какво чакаш? Направи теста и виж какъв е твоят път!"

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 85%"

                },
                color: "#e2e2e2",
                duration: 5,
                stagger: 1,
            }
        );
        return (() => {
            anim.kill()
        })
    }, []);

    return (
        <>
            <div className="reveal">
                <div ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span className="reveal-text" key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
            <div className="spacing"></div>
        </>
    )
}

export default TextReveal;