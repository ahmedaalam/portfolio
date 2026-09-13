'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [stats, setStats] = useState({
    repos: '14+',
    contributions: '337+',
    commits: '315+',
    prs: '3+',
  });

  useEffect(() => {
    const GITHUB_USERNAME = 'ahmedaalam';

    // 1. Fetch Public Repositories
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === 'number') {
          setStats((prev) => ({ ...prev, repos: `${data.public_repos}+` }));
        }
      })
      .catch((err) => console.warn('GitHub repos fetch error:', err));

    // 2. Fetch Total Contributions
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.total) {
          const totalContributions = Object.values(data.total).reduce(
            (sum, val) => (typeof val === 'number' ? sum + val : sum),
            0
          );
          if (totalContributions > 0) {
            setStats((prev) => ({ ...prev, contributions: `${totalContributions}+` }));
          }
        }
      })
      .catch((err) => console.warn('GitHub contributions fetch error:', err));

    // 3. Fetch Total Commits
    fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`, {
      headers: { Accept: 'application/vnd.github.cloak-preview+json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total_count === 'number' && data.total_count > 0) {
          setStats((prev) => ({ ...prev, commits: `${data.total_count}+` }));
        }
      })
      .catch((err) => console.warn('GitHub commits fetch error:', err));

    // 4. Fetch Pull Requests
    fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total_count === 'number') {
          setStats((prev) => ({ ...prev, prs: `${data.total_count}+` }));
        }
      })
      .catch((err) => console.warn('GitHub PRs fetch error:', err));
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="about-heading">
            I turn ideas into interfaces people remember.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a full-stack developer dedicated to crafting intuitive,
              performant digital experiences. With a strong foundation in modern
              web frameworks and UI architecture, I turn complex problems into
              simple, delightful solutions.
            </p>
            <p>
              Over the past few years I&apos;ve picked up a handful of real-world
              lessons shipping features, chasing pixel-perfect detail, and
              working closely with teams — the kind of experience that only
              comes from actually building things people use, not just studying
              how to.
            </p>
          </div>

          <div className="about-stats">
            <a
              href="https://github.com/ahmedaalam"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card github-stat-card"
            >
              <div className="stat-number">{stats.repos}</div>
              <div className="stat-label">Public Repositories</div>
            </a>
            <a
              href="https://github.com/ahmedaalam"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card github-stat-card"
            >
              <div className="stat-number">{stats.contributions}</div>
              <div className="stat-label">Total Contributions</div>
            </a>
            <a
              href="https://github.com/ahmedaalam"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card github-stat-card"
            >
              <div className="stat-number">{stats.commits}</div>
              <div className="stat-label">Total Commits</div>
            </a>
            <a
              href="https://github.com/ahmedaalam"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card github-stat-card"
            >
              <div className="stat-number">{stats.prs}</div>
              <div className="stat-label">Pull Requests</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
