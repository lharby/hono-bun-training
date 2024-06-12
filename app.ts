import { Hono } from "hono";
import { streamText } from 'hono/streaming'
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.get('/hello', (c) => {
    return c.json({ body: "Hi babe" });
});

app.get('/stream', (c) => {
    return streamText(c, async (stream) => {
        for (let i = 0; i < 6; i++) {
            await stream.writeln(`Hello. index: ${i}`);
            await stream.sleep(1000);
        }
    });
});

app.get('/', (c) => {
    return c.html('<pre>Index</pre>');
});

export default app;