import { expect } from 'chai';
import request from "supertest";
import prod from '../src/controllers/product';

describe('/productApi', () => {
    it('getAllProduct success case', (done) => {
        request.agent("http://localhost:6060")
            .get("/product")
            .send()
            .expect(200)
            .then((res) => {
                expect(200);
                done();
            })
            .catch((err) => done(err));
    });

    it('getAllProduct failing case, incorrect path', (done) => {
        request.agent("http://localhost:6060")
            .get("/products")
            .send()
            .expect(404)
            .then((res) => {
                expect(404);
                done();
            })
            .catch((err) => done(err));
    });

    it('getProducts function', function () {
        let result = prod.getProducts;
        expect(result).ok;
    });
});

describe('/checkOutOrder', () => {
    it('add product success case', (done) => {
        request.agent("http://localhost:6060")
            .post("/checkout")
            .send({
                "title": "test",
                "description": "testing",
                "picture": "test pic",
                "price": 100,
                "quantity": 10
            })
            .expect(201)
            .then((res) => {
                expect(201);
                done();
            })
            .catch((err) => done(err));
    });

    it('add product failing case, empty body', (done) => {
        request.agent("http://localhost:6060")
            .get("/checkout")
            .send()
            .expect(404)
            .then((res) => {
                expect(404);
                done();
            })
            .catch((err) => done(err));
    });

    it('addProduct function', function () {
        let result = prod.addProduct;
        expect(result).ok;
    });
});