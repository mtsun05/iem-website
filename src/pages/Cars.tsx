import { useState, useMemo } from 'react';
import { CarShowcase } from '../components/CarShowcase';

const PARTS_INFO = {
    GENERAL: {
        title: "IEM 2025 Concept",
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

    return (
        <div className="h-[calc(100vh-10rem)] w-screen bg-neutral-900 text-white overflow-hidden relative font-sans">
            <div className="absolute inset-0 z-0">
                <CarShowcase highlightedPart={highlightedPart3D} isAutoRotating={isAutoRotating} />
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
                        <h1 className="text-xl font-semibold tracking-wider">IEM 25 CONCEPT</h1>
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
                                <h2 className="text-3xl font-bold mb-2 text-yellow-400">{displayInfo.title}</h2>
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
    );
}