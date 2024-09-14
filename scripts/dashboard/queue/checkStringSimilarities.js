// Creating trigrams from the incoming and the stored questions
function getTrigrams(string) {
    const s = string.toLowerCase();
    const trigrams = [];
    for (let i = 0; i < s.length - 2; i++) {
        trigrams.push(s.slice(i, i + 3));
    }
    return trigrams;
}

// Checking similarities between the incoming and a stored question
function checkStringSimilarities(string1, string2) {
    // Getting the trigrams of both strings
    const trigrams1 = getTrigrams(string1);
    const trigrams2 = getTrigrams(string2);
    // Getting the length of both strings
    const length1 = string1.length;
    const length2 = string2.length;
    // Checking how many trigrams are in both strings
    const intersection = trigrams1.filter(trigram => trigrams2.includes(trigram)).length;
    
    // Modifying the similarity value based on the length of both strings
    if (length1 > 0 && length2 > 0) {
        let lengthRate = length1 / length2;
        if (lengthRate > 1) {
            lengthRate = 1 / Math.abs(lengthRate);
        }
        lengthRate = Math.sqrt(Math.abs(lengthRate));
        return ((2.0 * intersection) / (trigrams1.length + trigrams2.length)) * lengthRate;
    }

    // If at least one of the strings is empty
    else {
        return 0;
    }
}