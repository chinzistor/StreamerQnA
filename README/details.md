# How the system works
When you load the [dock](/dashboard.html) into OBS it is going to launch a Twitch chatbot based on the configuration you configured in the **Configuration/Bot** page within the dashboard.

While the bot is being initiated, the dashboard is going to check what commands you set up in **Configuration/Commands** and it'll create groups accordingly under **Queue** with the needed buttons.
The styling is based on what you configure in **Configuration/Style**.

After the groups have been created, the bot is going to listen to the set commands and if any of those commands are used in the set channel, the system is going to show them in **Queue** under the corresponding group/tab.
While showing these registered messages, the system is also going to store these messages within a so called localStorage (it's like cookies in your browser but can store a ton more data and doesn't have an expiration date).
You'll also get 2 buttons for each message, one that says **Show** to show that message on stream and one that says **Delete** to remove the message from the queue.

When you click the **Show** button, it is going to be replaced with text that says **Hide** and the message next to it is going to be tagged within that localStorage.
If you click **Hide**, it'll switch back to **Show** and the message will be untagged.

Once you load the browser source into OBS, it'll start frequently checking which message is tagged, and if it sees there's a tagged message, it'll show it on the stream in the style set under **Configuration/Style**.
If it sees that there's no tagged message, it'll clear the bubble from all content making it invisible thus not disturbing.


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

There's another [system](/scripts/dashboard/queue/checkStringSimilarities.js) that compares the two texts to each other.

First it takes the 2 texts and chop them up into little pieces containing 3 characters (trigrams).
Example:
- `applesauce` chopped up: `app` `ppl` `ple` `les` `esa` `sau` `auc` `uce`
- `pinecakes` chopped up: `pan` `anc` `nca` `cak` `ake` `kes`
- `pineapple` chopped up: `pin` `ine` `nea` `eap` `app` `ppl` `ple`

Then the system will check how many of the first text's trigrams are in the second text's trigrams (intersection).
- `applesauce` and `pinecakes`: 0 trigrams are shared
- `applesauce` and `pineapple`: 3 trigrams are shared
- `pinecakes` and `pineapple`: 2 trigrams are shared

The system then multiplies this value by 2, divides it by the sum of the sum of the two texts' length (the number of characters), then multiplies the whole value by the rate of the two texts' length.
The math: `(2 * intersection / (text1's length + text2's length)) * the two texts' length relative to each other`
This returns a value between 0 and 1 where 0 means the two texts are completely different and 1 means the two texts are identical.
- Similarity of `applesauce` and `pinecakes`: 0
- Similarity of `applesauce` and `pineapple`: 0.379 or 37.9%
- Similarity of `pinecakes` and `pineapple`: 0.2857 or 28.57%
If the similarity is higher than the set value, the submission is going to be rejected.