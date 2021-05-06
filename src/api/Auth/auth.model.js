import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
  name: String,
});

export const Auth = mongoose.model('User', AuthSchema);
