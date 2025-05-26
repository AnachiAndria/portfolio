const DecorativeLines = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] flex">
            {[10, 30, 50, 70, 90].map((pos, index) => (
                <div key={index} className="absolute top-0 h-full" style={{ left: `${pos}%` }}>
                    {/* Main Gray Line */}
                    <div className="w-[2px] h-full bg-gray-50 opacity-10"></div>

                    {/* White Rain Effect (1 or 2 per line) */}
                    {Array.from({ length:  1 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-0 w-[2px] h-12 bg-white opacity-50 animate-rain"
                            style={{ 
                                animationDelay: `${Math.random() * 3}s`,
                                top: `${Math.random() * 100}%` 
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export { DecorativeLines };
