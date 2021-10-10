const Item = require("../models/Items");
module.exports = {
  addItem: async (req, res, next) => {
    let { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ status: 400, msg: "name is required" });
    }
    if (!description) {
      return res
        .status(400)
        .json({ status: 400, msg: "description is required" });
    }
    try {
      let newItem = await Item.create({ name, description });
      res
        .status(201)
        .json({ status: 201, msg: "item created successfully", item: newItem });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, msg: "something wrong" });
    }
  },
  getItems: async (req, res, next) => {
    let { page, limit } = req.query;
    let limitNumbers = Number(limit) || 7;
    let pageNumber = page || 1;
    let skip = (Number(pageNumber) - 1) * limitNumbers;
    let items = await Item.find().skip(skip).limit(limitNumbers);
    let pagesCount = await Item.count();
    return res.status(200).json({
      status: 200,
      items,
      pagesCount: Math.ceil(pagesCount / limitNumbers),
    });
  },
  getItemById: async (req, res, next) => {
    const id = req.params.id;
    let item = await Item.findById(id);
    return res.status(200).json({ status: 200, item });
  },
};
