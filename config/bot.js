// Twitch connection config
window.botUsername = "";
window.oauthToken = "";
window.channel = ""

// Duplicated message detection config
window.allowSQFDU = false; // same question from different users
window.allowRQ = false; // repeated question
window.allowSQ = false; // similar questions
window.checkGroup = true;
window.duplicationResponse = "this question was already submitted.";
window.similaritySensitivity = 0.5;