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
    const title = req.body.title ? req.body.title.trim() : undefined;
    if (title) {
      if (title.length < 7 || title.length > 70) {
        next({
          name: "validation Error",
          element: "body: title",
          msg: "The title must be a between 7 and 70 chars",
        });
      }
    } else {
      res.send("updated");
      next();
    }
  },
};

const validate = {
  getOne: [rules.id],
  addOne: [],
  updateOne: [rules.id, rules.title],
  deleteOne: [rules.id],
};

module.exports = validate;
