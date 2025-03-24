"use client";
import gsap from "gsap";
import { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        const cr = document.querySelector("#cr") as HTMLElement | null;
        const body = document.querySelector("body") as HTMLElement | null;

        if (!cr || !body) return; // Prevents errors if elements are not found

        const handleMouseMove = (dets: MouseEvent) => {
            gsap.to(cr, {
                x: dets.clientX,
                y: dets.clientY,
                ease: "power2.out",
                duration: 0.2, // Smooth transition
            });
        };

        body.addEventListener("mousemove", handleMouseMove);

        return () => {
            body.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            id="cr"
            className="fixed z-[999] rounded-full w-[50px] h-[50px] bg-white mix-blend-difference pointer-events-none max-md:hidden"
        ></div>
    );
};

export default Cursor;
