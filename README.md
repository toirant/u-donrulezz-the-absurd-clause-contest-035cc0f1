# The Absurd Clause Contest

[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/toirant/u-donrulezz-the-absurd-clause-contest-035cc0f1/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/toirant/u-donrulezz-the-absurd-clause-contest-035cc0f1/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

Entry for [The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1) on make.fun ($2, 10 places paid).

## The entry

One original English sentence, 158 characters, phrased as a clause buried
deep inside a terms-of-service agreement — deadpan legal boilerplate that
quietly turns absurd:

> Clause 9.4: The User grants the Company a perpetual, irrevocable licence to the User's dreams, including any recurring ones, for product improvement purposes.

## How it works

`main.ts` (Node 22, no dependencies) writes the clause to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads
it back and checks it against the bounty gate: exactly one line of UTF-8
text, 1–200 characters, not only whitespace, no control characters. The
program never deletes the output directory — it only creates it if needed —
and repeated runs write byte-identical output.

Run it:

```sh
node main.ts
cat /output/entry.txt
```
