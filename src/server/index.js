const { notFoundError, generalError } = require("./middlewares/errors");

app.use(notFoundError);
app.use(generalError);
