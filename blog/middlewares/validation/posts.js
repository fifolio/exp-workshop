const rules = {
  id: (req, res, next) => {
    const id = req.params.id;
    const pattern = /^[0-9]{1,3}$/;
    if (pattern.test(id)) {
      next();
    } else {
      next({
        name: "validation Error",
        element: "params: id",
        msg: "The post id must be a number from 1-999",
      });
    }
  },
  title: (req, res, next) => {
    if (req.body.title) {
      if (req.body.title.length < 7 || req.body.title.length > 70) {
        next({
          name: "Validation Error",
          element: "body: title",
          message: "The title length should be between 7 and 70 chars",
        });
      }
      next();
    }
    next();
  },
  body: (req, res, next) => {
    if (req.body.body) {
      const body = req.body.body.trim();
      if (body.length < 7 || body.length > 2000) {
        next({
          name: "Validation Error",
          element: "body: body",
          message: "The post body length should be between 7 and 2000 chars",
        });
      }
      next();
    }
    next();
  },
};

const validate = {
  getOne: [rules.id],
  addOne: [rules.title, rules.body],
  updateOne: [rules.id, rules.title, rules.body],
  deleteOne: [rules.id],
};

module.exports = validate;
