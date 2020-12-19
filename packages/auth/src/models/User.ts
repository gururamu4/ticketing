import mongoose, { model, Model, Schema } from "mongoose";
import { Password } from "../service/Password";

interface UserAttrs {
  email: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret._v;
      },
    },
  }
);

// userSchema.pre('save', async(done) => {
//     if(!this.isModified('password')) {
//         const password = await Password.toHash(this.get('password'));
//         this.set('password', password);
//     }
//     done();
// })

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = model<UserDoc, UserModel>("User", userSchema);

export { User };
