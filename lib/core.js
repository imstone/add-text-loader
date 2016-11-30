var loaderUtils = require("loader-utils");
module.exports = function(source) {
    this.cacheable && this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
    var ignore = query.ignore;
    var isStyle = this.resourcePath.indexOf(ignore);
    var html = '';
    html = isStyle >= 0 ? source : query.add + source;
    return html;
}
