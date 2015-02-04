var mboxCurrent = mboxFactories.get('default').get('ccm_mbox_dynamic_top',0);mboxCurrent.setOffer(new mboxOfferAjax('<!-- Offer Id: 90039  --><!-- Offer Id: 97560  -->'));mboxCurrent.getOffer().setOnLoad(function() {
var tntGeocountry  = 'germany'+'';

/*mboxHighlight+ (1of2) v1 ==> Response Plugin*/
window.ttMETA=(typeof(window.ttMETA)!='undefined')?window.ttMETA:[];window.ttMETA.push({'mbox':'ccm_mbox_dynamic_top','campaign':'','experience':'','offer':''});window.ttMBX=function(x){var mbxList=[];for(i=0;i<ttMETA.length;i++){if(ttMETA[i].mbox==x.getName()){mbxList.push(ttMETA[i])}}return mbxList[x.getId()]}
});mboxCurrent.loaded();mboxFactories.get('default').get('ccm_mbox_dynamic_top',0).cancelTimeout();mboxFactories.get('default').get('ccm_mbox_dynamic_top',0).setOffer(new mboxOfferDefault()).show();mboxFactories.get('default').getPCId().forceId("1420709305939-132449.26_09");