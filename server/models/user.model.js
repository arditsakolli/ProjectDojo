










const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [
        {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email!"
      },
    {
        validator: async val =>{
            let foundUser = await mongoose.models.User.findOne({email: val});
            return !foundUser
        },
        message: "This email already exists, try another one!"
      }
    
]},
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});

  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

// this should go after 
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

module.exports = mongoose.model('User', UserSchema);




























// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const { isEmail } = require('validator');

// const UserSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: [true, 'First name is required'],
//         minlength: [3, 'First name must be at least 3 characters long']
//     },
//     lastName: {
//         type: String,
//         required: [true, 'Last name is required'],
//         minlength: [3, 'Last name must be at least 3 characters long']
//     },
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         validate: [isEmail, 'Invalid email address']
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is required'],
//         minlength: [8, 'Password must be at least 8 characters long']
//     },
// },{ timestamps: true });

// UserSchema.virtual('confirmPassword')
// .get(function() { return this._confirmPassword; })
// .set(function(value) { this._confirmPassword = value; });

// UserSchema.pre('validate', function(next) {
//     if (this.password !== this.confirmPassword && this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Passwords don\'t match');
//     }
//     next();
// });

// UserSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//     .then(hash => {
//         this.password = hash;
//         next(); 
//     })
//     .catch(err => next(err));
// });

// module.exports = mongoose.model('User', UserSchema);
