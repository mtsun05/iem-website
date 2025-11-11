import {useState, useMemo, useRef} from 'react';
import {CarShowcase} from '../components/CarShowcase';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import murphy_24 from "@/assets/murphy_24.jpg";
import vulcan_23 from "@/assets/vulcan_23.jpg";
import zephyr_22 from "@/assets/zephyr_22.jpeg";
import artemis_21 from "@/assets/artemis_21.jpeg";

const PARTS_INFO = {
    GENERAL: {
        title: "IEM 2024 MURPHY",
        description: "Description",
        details: "Details here...",
    },
    DIFFUSER: {
        title: "Rear Diffuser",
        description: "Description",
        details: "Details here...",
    },
    FRONT_SPOILER: {
        title: "Front Spoiler",
        description: "Description",
        details: "Details here...",
    },
    REAR_WING: {
        title: "Rear Wing",
        description: "Description",
        details: "Details here...",
    },
    VENTURI: {
        title: "Venturi Tunnels",
        description: "Description",
        details: "Details here...",
    }
};
type PartKey = keyof typeof PARTS_INFO;

const pastCarsData = [
    {
        imgSrc: murphy_24,
        name: "IEM 2024 'MURPHY'",
        params: "600V / 8.5kWh / 78 mph",
        description: "Write some descriptions here...",
    },
    {
        imgSrc: vulcan_23,
        name: "IEM 2023 'VULCAN'",
        params: "600V / 8.5kWh / 78 mph",
        description: "Write some descriptions here..."
    },
    {
        imgSrc: zephyr_22,
        name: "IEM 2022 'ZEPHYR'",
        params: "600V / 8.5kWh / 78 mph",
        description: "Write some descriptions here..."
    },
    {
        imgSrc: artemis_21,
        name: "IEM 2021 'ARTEMIS'",
        params: "400V / 21Ah / >80 mph",
        description: "Write some descriptions here..."
    },
];

export default function CarsPage() {
    const [activePart, setActivePart] = useState<PartKey | null>(null);

    const handlePartClick = (part: PartKey) => {
        setActivePart(prev => prev === part ? null : part);
    };

    const isDefaultView = activePart === null;
    const highlightedPart3D = (activePart && activePart !== 'GENERAL') ? activePart : null;
    const isAutoRotating = isDefaultView || activePart === 'GENERAL';

    const displayInfo = useMemo(() => {
        return activePart ? PARTS_INFO[activePart] : null;
    }, [activePart]);

    const plugin = useRef(
        Autoplay({delay: 5000, stopOnMouseEnter: true}),
    );

    return (
        <main className="bg-neutral-900 text-white">
            <div
                className="h-[calc(100vh-10rem)] w-screen bg-neutral-900 text-white overflow-hidden relative font-sans">
                <div className="absolute inset-0 z-0">
                    <CarShowcase highlightedPart={highlightedPart3D} isAutoRotating={isAutoRotating}/>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8">

                    <div className="flex justify-center pointer-events-auto">
                        <button
                            className={`px-6 py-3 rounded-full backdrop-blur-md border 
                                    transition-all duration-200 ease-out
                                    hover:scale-105 active:scale-95
                                    ${activePart === 'GENERAL'
                                ? 'bg-white/20 border-white/50'
                                : 'bg-black/30 border-white/10 hover:bg-black/50'
                            }`}
                            onClick={() => handlePartClick('GENERAL')}
                        >
                            <h1 className="text-xl font-semibold tracking-wider">IEM 2024 MURPHY</h1>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-end px-20">
                        <div
                            className={`w-96 bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-white/10
                                    transition-all duration-500 ease-in-out
                                    ${activePart
                                ? 'opacity-100 translate-x-0 pointer-events-auto'
                                : 'opacity-0 translate-x-12 pointer-events-none'
                            }`}
                        >
                            {displayInfo && (
                                <>
                                    <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-3xl font-semibold uppercase mb-4">{displayInfo.title}</span>
                                    <h3 className="text-lg text-neutral-300 mb-6">{displayInfo.description}</h3>
                                    <p className="text-sm leading-relaxed text-neutral-400">{displayInfo.details}</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 pointer-events-auto mb-8">
                        {(['FRONT_SPOILER', 'VENTURI', 'DIFFUSER', 'REAR_WING'] as PartKey[]).map((part) => (
                            <button
                                key={part}
                                className={`px-6 py-4 rounded-xl backdrop-blur-md border min-w-[140px] text-left 
                                        transition-all duration-200 ease-out
                                        hover:-translate-y-1 active:scale-[.98]
                                        ${activePart === part
                                    ? 'bg-yellow-400/90 border-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                                    : 'bg-black/40 border-white/10 hover:bg-black/60 hover:border-white/30 text-neutral-300'
                                }`}
                                onClick={() => handlePartClick(part)}
                            >
                                <span className="block text-xs opacity-60 mb-1">EXPLORE</span>
                                <span className="font-bold">{PARTS_INFO[part].title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <section className="w-full py-20 sm:py-32 bg-neutral-950/50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">

                    <div className="mb-12 md:mb-16 text-center">
                        <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-xl font-semibold uppercase">
                            Archive
                        </span>
                        <p className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Past Challengers</p>
                    </div>

                    <Carousel
                        className="my-5 w-full"
                        opts={{ loop: true, watchDrag: false }}
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                    >
                        <CarouselContent className="flex">
                            {pastCarsData.map((card, index) => (
                                <CarouselItem key={index}>
                                    <div className="bg-black/60 backdrop-blur-lg p-8 rounded-4xl border border-white/10 h-[600px] flex flex-col mx-2">

                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                            <div className="w-full md:w-1/2">
                                                <img
                                                    className="rounded-2xl aspect-video w-full object-cover"
                                                    src={card.imgSrc}
                                                    alt={card.name}
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-3xl font-semibold uppercase">{card.name}</span>
                                                <p className="text-lg text-neutral-300 mt-2">{card.params}</p>
                                            </div>
                                        </div>

                                        <div className="mt-10 border-t border-white/10 pt-6">
                                            <p className="text-base text-neutral-400 leading-relaxed">{card.description}</p>
                                        </div>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black scale-150 transition duration-300 left-5" />
                        <CarouselNext className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black scale-150 transition duration-300 right-5" />
                    </Carousel>
                </div>
            </section>
        </main>
    );
}