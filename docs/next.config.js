/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 核心：开启静态导出
  distDir: 'dist',          // 自定义输出目录
  images: {
    unoptimized: true,         // 关闭 next/image 运行时优化（静态导出必须）
  },
}

export default nextConfig