var mboxCurrent=mboxFactories.get('default').get('cms-adobecom_us_creativecloud_TopOfBody',0);mboxCurrent.setEventTime('include.start');document.write('<div style="visibility: hidden; display: none" id="mboxImported-default-cms-adobecom_us_creativecloud_TopOfBody-0">');/* Offer id: 7082*/ 

_mboxDefaultContentOffer = function() {
  this._onLoad = function() {};
};

_mboxDefaultContentOffer.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

_mboxDefaultContentOffer.prototype.show = function(_mbox) {
  var _defaultDiv = _mbox.getDefaultDiv();
  if (_defaultDiv == null) {
    return 0;
  }
  _defaultDiv.onclick = function() {
    // just use _mbox.getName() when everyone is on mboxVersion >= 21
    var _mboxName = _mbox.id ? _mbox.id : _mbox.getName();
    var _clickDiv = document.getElementById('mboxClick-' + _mboxName);
    if (_clickDiv != null) {
      _clickDiv.onclick();
    }
  };
  var _result = _mbox.hide();
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

mboxCurrent.setOffer(new _mboxDefaultContentOffer());
if (mboxCurrent.getFetcher && mboxCurrent.getFetcher().getType() == 'ajax') {
  mboxCurrent.show();
};document.write('<!-- Offer Id: 90039  --><script type=\"text\/javascript\">\r\nvar tntGeocountry  = \'germany\'+\'\';\r\n<\/script>');document.write('<!-- Offer Id: 97560  --><script type=\"text\/javascript\">\r\n\/*mboxHighlight+ (1of2) v1 ==> Response Plugin*\/\r\nwindow.ttMETA=(typeof(window.ttMETA)!=\'undefined\')?window.ttMETA:[];window.ttMETA.push({\'mbox\':\'cms-adobecom_us_creativecloud_TopOfBody\',\'campaign\':\'Adbe - Variance Monitoring - CC Individual - 11-24-2014\',\'experience\':\'Group 1\',\'offer\':\'Default Content\'});window.ttMBX=function(x){var mbxList=[];for(i=0;i<ttMETA.length;i++){if(ttMETA[i].mbox==x.getName()){mbxList.push(ttMETA[i])}}return mbxList[x.getId()]}\r\n<\/script>');document.write('<!-- Offer Id: 72629  --><script type=\"text\/javascript\">\r\n\/*T&T to SiteCat v4.3 ==>Response Plugin*\/\r\nwindow.s_tnt = window.s_tnt || \'\', tntVal =\r\n\'71866:0:0,\';\r\nif (window.s_tnt.indexOf(tntVal) == -1) {\r\nwindow.s_tnt += tntVal\r\n}\r\nif (mboxFactories.get(\'default\').isDomLoaded() && (window.s && window.s.tl)) {\r\nvar ltv = s.linkTrackVars;\r\nvar lte = s.linkTrackEvents;\r\ns.linkTrackVars = \'tnt\';\r\ns.linkTrackEvents = \'None\';\r\ns.tl(\'TnT\', \'o\', \'TnT\');\r\ns.linkTrackVars = ltv;\r\ns.linkTrackEvents = lte;\r\n}\r\n<\/script>');document.write('</div>');mboxCurrent.setEventTime('include.end');mboxFactories.get('default').get('cms-adobecom_us_creativecloud_TopOfBody',0).loaded();mboxFactories.get('default').getPCId().forceId("1420709305939-132449.26_09");