module.exports = function (hbs) {
  hbs.registerHelper("ifeq", function (a, b, options) {
      const sa = String(a);
      const sb = String(b);
    if (sa == sb) {
      console.log("eq");
      return options.fn(this);
    }
    console.log("not eq");
    return options.inverse(this);
  });

  hbs.registerHelper("ifUnd", function(a, options){
    if(a ===undefined){
        return options.fn(this);
    }
    return options.inverse(this);
  });

  hbs.registerHelper("ifIn", function(a,arr,  options){
    const sa = String(a);
    const sarr = arr;
    console.log(sa);
    console.log(sarr);
    for(i = 0; i < sarr.length; i++){
      if(sa == sarr[i]){
        return options.fn(this);
      }
    }
    return options.inverse(this);
  });
};
