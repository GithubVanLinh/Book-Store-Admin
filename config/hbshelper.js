const category = require("../databases/category");

module.exports = function (hbs) {
  hbs.registerHelper("ifeq", function (a, b, options) {
    console.log(a, b);
    if (a == b) {
      return options.fn(this);
    }
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
  })

};
