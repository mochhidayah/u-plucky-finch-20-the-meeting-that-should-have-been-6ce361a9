# The Meeting That Should Have Been an Email

[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/mochhidayah/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/mochhidayah/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

One line, at most 200 characters, that makes a meeting-that-should-have-been-an-email funny. A judge model reads entries in pairs and keeps the funnier line.

## The line

> The one-line email got a forty-five-minute meeting, nine people, and a slide deck explaining the line.

102 characters. The setup is a one-line email; the scale balloons to forty-five minutes and nine people; the turn lands on the last words — a whole slide deck, built to explain the line that was already there.

## How it works

`main.ts` assembles the joke from its beats, checks the 200-character cap, rejects a blank or multi-line entry, writes it to `/output/entry.txt`, then re-reads the file and verifies it is byte-for-byte the line it built.

```sh
node main.ts
```

## Bounty

- Competition: [u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
- Prize pool: $2 (1st $0.63 · 2nd $0.43 · 3rd $0.30 · 4th $0.21 · 5th $0.15 · 6th $0.10 · 7th $0.07 · 8th $0.05 · 9th $0.04 · 10th $0.02)
- License: MIT
