async function block() {
  var a = Date.now();
  var item = await fetch(`https://site-block.pages.dev/url.json?t=${a}`);
  var item = await item.json();
  item.map(function(value, number) {
    if((value == "all_domain") || (value == "some_domain")) {
      if((location.hostname == item[number + 1]) && (value == "all_domain")) {
        opendisplay();
      }
      if((location.href == item[number + 1]) && (value == "some_domain")){
        opendisplay();
      }
    }
    console.log(value);
  })
}


function opendisplay() {
  exid = chrome.i18n.getMessage('@@extension_id');
  location.href = `chrome-extension://${exid}/index.html`;
}

block();