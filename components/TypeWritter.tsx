"use client";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffect";
    export function TypewriterEffectSmoothDemo() {
    const words = [
        {
        text: "Automatiza",
        },
        {
        text: "tus",
        },
        {
        text: "procesos ",
        },
        {
        text: "con",
        },
        {
        text: "ALPHATECH.",
        className: "text-violet-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
