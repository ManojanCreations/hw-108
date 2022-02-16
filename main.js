function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RFhyssdhc/', modelReady);
}

function modelReady()
{
    classifier.classify(identify);
}

function identify(error, results) 
{
        if (result[0].label == "Meow")
        {
            img.src = 'cat.jpg';
            
        }
        else if (results[0].label == "Background Noise")
        {
            img.src = 'dog.webp';
        }
}