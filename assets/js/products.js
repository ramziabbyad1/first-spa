(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['products'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "          <li data-index=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <a href=\"#\" class=\"product-photo\"><img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" height=\"130\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"/></a>\r\n            <h2><a href=\"#\"> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </a></h2>\r\n            <ul class=\"product-description\">\r\n              <li><span>Manufacturer: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.specs : depth0)) != null ? stack1.manufacturer : stack1), depth0))
    + "</li>\r\n              <li><span>Storage: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.specs : depth0)) != null ? stack1.storage : stack1), depth0))
    + " GB</li>\r\n              <li><span>OS: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.specs : depth0)) != null ? stack1.os : stack1), depth0))
    + "</li>\r\n              <li><span>Camera: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.specs : depth0)) != null ? stack1.camera : stack1), depth0))
    + " Mpx</li>\r\n            </ul>\r\n            <button>Buy Now!</button>\r\n            <p class=\"product-price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "$</p>\r\n            <div class=\"highlight\"></div>\r\n          </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "     ";
},"useData":true});
})();