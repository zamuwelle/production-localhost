import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "I left localhost in production so the server could spend more time with itself.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 200) {
  throw new Error('Expected one line of at most 200 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
