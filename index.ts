import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => "api.hd159.vn")

  .group("form-request", (app) => {
    return app
      .guard({
        schema: {
          query: t.Object({
            q: t.String(),
          }),
        },
      })
      .get('/', ({ query }) => `query : ${query.q}`)
      .get(':uuid', ({ query }) => `query : ${query.q}`)
      .post('/', ({ query }) => `query : ${query.q}`);
  })

  .listen(3368);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
