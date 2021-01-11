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

  hbs.registerHelper("ifUnd", function (a, options) {
    if (a === undefined) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  hbs.registerHelper("equal", function (a, b) {
    return a === b;
  });

  hbs.registerHelper("showCategory", function (list) {
    const categoryNames = list.map(category => category.name);
    return categoryNames.join(", ");
  });

  hbs.registerHelper("ifcond", function (a, b, options) {
    if (a === b) {
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
      const id = String(sarr[i]._id);
      if(sa == id){
        return options.fn(this);
      }
    }
    return options.inverse(this);
  });
};
