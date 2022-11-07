function parseCount(value) {
    let result = Number.parseInt(value);
        if (Number.isNan(result)) {
            throw new Error('Невалидное значение');
    }
    return result;
    }
    
    function validateCount(value) {
        try {
            return parseCount(value)
        }
        catch(error) {
            return error;
        }
    }

    /////

    class Triangle {
        constructor(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        
        getPerimeter() {
            return a + b + c;
        }

        getArea() {
            let p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));
        }
    }

    function getTriangle(a, b, c) {
        try {
            return new Triangle;
        } catch(error) {
            const newTriangle = new Object;
            return newTriangle.getArea && newTriangle.getPerimeter('Ошибка! Треугольник не существует');
            return newTriangle; 
        }
    }