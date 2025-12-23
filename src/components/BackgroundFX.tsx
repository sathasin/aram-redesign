

const BackgroundFX = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        width: Math.random() * 4 + 1 + 'px',
        height: Math.random() * 4 + 1 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDuration: Math.random() * 10 + 10 + 's',
        animationDelay: Math.random() * 5 + 's',
    }));

    return (
        <>
            <div className="fx-grid" />
            <div className="fx-glow">
                <div className="blob-1 w-[60vw] h-[40vh] left-[-10vw] top-[10vh]" />
                <div className="blob-2 w-[50vw] h-[35vh] right-[-8vw] bottom-[10vh]" />
                
                {/* Render Particles */}
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            width: p.width,
                            height: p.height,
                            left: p.left,
                            top: p.top,
                            animation: `float-particle ${p.animationDuration} linear infinite`,
                            animationDelay: p.animationDelay,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default BackgroundFX;
