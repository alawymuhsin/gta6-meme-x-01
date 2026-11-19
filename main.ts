// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme about waiting 13 years for a
// download stuck at 1%, with make.fun's ghost waiting alongside. This program
// does the single job the gate needs: it takes POST.json (the post's address)
// from the repository root and puts it in the output directory, where the
// house reads it and looks the post up on X.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(repoDir, 'POST.json');
const targetPath = join(outDir, 'POST.json');

// Read it first so a broken POST.json fails loudly here instead of
// silently handing the gate a file it cannot use. A placeholder URL is
// fine at this stage — the shape check only asks for a string.
const raw = readFileSync(sourcePath, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
