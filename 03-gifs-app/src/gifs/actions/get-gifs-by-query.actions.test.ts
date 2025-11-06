import { describe, expect, test } from "vitest";

import { getGifsByQuery } from "./get-gifs-by-query.actions";
import { giphySearchResponseMock } from "./../../../test/mock/giphy.response.data";

import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";


describe('getGifsByQuery',()=>{
    const mock = new AxiosMockAdapter(giphyApi);
    // test('should return a list of gifs',async()=>{
    //     const gifs= await getGifsByQuery('goku');

    //     const [gifs1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     expect(gifs1).toEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width:expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     })


    // });

    test('should return a list of gifs', async ()=>{
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('goku');

        gifs.forEach((gif)=>{
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        })
    });
});