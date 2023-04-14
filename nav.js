   function openWebsite(url) {
    window.open(url, '_self');
  }

  document.addEventListener('keydown', function(event) {
    var websiteUrl;
    switch (event.key) {
      case '1':
        websiteUrl = 'ponggg.html'; 
        openWebsite(websiteUrl);
        break;
      case '2':
        websiteUrl = 'aimteszt.html';
        openWebsite(websiteUrl);
        break;
      case '3':
        websiteUrl = 'spammer.html';
        openWebsite(websiteUrl);
        break;
      case '0':
        websiteUrl = 'index.html'; 
        openWebsite(websiteUrl);
        break;
      default:
        break;
    }
  });