  function setupChangeEmbeds(minWidth, midWidth, maxWidth, minHeight, midHeight, maxHeight) {
    setChangeEmbedSizes(minWidth, midWidth, maxWidth, minHeight, midHeight, maxHeight);
    window.onresize = function() {
      setChangeEmbedSizes(minWidth, midWidth, maxWidth, minHeight, midHeight, maxHeight);
    };
  }

  function setChangeEmbedSizes(minWidth, midWidth, maxWidth, minHeight, midHeight, maxHeight) {
    var divs = document.getElementsByClassName('iframe-container-class');
    for (var i = 0, len = divs.length; i < len; i++) {
      var div = divs[i],
        iframe = div.getElementsByClassName('iframe-class')[0],
        divWidth = div.offsetWidth,
        newHeight;
      if (divWidth <= midWidth) {
        newHeight = minHeight;
        newWidth = minWidth;
      } else if (divWidth < maxWidth) {
        newHeight = midHeight;
        newWidth = midWidth;
      } else {
        newHeight = maxHeight;
        newWidth = maxWidth;
      }
      div.style.height = newHeight.toString().concat('px');
      iframe.style.height = newHeight.toString().concat('px');
      iframe.style.width = newWidth.toString().concat('px');
    }
  }
