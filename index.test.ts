import { expect, test, describe } from "bun:test";
import app from "./app";

describe('getHello', () => {
    test('GET /hello', async () => {
        const res = await app.request('/hello');
        expect(res.status).toBe(200);
        expect(await res.json()).toEqual({ body: 'Hi babe' });
    });
});

describe('getHello', () => {
    test('GET /hello', async () => {
        const res = await app.request('/hello');
        expect(res.status).toBe(200);
        expect(await res.json()).not.toEqual({ body: 'Hello world' });
    });
});