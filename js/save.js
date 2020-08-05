document.querySelector('#save').addEventListener('click', function() {
    html2canvas(document.querySelectorAll('.cover'), {
        // scale:2,
        onrendered: function(canvas) {
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
  });
  