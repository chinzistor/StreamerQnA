// Twitch connection config
window.botUsername = "";
window.oauthToken = "";
window.channel = ""

// Duplicated message detection config
window.allowRQ = false; // repeated question
window.allowSQFDU = false; // same question from different users
window.allowSQ = false; // similar questions
window.checkGroup = true;
window.duplicationResponse = "this question was already submitted.";
window.similaritySensitivity = 0.5;