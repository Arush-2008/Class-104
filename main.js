Webcam.set({
    width: 400,
    height:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("Webcam");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gvD1CyC66/model.json",model_loaded);
function model_loaded(){
    console.log("model_loaded");
}