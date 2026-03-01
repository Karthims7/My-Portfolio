import React from 'react';
import { Box, Cloud, Settings, Terminal, Database, Activity } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'CI/CD & DevOps',
            icon: <Settings color="var(--accent-cyan)" />,
            skills: ['GitHub Actions', 'Jenkins', 'Azure DevOps', 'GitLab CI', 'Branching Strategies']
        },
        {
            title: 'Cloud',
            icon: <Cloud color="var(--accent-green)" />,
            skills: ['AWS (EC2, S3, IAM, RDS, ECR, ALB, CloudWatch)', 'Azure']
        },
        {
            title: 'Infrastructure as Code',
            icon: <Database color="var(--accent-purple)" />,
            skills: ['Terraform', 'Cloud-init']
        },
        {
            title: 'Containers',
            icon: <Box color="var(--accent-cyan)" />,
            skills: ['Docker', 'Docker-compose', 'Kubernetes (EKS exposure)']
        },
        {
            title: 'Monitoring',
            icon: <Activity color="var(--accent-green)" />,
            skills: ['Prometheus', 'Grafana', 'Loki', 'ELK', 'CloudWatch']
        },
        {
            title: 'Linux & Scripting',
            icon: <Terminal color="var(--accent-purple)" />,
            skills: ['Bash', 'Python', 'RHEL/CentOS', 'System Administration']
        }
    ];

    return (
        <section id="skills" className="container">
            <h2 className="section-title" style={{ textTransform: 'none' }}>docker ps -a --format "skills"</h2>

            <div className="skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                {skillCategories.map((cat, idx) => (
                    <div key={idx} className="glass-panel" style={{
                        padding: '1.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {/* Top Bar for Docker Container Aesthetic */}
                        <div style={{
                            background: 'var(--bg-dark)',
                            margin: '-1.5rem -1.5rem 1.5rem -1.5rem',
                            padding: '0.8rem 1.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            {cat.icon}
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1.1rem', margin: 0 }}>
                                {cat.title}
                            </h3>
                            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>UP 24/7</span>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {cat.skills.map((skill, i) => (
                                <span key={i} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-main)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            position: 'absolute', bottom: '1rem', right: '1.5rem',
                            fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)'
                        }}>
                            ID: {Math.random().toString(16).substr(2, 8)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
