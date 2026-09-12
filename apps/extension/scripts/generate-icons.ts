/**
 * 图标生成脚本
 * 将大图缩放为插件所需的多个尺寸
 * 
 * 使用方法：
 * 1. 安装依赖：pnpm add -D sharp
 * 2. 将你的 2048x2048 图片放到 apps/extension/ 目录，命名为 icon-source.png
 * 3. 运行：npx tsx scripts/generate-icons.ts
 */
import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sizes = [16, 32, 48, 128];

async function generateIcons() {
  const sourceFile = resolve(__dirname, '../icon-source.png');
  const outputDir = resolve(__dirname, '../public/assets');

  // 检查源文件
  if (!existsSync(sourceFile)) {
    console.error('请将你的图标文件放到 apps/extension/icon-source.png');
    process.exit(1);
  }

  // 创建输出目录
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log('开始生成图标...\n');

  for (const size of sizes) {
    const outputFile = resolve(outputDir, `icon-${size}.png`);
    await sharp(sourceFile)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputFile);
    console.log(`  icon-${size}.png`);
  }

  console.log('\n图标生成完成！位于 public/assets/ 目录');
  console.log('   重新构建插件即可生效');
}

generateIcons().catch(console.error);
