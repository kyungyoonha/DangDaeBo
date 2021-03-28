exports.getPosts = async (req, res, next) => {
  try {
    res.status(200).send('ok');
  } catch (e) {
    console.error(error);
    next(error);
  }
};
