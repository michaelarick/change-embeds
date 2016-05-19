var ChangeEmbeds = function() {
  return {
    insertIframesInDivs: function() {
      var divs = document.getElementsByClassName('change-embed-petition'),
        i;
      for (i = 0; i < divs.length; i ++) {
        ChangeEmbeds.insertIframeIntoDiv(divs[i]);
      }
    },

    insertIframeIntoDiv: function(div) {
      var petitionId = div.getAttribute('data-petition-id');
      //Make sure the div hasn't already received its iframe
      if (div.getAttribute('data-iframe-loaded') === 'true') { return; }
      div.innerHTML = "<iframe height='530px' width='300px' src='https://www.change.org/embed/p/" +
        petitionId + "/preview' frameborder='0'></iframe>";
      div.setAttribute('data-iframe-loaded', 'true');
    }
  }
}();

document.addEventListener("DOMContentLoaded", ChangeEmbeds.insertIframesInDivs);
