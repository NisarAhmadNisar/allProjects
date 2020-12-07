"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.comment.create(data, { files });
    } else {
      // if (!ctx.request.body.name || !ctx.request.body.name.length) {
      //   ctx.throw(400, { errors: { name: "Name can not be empty" } });
      //   return;
      // }
      // if (!ctx.request.body.name || !ctx.request.body.name.length) {
      //   ctx.throw(400, "Name can not be empty");
      //   return;
      // }
      // if (!ctx.request.body.name || !ctx.request.body.name.length) {
      //   ctx.throw(400, "Name can not be empty");
      //   return;
      // }
      entity = await strapi.services.comment.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.comment });
  }
};
