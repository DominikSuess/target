CCweb.view_header=Backbone.View.extend({className:"header-new header-unrendered",isRendered:!1,invitationCount:0,initialize:function(e){_.bindAll(this,"render","availListWidth","updateUI","handlePageView","menuToggle","disallowClickthrough","hideMenu"),e=e||{},CCweb.util.hasFeature("temp_ims_optimize")||(this.model=e.model),CCweb.events.bind("page_view",this.handlePageView),this.$template=$(CCweb.util.isAddonsSection()?'<div><a href="/addons" class="addon-logo"></a><div class="nav"><ul><li class="addons_link"><a href="/addons" class="addon_header">'+CCweb.util.loc("Adobe Add-ons")+'</a></li></ul></div><hr id="header-break"/></div>':'<div><hr id="header-break"/></div>'),this.$list=this.$template.find("ul"),this.$itemsArr=$.map(this.$list.find("li"),function(e){var i=$(e);return i._CCinMenu=!0,i}),this.$overflowMenu=$('<li class="sub"><a href="javascript:function _non(){ return false; }">&bull;&bull;&bull;</a><ul></ul></li>'),this.$overflowLink=this.$overflowMenu.find("a"),this.$overflowList=this.$overflowMenu.find("ul"),this.$profileContainer=$('<div class="profile-container"></div>'),$(window).resize(this.updateUI)},render:function(){if(!this.isRendered){this.$el.html(this.$template),this.isRendered=!0,this.$("#header-break").before(this.$profileContainer);var e=$(".new-profile");this.$profileContainer.append(e),e.removeClass("new-profile-hidden"),_.defer(function(e){e.$el.removeClass("header-unrendered")},this),this.handlePageView(CCweb.currentPage)}return _.delay(function(e){e.updateUI()},300,this),this},availListWidth:function(){var e=[this.$template.find(".logo"),this.$template.find(".profile-container")];return this.$el.width()-16-_.reduce(e,function(e,i){return e+i.outerWidth(!0)},0)},updateUI:function(){var e=60,i=this.availListWidth()-e,t=!1,s=this.$itemsArr.length-1,n=this.$el.width()<600,l=this;if(this.$overflowMenu.remove(),this.$overflowMenu.on(this.toggleEvent,this.disallowClickthrough),this.$overflowLink.off(this.toggleEvent,this.menuToggle),$(document).off(this.toggleEvent,this.hideMenu),$.each(this.$itemsArr,function(a,o){o._CCinMenu&&(o._CCwidth=o.width()),i+=a===s?e:0,t||i<o._CCwidth||n?(l.$overflowList.append(o),o._CCinMenu=!1,t=!0):o._CCinMenu||(o._CCinMenu=!0,l.$list.append(o)),i-=o._CCwidth}),t){this.$list.append(this.$overflowMenu);var a=this.$overflowMenu.position();a.left+90<this.$overflowList.width()?($(".header-new .nav > ul > li > ul").css("left","0"),$(".header-new .nav > ul > li > ul").css("right","auto"),$(".header-new .nav ul ul").css("left","0")):($(".header-new .nav > ul > li > ul").css("right","0"),$(".header-new .nav > ul > li > ul").css("left","auto")),this.toggleEvent=CCweb.util.isMobileSafari?"touchend":"click",this.$overflowMenu.on(this.toggleEvent,this.disallowClickthrough),this.$overflowLink.on(this.toggleEvent,this.menuToggle),$(document).on(this.toggleEvent,this.hideMenu)}},handlePageView:function(e){switch(this.$("li.active").removeClass("active"),e){case"files":case"file":this.$(".files_link").addClass("active");break;case"apps":this.$(".apps_link").addClass("active");break;case"download_center":this.$(".download_center_link").addClass("active");break;case"plans":this.$(".upgrade_link").addClass("active");break;case"market":this.$(".market_link").addClass("active");break;case"archive":this.$(".archive_link").addClass("active")}},menuToggle:function(e){e.stopPropagation(),this.$overflowList.toggleClass("menu-visible"),this.$overflowLink.toggleClass("menu-visible")},disallowClickthrough:function(e){e.stopPropagation()},hideMenu:function(){this.$overflowList.hasClass("menu-visible")&&(this.$overflowList.removeClass("menu-visible"),this.$overflowLink.removeClass("menu-visible"))}});