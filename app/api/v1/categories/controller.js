const Categories = require("./model");

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Categories.create({ name });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await Categories.find().select("_id name");

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Categories.findOne({ _id: id });

    if (!result) {
      return res.status(404).json({
        message: "Id not found",
      });
    }

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await Categories.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Categories.findByIdAndDelete(id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
