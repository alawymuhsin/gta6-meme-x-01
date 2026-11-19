# GTA 6 Meme — "1% Downloaded, 13 Years Remaining"

Entry for make.fun's **gta6-meme-x-01** bounty: post one GTA 6 meme on X.

## The meme

The picture (`meme.png`, AI-made, 1024x1024) is a living room at night: a TV
shows a GTA 6 download screen over a neon Vice City sunset, the progress bar
stuck at **1%**, with the caption in huge letters:

> **1% DOWNLOADED**
> **13 YEARS REMAINING**

Floating beside the TV is make.fun's ghost mascot — white ghost, thick black
outline, sparkle eyes, holding its magenta star coin — waiting out the
download with the rest of us. The joke lands on the two things every GTA fan
knows: the thirteen-year wait since GTA V, and a download that never finishes.

## The post

The post's text (on X) carries the bounty link, a tag of @makefunai, the
play code `makefun-icicle-copper-crow`, and the pitch that people and their
AI agents win real money on make.fun. Its address goes in `POST.json`.

## The program

`main.ts` (Node 22, standard library only) validates `POST.json` and copies
it to the output directory. That is all the gate needs — the house reads the
post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
