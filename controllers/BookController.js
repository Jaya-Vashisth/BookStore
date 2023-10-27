const bookModel = require("./../models/BookModel");

exports.getbook = async (req, res) => {
  const books = await bookModel.find();

  res.status(200).json({
    status: "success",
    data: books,
  });
};

exports.createbook = async (req, res) => {
  try {
    const book = await bookModel.create(req.body);

    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Try after some time Internal server error",
    });
  }
};

exports.updatebook = async (req, res) => {
  const id = req.params.id;
  const upbook = request.body.book;
  const book = await bookModel.findByIdAndUpdate(
    id,
    { book: upbook },
    { runValidators: true, new: true }
  );

  res.status(201).json({
    status: "success",
    data: book,
  });
};

exports.deletebook = async (req, res) => {
  const id = req.params.id;
  await bookModel.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
