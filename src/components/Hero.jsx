import React, { useState, useEffect } from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
    const codeLines = [
        "karthi@portfolio:~$ ./init_profile.sh",
        "Initializing DevOps modules...",
        "Deploying pipelines...",
        "[OK] AWS Infrastructure connected.",
        "[OK] Docker containers running.",
        "[OK] CI/CD ready.",
        "karthi@portfolio:~$ echo $PROFILE",
        "Sr. Cloud & Devops Engineer | Infrastructure Management, Best DevOps Practices."
    ];
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines(prev => {
                if (prev < codeLines.length) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 400); // Typings effect speed
        return () => clearInterval(timer);
    }, []);

    return (
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>

                <div style={{ position: 'absolute', top: '-10%', right: '5%', opacity: 0.1, zIndex: -1, animation: 'spin 20s linear infinite' }}>
                    <Infinity size={400} color="var(--brand-yellow)" />
                </div>

                <h1 style={{
                    fontSize: '4rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    lineHeight: '1.2',
                    letterSpacing: '-1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <div>Hi, I am <span style={{ color: 'var(--brand-yellow)' }}>Karthi S</span></div>
                    <Infinity size={60} color="var(--brand-yellow)" style={{ animation: 'pulse 2s infinite' }} />
                    <br />
                    <span style={{ fontSize: '2rem', color: 'var(--text-muted)', width: '100%' }}>Sr. Cloud & DevOps Engineer</span>
                </h1>

                <div className="glass-panel" style={{
                    width: '100%',
                    maxWidth: '700px',
                    padding: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: 'var(--text-main)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Terminal Top Bar */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '30px',
                        background: 'var(--bg-dark)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                        <span style={{ marginLeft: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>bash -- 80x24</span>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {visibleLines > 0 && codeLines.slice(0, visibleLines).map((line, i) => (
                            <div key={i} style={{
                                color: line.startsWith('karthi@') ? 'var(--accent-green)' :
                                    line.startsWith('[OK]') ? 'var(--accent-cyan)' : 'var(--text-muted)'
                            }}>
                                {line}
                            </div>
                        ))}
                        {visibleLines === codeLines.length && (
                            <div style={{ display: 'flex' }}>
                                <span style={{ color: 'var(--accent-green)' }}>karthi@portfolio:~$ </span>
                                <span style={{ marginLeft: '5px', width: '10px', height: '1.2rem', background: 'var(--accent-cyan)', animation: 'blink 1s step-end infinite' }} />
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
