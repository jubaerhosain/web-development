import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { BaseModel } from "@common/models/base.model";
import { AutoMap } from "@automapper/classes";
import { CartItem } from "./cart-item.model";
import { Product } from "@products/models/products.model";
import { User } from "@users/models/users.model";

@Schema({ timestamps: true })
export class Cart extends BaseModel {
  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", unique: true, required: false })
  userId: User;

  @AutoMap()
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: "Product" }] })
  items: Product[];
}

export type CartDocument = HydratedDocument<Cart>;
export const CartSchema = SchemaFactory.createForClass(Cart);

CartSchema.set("toJSON", {
  virtuals: true,
});

# mongoose.Types not works in population. Use mongoose.Schema.Types.ObjectId.
