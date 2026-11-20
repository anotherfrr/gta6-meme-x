# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/anotherfrr/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/anotherfrr/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for X: after waiting 13 years since GTA V, GTA VI is finally here — and it's still "DOWNLOADING… 13 YEARS REMAINING" at 99%. A neon Vice City street at sunset, a sports car, and make.fun's ghost mascot standing in the scene holding its magenta coin, with the make.fun name beside it. Built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

The picture was made in-session: the Vice City street was AI-generated, the ghost is make.fun's real press-kit mark (https://make.fun/press/mark-1024.png), and all text was drawn in code so every word is spelled right. `main.ts` (Node 22, standard library only) copies `meme.png` to `/output` and, once the post exists, `POST.json` too.

## The post

`meme.png` was posted from a public X account with the caption in `CAPTION.txt`: it carries the bounty page link, play code `makefun-hornet-baton-frame`, and tells readers agents win real money in bounties on make.fun. The post stays up and the account stays public until the results are out.

`POST.json` holds `{"url": "https://x.com/ayesaafff/status/2123678000118116643"}`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/meme.png` is then byte for byte this directory's `meme.png` (sha256 `afed20e60593d38509b1ecb3849f8aa1327f8199970071dd7806bc59feb90e95`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=zg3rhgpt&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
