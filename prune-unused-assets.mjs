import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const IMAGE_EXT = /\.(avif|webp|jpe?g|png|gif|svg)$/i;
const TEXT_EXT = /\.(html|css|js|mjs|json|xml|txt)$/i;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

/**
 * `src/assets` dagi rasmlar content collection sxemasi orqali import
 * qilinadi, shuning uchun Vite ularning **asl** nusxasini ham `_astro/`
 * ga chiqaradi — hatto faqat o'zgartirilgan variantlari ishlatilsa ham.
 * Bu 49 fayl = 4 MB o'lik yuk. Shu hook build tugagach `_astro/` dagi
 * hech qayerda havola qilinmagan rasmlarni o'chiradi.
 *
 * Havolalar dist ichidagi BARCHA matnli fayllardan yig'iladi (html, css,
 * js, xml), shuning uchun CSS yoki JS ichidagi havola ham hisobga olinadi.
 */
export default function pruneUnusedAssets() {
  return {
    name: 'prune-unused-assets',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = dir.pathname.replace(/^\/([A-Za-z]:)/, '$1');
        const assetsDir = join(root, '_astro');
        let files;
        try {
          files = await walk(assetsDir);
        } catch {
          return;
        }

        const referenced = new Set();
        for (const file of await walk(root)) {
          if (!TEXT_EXT.test(file)) continue;
          const text = await readFile(file, 'utf8');
          for (const m of text.matchAll(/_astro\/([\w.\-@]+)/g)) referenced.add(m[1]);
        }

        let removed = 0;
        let bytes = 0;
        for (const file of files) {
          const name = relative(assetsDir, file).split(sep).join('/');
          if (!IMAGE_EXT.test(name) || referenced.has(name)) continue;
          bytes += (await stat(file)).size;
          await unlink(file);
          removed++;
        }

        if (removed) {
          logger.info(
            `havolasiz ${removed} rasm o'chirildi (${(bytes / 1024 / 1024).toFixed(2)} MB)`,
          );
        }
      },
    },
  };
}
