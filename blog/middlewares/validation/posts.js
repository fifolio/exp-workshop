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
      console.log("The post id must be a number from 1-999");
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
        console.log("The title length should be between 7 and 70 chars");
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
        console.log("The post body length should be between 7 and 2000 chars");
      }
      next();
    }
    next();
  },

  titleRequired: (req, res, next) => {
    if (req.body.title) {
      next();
    } else {
      next({
        name: "validation Error",
        elem: "body: title",
        msg: "The post title is required",
      });
      console.log("The post title is required");
    }
  },

  bodyRequired: (req, res, next) => {
    if (req.body.body) {
      next();
    } else {
      next({
        name: "validation Error",
        elem: "body: body",
        msg: "The post body is required",
      });
      console.log("The post body is required");
    }
  },

  titleNotEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next({
        name: "validation Error",
        elem: "body: title",
        msg: "The post title connot be empty",
      });
      console.log("The post title connot be empty");
    }
    next();
  },

  bodyNotEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next({
        name: "validation Error",
        elem: "body: body",
        msg: "The post body connot be empty",
      });
      console.log("The post body connot be empty");
    }
    next();
  },
};

const validate = {
  getOne: [rules.id],
  addOne: [
    rules.titleRequired,
    rules.titleNotEmpty,
    rules.title,
    rules.bodyRequired,
    rules.bodyNotEmpty,
    rules.body,
  ],
  updateOne: [
    rules.id,
    rules.title,
    rules.titleNotEmpty,
    rules.body,
    rules.bodyNotEmpty,
  ],
  deleteOne: [rules.id],
};

module.exports = validate;
