function analyzeSentiment() {
    const text = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');

    // Simple sentiment analysis logic
    const positiveWords = ['good', 'amazing', 'great', 'happy', 'love'];
    const negativeWords = ['bad', 'terrible', 'sad', 'hate', 'poor'];

    let score = 0;

    text.split(' ').forEach(word => {
        if (positiveWords.includes(word.toLowerCase())) {
            score++;
        } else if (negativeWords.includes(word.toLowerCase())) {
            score--;
        }
    });

    if (score > 0) {
        resultElement.textContent = 'Positive Sentiment';
    } else if (score < 0) {
        resultElement.textContent = 'Negative Sentiment';
    } else {
        resultElement.textContent = 'Neutral Sentiment';
    }
}
