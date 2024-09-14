# How the spam filtering works

The spam filter compares the new submission with the already saved ones by characters.
No AI is involved meaning it does not check topics or whatsoever, it literally checks if one text is similar to another.

The [system](/scripts/dashboard/queue/addQuestion.js) (lines 10-83) takes the new submission and compares it to all previously submitted texts.
It will check several things:
- if the same viewer has submitted the same thing previously
- if the previous submission is saved in the same group or not
- if other viewers have submitted the same thing previously
- how similar the saved one is to the new one

## Similarity check

There's another [system](/scripts/dashboard/queue/checkStringSimilarities.md) that compares the two texts to each other.

First it takes the 2 texts and chop them up into little pieces containing 3 characters (trigrams).
Example:
- `applesauce` chopped up: `app` `ppl` `ple` `les` `esa` `sau` `auc` `uce`
- `pinecakes` chopped up: `pan` `anc` `nca` `cak` `ake` `kes`
- `pineapple` chopped up: `pin` `ine` `nea` `eap` `app` `ppl` `ple`
Then the system will check how many of the first text's trigrams are in the second text's trigrams (intersection).
- `applesauce` and `pinecakes`: 0
- `applesauce` and `pineapple`: 3
- `pinecakes` and `pineapple`: 2
The system then multiplies this value by 2, divides it by the sum of the sum of the two texts' length (the number of characters), then multiplies the whole value by the rate of the two texts' length.
The math: `(2 * intersection / (text1's length + text2's length)) * the two texts' length relative to each other`
This returns a value between 0 and 1 where 0 means the two texts are completely different and 1 means the two texts are identical.
- Similarity of `applesauce` and `pinecakes`: 0
- Similarity of `applesauce` and `pineapple`: 0.379 or 37.9%
- Similarity of `pinecakes` and `pineapple`: 0.2857 or 28.57%
If the similarity is higher than the set value, the submission is going to be rejected.