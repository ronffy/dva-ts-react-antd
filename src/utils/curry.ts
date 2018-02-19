interface CommonFn {
    (...args): any
}
// export const _curry = (fn: CommonFn, ...rest) => (...args) => fn(...rest, ...args)

// export const __curry = (fn: CommonFn, length: number = fn.length) => (...args) =>
//     args.length < length
//         ?
//         __curry(_curry(fn, ...args), length - args.length)
//         :
//         fn(...args)


export const HOLDER = Symbol("HOLDER");

const curry = (fn: CommonFn, length: number = fn.length, args: any[] = [], holes: any[] = [], ) => (...innerArgs) => {
    let argLength = args.length,
        holeLength = holes.length;

    innerArgs.forEach((arg, index) => {
        if (arg === HOLDER && holeLength !== 0) {
            holeLength--;
            holes.push(holes.shift());
        } else if (arg === HOLDER) {
            holes.push(argLength + 1);
        } else if (holeLength !== 0) {
            holeLength--;
            args.splice(holes.shift(), 0, arg);
        } else {
            args.push(arg)
        }
    })

    return args.length < length ? curry(fn, length, args, holes) : fn(...args);
}

