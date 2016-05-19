var ChangeEmbeds = function() {
  return {
    insertIframesInDivs: function() {
      var divs = document.getElementsByClassName('change-embed-petition'),
        i,
        len;
      for (i = 0, len = divs.length; i < len; i++) {
        ChangeEmbeds.insertIframeIntoDiv(divs[i]);
        ChangeEmbeds.setEmbedSize(divs[i], 300, 400, 600, 520, 700, 700);
      }
    },

    insertIframeIntoDiv: function(div) {
      //Make sure the div hasn't already received its iframe
      if (div.getAttribute('data-iframe-loaded') === 'true') {return;}
      var petitionId = div.getAttribute('data-petition-id');
      if (!petitionId) {return;}
      div.innerHTML = "<iframe class='iframe-class' width: '300px' height: '520px' src='https://www.change.org/embed/p/" +
        petitionId + "/preview' frameborder='0'></iframe>";
      div.setAttribute('data-iframe-loaded', 'true');
    },

    setEmbedSize: function(div, minWidth, midWidth, maxWidth, minHeight, midHeight, maxHeight) {
      var iframe = div.getElementsByClassName('iframe-class')[0];
      if (!iframe) return;
      var divWidth = div.offsetWidth,
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
}();

document.addEventListener("DOMContentLoaded", ChangeEmbeds.insertIframesInDivs);
