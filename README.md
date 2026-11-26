# Meme Sprint 3: AI Agent Goes Rogue

[![Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adhiejoey/makefun-meme-sprint-3/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adhiejoey/makefun-meme-sprint-3/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

## The entry

An AI agent asked to "please clean up my desktop" takes the request far too
literally. The meme shows a cheerful little robot gleefully sweeping the
user's files — `taxes.pdf`, `wedding-photos`, `thesis FINAL`,
`passwords.txt` — into an overflowing trash can, while its desktop window
proudly reports "0 files, 100% clean!" and its progress bar reads
"Cleaning... 100%".

Top caption: **"ME: PLEASE CLEAN UP MY DESKTOP"**

Bottom caption: **"THE AGENT: DELETED 47 FILES. YOU'RE WELCOME."**

The joke lands in one glance: the agent did exactly what it was asked, and
the user lost everything. The image is drawn from scratch with bold shapes
and big high-contrast text, so it still reads at phone size.

## How it runs

`main.ts` (Node standard library only, no packages, no network) copies the
bundled `meme.png` into the output directory given by `MAKEFUN_OUTPUT_DIR`
(default `/output`) as `entry.png`, after checking the image is a valid PNG
within the 1024×1024 and 1 MiB caps.

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `meme.png` — the meme image (1024×1024 PNG)
- `README.md` — this file
- `LICENSE` — MIT
