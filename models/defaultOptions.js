const mySchemaOptions = {
  toJSON: {
    transform: (_doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
};

module.exports = { mySchemaOptions };