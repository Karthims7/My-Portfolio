import React from 'react';
import { Server, Shield, CloudLightning } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="container">
            <h2 className="section-title">whoami</h2>

            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '4rem', alignItems: 'flex-start' }}>

                {/* Photo Section */}
                <div style={{ position: 'relative' }}>
                    <div className="glow-cyan" style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        overflow: 'hidden',
                        border: '2px solid var(--accent-cyan)'
                    }}>
                        <img
                            src="/image.png"
                            alt="Karthi S"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>Sr. Cloud & DevOps Engineer</h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.8', fontFamily: 'var(--font-sans)', fontWeight: '500', letterSpacing: '0.2px' }}>
                        Building 3+ years of experience handling Linux-based production environments across AWS and Azure as well as OnPrem. Strong background in environment provisioning, patching, monitoring, troubleshooting, and automation of Devops Operational workflows.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.8' }}>
                        Hands-on experience in Linux administration (RHEL/CentOS/Ubuntu), system performance monitoring, log analysis, cloud infrastructure support, and ITSM-driven incident handling. Skilled in Bash and Python scripting to automate repeatable operational tasks and improve system reliability.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                        Experienced working in structured support environments with a proactive, detail-oriented, and RCA-driven approach.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="mailto:karthidevopswork@gmail.com" className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'inline-block' }}>
                            contact_me.sh
                        </a>
                        <a href="#experience" className="glow-cyan glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'inline-block', color: 'var(--text-main)' }}>
                            ./view_experience
                        </a>
                    </div>
                </div>
            </div>

            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginTop: '4rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <Shield color="var(--accent-purple)" size={32} />
                    <h3 style={{ color: 'var(--text-main)' }}>Linux/Unix Admin</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>RHEL, CentOS, Ubuntu environment provisioning, setup, patching, and configuration management.</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <CloudLightning color="var(--accent-cyan)" size={32} />
                    <h3 style={{ color: 'var(--text-main)' }}>Cloud & SRE</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>AWS & Azure operations, incident & change management, RCA, logging and monitoring (Grafana, CloudWatch).</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <Server color="var(--accent-green)" size={32} />
                    <h3 style={{ color: 'var(--text-main)' }}>Automation</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Leveraging Bash and Python alongside CI/CD workflows to eliminate toil and ensure repeatability.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
