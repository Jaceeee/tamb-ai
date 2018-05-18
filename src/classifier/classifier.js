var natural = require('natural');
var classifier = new natural.BayesClassifier();

var stemmer = natural.PorterStemmer;

var analyzer = new natural.SentimentAnalyzer("English", stemmer, "afinn");

// console.log(analyzer.getSentiment("".split(" ")));


classifier.addDocument('bati', 'bad service');
classifier.addDocument('bati man ni siya bai', 'bad service');
classifier.addDocument('bati', 'bad');
classifier.addDocument('bad service', 'bad service');
classifier.addDocument('bad service', 'bad');
classifier.addDocument('bad service', 'bad');
classifier.addDocument('bad service', 'bad');

classifier.addDocument('place is clean', 'good');
classifier.addDocument('we had such a good time', 'good');
classifier.addDocument('Hello, we were treated to good service', 'good');

classifier.train();

// console.log(classifier.classify("hello"));
// classifier

function classify(text) {
	return classifier.classify(text);
}

exports.classify = classify;

