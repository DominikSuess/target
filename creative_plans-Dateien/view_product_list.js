CCweb.view_product_list=Backbone.View.extend({className:"product_list",attributes:{tabindex:0},events:{"click .product_list_container ul li":"onProductRowClick"},initialize:function(e){e=e||{},_.bindAll(this,"render","onProductRowClick"),this.cartModel=e.cartModel,this.selectedProducts=this.cartModel.get("items"),this.collection=e.subscriptionOffers,this.collection.on("sync",this.renderProducts,this),this.collection.fetch();var t=CCweb.util.getResourcePath(CCweb.util.supportsRetinaDisplay?"/resource/img/plans/tile_plus_icon-2x.png":"/resource/img/plans/tile_plus_icon.png");this.template=_.template('<div class="product_list_inner"><div class="product_list_container"><div class="cc_complete_header year">'+CCweb.util.loc("Complete: {0}{1}/mo (per license){2}",'<span class="price"/>','<span class="price_subscript">',"</span>")+'</div><div class="cc_complete_header year_prepaid">'+CCweb.util.loc("Complete: {0}{1}/yr (per license){2}",'<span class="price"/>','<span class="price_subscript">',"</span>")+'</div><ul class="cc_complete"></ul><div class="point_products_header year">'+CCweb.util.loc("Single Apps: {0}{1}/mo (per license){2}",'<span class="price"/>','<span class="price_subscript">',"</span>")+'</div><div class="point_products_header year_prepaid">'+CCweb.util.loc("Single Apps: {0}{1}/yr (per license){2}",'<span class="price"/>','<span class="price_subscript">',"</span>")+'</div><ul class="point_products"></ul></div></div>'),this.productTemplate=_.template('<li class="<%= className %>"><div class="product_row product_icon"><img src="<%= icon %>" /></div><div class="product_row product_info"><div class="product_name"><%= name %></div><div class="product_description"><%= description %></div></div><div class="product_row product_select_status"><img class="product_select" src="'+t+'" /><span class="product_selected">'+CCweb.util.loc("Selected")+"</span></div></li>"),this.cartModel.bind("change:serviceCommitment",this.onServiceCommitmentChange,this),this.cartModel.bind("change:targetLanguage",this.onTargetLanguageChange,this),this.cartModel.bind("change:country",this.resetPrices,this),this.cartModel.bind("change:type",this.resetPrices,this),this.selectedProducts.bind("add",this.onProductAdd,this),this.selectedProducts.bind("remove",this.onProductRemove,this)},render:function(){return this.$el.empty().append(this.template()),this.onServiceCommitmentChange(),this.renderProducts(),this},renderProducts:function(){var e,t=this,c=this.collection.getCCCompleteOffers(),i=this.$(".product_list_container ul.cc_complete");i.length&&i.children().detach(),_.each(c,function(c){if(!e){var s=c.getUnitPrice();e=s?c.formatPrice(s.get("priceWithoutTax")):"..."}var r=c.get("productCode"),o=$(t.productTemplate({className:r,icon:CCweb.util.getIconPathForSingleAppProduct(r),name:c.getLocalizedProductName(),description:c.getLocalizedProductDescription()}));o.data("productCode",r),t.cartModel.hasProduct(r)&&(o.addClass("selected"),o.children(".product_select_status").children(".product_select").hide(),o.children(".product_select_status").children(".product_selected").show()),i.append(o)}),this.$(".product_list_container .cc_complete_header .price").html(e);var s,r=this.collection.getPointProductOffers(),o=this.$(".product_list_container ul.point_products");o.length&&o.children().detach(),_.each(r,function(e){if(!s){var c=e.getUnitPrice();s=c?e.formatPrice(c.get("priceWithoutTax")):"..."}var i=e.get("productCode"),r=$(t.productTemplate({className:i,icon:CCweb.util.getIconPathForSingleAppProduct(i),name:e.getLocalizedProductName(),description:e.getLocalizedProductDescription()}));r.data("productCode",i),t.cartModel.hasProduct(i)&&(r.addClass("selected"),r.children(".product_select_status").children(".product_select").hide(),r.children(".product_select_status").children(".product_selected").show()),o.append(r)}),this.$(".product_list_container .point_products_header .price").html(s),this.delegateEvents()},onProductRowClick:function(e){if(e&&e.currentTarget&&!$(e.currentTarget).hasClass("selected")){var t=$(e.currentTarget),c=t.data("productCode");this.cartModel.addItem(c)}return!1},resetPrices:function(){this.$(".price").html("...")},onTargetLanguageChange:function(){return this.resetPrices(),!1},onServiceCommitmentChange:function(){return this.cartModel.isYearPrepaidServiceCommitment()?(this.$(".year").hide(),this.$(".year_prepaid").show()):(this.$(".year_prepaid").hide(),this.$(".year").show()),this.resetPrices(),!1},onProductAdd:function(e){var t=e.get("productCode");this.$("."+t).addClass("selected"),this.$("."+t+" .product_select").hide(),this.$("."+t+" .product_selected").show()},onProductRemove:function(e){var t=e.get("productCode");this.$("."+t).removeClass("selected"),this.$("."+t+" .product_selected").hide(),this.$("."+t+" .product_select").show()},onClose:function(){this.cartModel.unbind("change:serviceCommitment",this.onServiceCommitmentChange),this.cartModel.unbind("change:targetLanguage",this.onTargetLanguageChange),this.cartModel.unbind("change:country",this.resetPrices),this.cartModel.unbind("change:type",this.resetPrices),this.selectedProducts.unbind("add",this.onProductAdd),this.selectedProducts.unbind("remove",this.onProductRemove)}});