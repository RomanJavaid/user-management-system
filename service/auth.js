const passport = require('passport');
const userSchema = require('../model/userSchema');

passport.serializeUser((user, done) => {
  done(null, user.id);  // Serialize the user ID
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userSchema.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
