function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mnU-QoYMy/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults()
{
    if (error)
    {
        console.error(error);
    }
    else
    {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;

    document.getElementById("result_label").innerHTML = 'I can hear - ' +
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
    (results[0].confidence*100).toFixed(2)+ "%";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById('https://www.pngitem.com/pimgs/m/244-2445185_transparent-dog-vector-png-dog-clipart-png-download.png')
    img1 = document.getElementById('https://www.nicepng.com/png/detail/27-274631_cows-clipart-png-transparent-library-cow-clipart.png');
    img2 = document.getElementById('https://www.pngitem.com/pimgs/m/234-2345778_cat-clip-art-clipart-cat-kitten-clip-art.png');
    img3 = document.getElementById('https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=');
    
    if (results[0].label == "Bark")
    { console.log("Bark");
        img.src = 'https://www.pngitem.com/pimgs/m/244-2445185_transparent-dog-vector-png-dog-clipart-png-download.png';
        img1.src = 'https://www.nicepng.com/png/detail/27-274631_cows-clipart-png-transparent-library-cow-clipart.png';
        img2.src = "https://www.pngitem.com/pimgs/m/234-2345778_cat-clip-art-clipart-cat-kitten-clip-art.pn";
        img3.src = "https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=";
    }
    else if (results[0].label == "Moo")
    { console.log("Moo");
        img.src = 'https://www.pngitem.com/pimgs/m/244-2445185_transparent-dog-vector-png-dog-clipart-png-download.png';
        img1.src = 'https://www.nicepng.com/png/detail/27-274631_cows-clipart-png-transparent-library-cow-clipart.png';
        img2.src = "https://www.pngitem.com/pimgs/m/234-2345778_cat-clip-art-clipart-cat-kitten-clip-art.pn";
        img3.src = "https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=";
    }
    else if (results[0].label == "Meow")
    { console.log("Meow");
        img.src = 'https://www.pngitem.com/pimgs/m/244-2445185_transparent-dog-vector-png-dog-clipart-png-download.png';
        img1.src = 'https://www.nicepng.com/png/detail/27-274631_cows-clipart-png-transparent-library-cow-clipart.png';
        img2.src = "https://www.pngitem.com/pimgs/m/234-2345778_cat-clip-art-clipart-cat-kitten-clip-art.pn";
        img3.src = "https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=";
    }
    else 
    {  (results[0].label == "Roar")
    { console.log("Roar");
        img.src = 'https://www.pngitem.com/pimgs/m/244-2445185_transparent-dog-vector-png-dog-clipart-png-download.png';
        img1.src = 'https://www.nicepng.com/png/detail/27-274631_cows-clipart-png-transparent-library-cow-clipart.png';
        img2.src = "https://www.pngitem.com/pimgs/m/234-2345778_cat-clip-art-clipart-cat-kitten-clip-art.pn";
        img3.src = "https://media.istockphoto.com/vectors/vector-illustration-of-lion-isolated-on-white-background-vector-id1198529588?k=20&m=1198529588&s=612x612&w=0&h=RHoPSVdkRMemw5flvvgCchS0NJPm8WnjDxH0HkaJuco=";

    }
    }
}



var dog = 0;
var cow = 0;
var cat = 0;
var lion = 0;
}