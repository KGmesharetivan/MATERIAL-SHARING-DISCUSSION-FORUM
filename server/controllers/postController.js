const catchAsync = require("./../utils/catchAsync");

exports.createPost = catchAsync(async (req, res) => {
  const { title, tags, description, user, media } = req.body;

  const newPost = await Post.create({
    title: title,
    description: description,
    tags: tags,
    creator: user._id,
    createdAt: Date.now(),
    media: media,
  });
  
  res.status(201).json({
    status: "success",
    data: newPost,
  });
});
