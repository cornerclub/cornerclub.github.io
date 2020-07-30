$(function() { $( "#upload" ).draggable();});

function move_back() {
  document.getElementById("upload").style.zIndex = "0";
}

function move_front() {
    document.getElementById("upload").style.zIndex = "2";
}

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.width = "130px";
    image.style.height = "200px";
    $(function() { $( "#output" ).resizable();}); 
};

// document.querySelector('#save').addEventListener('click', function() {
//   html2canvas(document.querySelectorAll('.cover'), {
//       onrendered: function(canvas) {
//         return Canvas2Image.saveAsPNG(canvas);
//       }
//   });
// });
