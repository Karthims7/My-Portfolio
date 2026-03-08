import React from 'react';
import { Award, Lock, ExternalLink, Mail, Github, Linkedin, Phone } from 'lucide-react';

const CertificationsAndContact = () => {
    return (
        <section id="certifications" className="container" style={{ paddingBottom: '4rem' }}>

            <div className="certs-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>

                {/* Certifications Map */}
                <div>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem', textTransform: 'none' }}>./certs</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="https://www.credly.com/badges/bb33a795-4570-4b4f-8abd-60d869c04526/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', transition: 'transform 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                                <div style={{ padding: '1rem', background: 'rgba(57, 255, 20, 0.1)', borderRadius: '12px' }}>
                                    <Award size={32} color="var(--accent-green)" />
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                                        RHCSA
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Red Hat Certified System Administrator</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                                        <Lock size={14} /> verified_signature_valid
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.credly.com/badges/6fa7d4c5-ffb0-4d95-9ef1-f6d759b9e383?source=linked_in_profile" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', transition: 'transform 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                                <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '12px' }}>
                                    <Cloud size={32} color="var(--accent-cyan)" />
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                                        AZ-900
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Microsoft Azure Fundamentals</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                                        <Lock size={14} /> verified_signature_valid
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Contact Module */}
                <div id="contact">
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem', textTransform: 'none' }}>ping -c 4 contact</h2>

                    <div className="glass-panel glow-cyan" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Currently seeking new opportunities to build robust cloud infrastructure and optimize developer workflows. Let's connect!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:karthidevopswork@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Mail size={20} color="var(--accent-cyan)" />
                                </div>
                                <span style={{ fontSize: '1.1rem' }}>karthidevopswork@gmail.com</span>
                            </a>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Phone size={20} color="var(--accent-green)" />
                                </div>
                                <span style={{ fontSize: '1.1rem' }}>+91 7824005116</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Github size={20} color="var(--text-main)" />
                                </div>
                                <a href="https://github.com/Karthims7" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'inherit' }}>github.com/Karthims7</a>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Linkedin size={20} color="#0077b5" />
                                </div>
                                <a href="https://www.linkedin.com/in/karthis" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'inherit' }}>linkedin.com/in/karthis</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer style={{ marginTop: '6rem', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0' }}>
                <p>Built with React & Vanilla CSS.</p>
                <p style={{ marginTop: '0.5rem' }}>$ exit</p>
            </footer>
        </section>
    );
};

// Hack to import Cloud icon specifically for Certs
function Cloud(props) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>;
}

export default CertificationsAndContact;
