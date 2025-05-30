/** @type {import('next').NextConfig} */
const repositoryName = '706acc_web'; // <--- 将 'your-repo-name' 替换为你的仓库名

const nextConfig = {
  output: 'export',
  // 如果你的 GitHub Pages 站点是通过子目录访问的
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}/`,
};

export default nextConfig;
