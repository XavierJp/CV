import { Hono } from "hono";
import { renderer } from "./renderer";
import { Title } from "./components/title";
import { logger } from "hono/logger";
import { Block } from "./components/block";

const app = new Hono();

app.use("*", logger());

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <>
      <Title title="Xavier JOUPPE" />
      <Block title="Expérience" />
    </>
  );
});

export default app;
