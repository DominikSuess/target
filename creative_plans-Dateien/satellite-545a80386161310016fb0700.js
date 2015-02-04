_satellite.pushBlockingScript(function(event, target, $variables){
  (function() {

  var init = function () {

      // if we don't have s object, set up callback to handle when ready
      if ('undefined' === typeof window.CCweb || 
        'undefined' === typeof window.CCweb.events) {
        setTimeout(function () {
          init();
        }, 100);
        return false;
      }

      // bind to the event and call our handler for each event
      CCweb.events.bind('user_signed_in', function(data) {
        try {
          var adobeDil = null;

          if (window.DIL) {
            adobeDil = window.DIL.getDil('adobe');
            if (adobeDil && adobeDil.api && adobeDil.api.aamIdSync && data && data.userGuid) {
              adobeDil.api.aamIdSync({
                  dpid: '813',
                  dpuuid: data.userGuid.split('@')[0]
              });
            }
          }

        } catch (e) {}
      });

    };

  return init();

}());
});
