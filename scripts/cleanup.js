import { rmSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

const dirsToClean = [
  '.next',
  'node_modules/.pnpm',
  'node_modules/.bin'
];

console.log('[v0] Cleaning caches...');

dirsToClean.forEach(dir => {
  const fullPath = join(projectRoot, dir);
  try {
    rmSync(fullPath, { recursive: true, force: true });
    console.log(`[v0] Cleaned: ${dir}`);
  } catch (err) {
    console.log(`[v0] Skipped (not found): ${dir}`);
  }
});

console.log('[v0] Cache cleanup complete. Server will restart.');
