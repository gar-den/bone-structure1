import mongoose, { Schema, Document } from "mongoose";
import { IExample } from "../interfaces/example";

const ExampleSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
})

export default mongoose.model<IExample & Document>("Examples", ExampleSchema);