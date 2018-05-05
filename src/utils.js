export function debug(tag, msg) {
    console.log(tag + ' ' + msg)
}

export function foo() {
    console.log("foo function")
}

function priv() {
}

function U_() {
    console.log(this.name)
}

export default U_.bind(U_)
