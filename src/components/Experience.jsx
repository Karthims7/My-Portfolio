import React, { useState } from 'react';
import { GitCommit, GitPullRequest, GitMerge } from 'lucide-react';

const ExperienceCard = ({ exp }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="glass-panel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                flex: 1,
                padding: '2rem',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}>
            <div style={{
                position: 'absolute',
                top: '28px', left: '-15px',
                width: '15px', height: '2px',
                background: 'rgba(255,255,255,0.1)'
            }} />

            <div className="experience-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {exp.role}
                        <span style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>@{exp.company}</span>
                    </h3>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.9rem', background: 'rgba(0,0,0,0.3)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                    {exp.period}
                </div>
            </div>

            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {exp.points.map((pt, i) => {
                    if (i !== 0 && !isHovered) return null;
                    return (
                        <li key={i} style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>$</span>
                            <span>{pt}</span>
                        </li>
                    );
                })}
            </ul>

            {!isHovered && exp.points.length > 1 && (
                <div style={{
                    marginTop: '1rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    opacity: 0.8
                }}>
                    + {exp.points.length - 1} more lines (hover to reveal)
                </div>
            )}
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: 'DevOps / Cloud Engineer',
            company: 'RocketFrog.ai',
            period: 'Dec 2023 – Present',
            icon: <GitMerge size={24} color="var(--accent-cyan)" />,
            points: [
                'Supported Linux-based AWS EC2 production environments including provisioning, configuration, and de-provisioning.',
                'Performed daily system health checks, log reviews, backup validations, and patch verification.',
                'Monitored infrastructure performance using Prometheus, Grafana, Loki, and CloudWatch dashboards.',
                'Investigated and resolved infrastructure, networking, and deployment-related incidents.',
                'Assisted in root cause analysis by collecting logs, metrics, and system-level diagnostics.',
                'Managed IAM roles, cross-account AssumeRole access, and environment-level permissions.',
                'Automated EC2 deployments and environment updates with rollback mechanisms.',
                'Participated in vulnerability scanning and image validation workflows.',
                'Automated repeatable operational tasks using Bash and Python.',
                'Built monitoring dashboards for proactive observability.',
                'Contributed to reducing manual deployment errors through structured automation.',
                'Created operational documentation and environment standards.'
            ]
        },
        {
            role: 'Senior Cloud Engineer',
            company: 'SWS Technologies Pvt. Ltd',
            period: 'Jul 2023 – Dec 2023',
            icon: <GitCommit size={24} color="var(--accent-green)" />,
            points: [
                'Provisioned and maintained Linux-based multi-user engineering environments.',
                'Built PXE/Kickstart pipelines for standardized OS installations.',
                'Managed system packaging, updates, and patch validation for RHEL/CentOS systems.',
                'Conducted performance tuning and system diagnostics on production workloads.',
                'Supported environment replication and disaster recovery exercises.',
                'Performed routine checks on system services, disk utilization, and resource bottlenecks.',
                'Assisted in identifying end-of-life components and upgrade planning.',
                'Implemented monitoring stack using Grafana, Telegraf, and InfluxDB.',
                'Documented environment baselines and operational procedures.'
            ]
        },
        {
            role: 'DevOps Engineer (Freelancer)',
            company: 'Proqio',
            period: 'May 2023 – Jul 2023',
            icon: <GitPullRequest size={24} color="var(--accent-purple)" />,
            points: [
                'Supported CI/CD pipelines and deployment troubleshooting.',
                'Assisted in Kubernetes (EKS) environment maintenance.',
                'Resolved build failures and improved deployment reliability.',
                'Worked with Git workflows and repository management.'
            ]
        },
        {
            role: 'DevOps Engineer (Internship)',
            company: 'Pixel & Mortar',
            period: 'Jul 2022 – Nov 2022',
            icon: <GitCommit size={24} color="var(--text-muted)" />,
            points: [
                'Provisioned AWS infrastructure using Terraform.',
                'Supported multi-account AWS environments [AWS Control Tower, Organizations, and more..]',
                'Assisted in container deployments and CI/CD pipeline setup.',
                'Created runbooks and operational documentation.'
            ]
        }
    ];

    return (
        <section id="experience" className="container">
            <h2 className="section-title">pipeline --history</h2>

            <div style={{ position: 'relative', marginTop: '4rem' }}>
                <div style={{
                    position: 'absolute',
                    top: 0, bottom: 0, left: '26px',
                    width: '4px',
                    background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-green), var(--accent-purple), #444)',
                    borderRadius: '4px',
                    zIndex: 0
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {experiences.map((exp, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{
                                width: '56px', height: '56px',
                                background: 'var(--bg-dark)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '2px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 0 15px rgba(0,0,0,0.5)',
                                color: 'white',
                                flexShrink: 0
                            }}>
                                {exp.icon}
                            </div>

                            <ExperienceCard exp={exp} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
