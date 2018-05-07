function Person(name) {
    this.name = name
    this.nameLength = () => {
        return this.name.length
    }
}

const tom = new Person("Tom")

Person.prototype.greet = function() {
    return `Hi ${this.name}`
}

const sample = () => {
    console.log("=== sample started ===")

    const alex = new Person('Alex')
    console.log([alex])
    console.log(`has nameLength property: ${alex.hasOwnProperty("nameLength")}`)
    console.log(`has greet property: ${alex.hasOwnProperty("greet")}`)
    console.log(alex.greet())
    console.log(tom.greet())
    console.log(alex.valueOf())

    const names = Object.getOwnPropertyNames(Object.prototype)
    console.log(names)
}

export default sample
