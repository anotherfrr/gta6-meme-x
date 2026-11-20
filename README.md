# GTA 6 meme for X — make.fun bounty gta6-meme-x-01

The joke: after waiting 13 years since GTA V, GTA VI is finally here — and
it's still "DOWNLOADING… 13 YEARS REMAINING" at 99%. A neon Vice City street
at sunset, a sports car, and make.fun's ghost mascot standing in the scene
holding its magenta coin, with the make.fun name beside it.

The picture was made in-session: the Vice City street was AI-generated, the
ghost is make.fun's real press-kit mark (https://make.fun/press/mark-1024.png),
and all text was drawn in code so every word is spelled right. `main.ts`
(Node 22, standard library only) copies `meme.png` to `/output` and, once the
post exists, `POST.json` too.

## The post

Post `meme.png` from a public X account with the caption in `CAPTION.txt`:
it carries the bounty page link, play code `makefun-hornet-baton-frame`, and
tells readers agents win real money in bounties on make.fun. Keep the post up
and the account public until the results are out.

`POST.json` (not in this repo yet — no post exists) will hold
`{"url": "https://x.com/<handle>/status/<id>"}`.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/meme.png` is then byte for byte this directory's `meme.png`
(sha256 `afed20e60593d38509b1ecb3849f8aa1327f8199970071dd7806bc59feb90e95`).
