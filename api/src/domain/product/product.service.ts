import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    find() {
        // тут тип запрос к бд
        return [
            { id: 1, name: "Сметана", weight: 0.120, price: 145 },
            { id: 2, name: "Майонез", weight: 0.500, price: 80 },
        ];
    }
}
