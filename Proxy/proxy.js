const p1 = {
    fname: 'Anuj',
    lname: 'Thakur',
    age: 23,
}
const proxyP1 = new Proxy(p1, {
    get(target, prop) {
        if (prop in target) return target[prop];
        return false;
    },

    set(target, prop, value) {
        if (!(prop in target)) throw new Error(`${prop} does not exists`);
        switch (prop) {
            case 'fname':
            case 'lname':
                if (typeof value !== 'string')
                    throw new Error(`${prop} must be a string`)
                break;

            case 'age':
                if (typeof value !== 'number')
                    throw new Error(`${prop} must be a number`)
                if (value <= 0) throw new Error(`${prop} must be > zero`)
        }
        target[prop] = value;//
        Reflect.set(target, prop, value);
    },
});

proxyP1.age = 21;
proxyP1.fname = 'Rampal'
console.log(proxyP1);