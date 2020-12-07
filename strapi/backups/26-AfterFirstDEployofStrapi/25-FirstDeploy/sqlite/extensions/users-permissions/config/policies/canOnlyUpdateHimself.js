module.exports = (ctx, next) => {
  const currentUser = ctx.state.user;
  console.log("curretnUser", currentUser);
  const requestId = ctx.params.id;

  if (currentUser.id.toString() === requestId) {
    return next();
  }

  ctx.unauthorized("You can only update Your Profile");
};
