/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't generate AGENTS.md / CLAUDE.md on `next dev`
  agentRules: false,
};

export default nextConfig;
