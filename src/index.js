//@flow

// importing default with qualified import
import U, { debug, foo } from './utils.js'
// importing default with wildcard import
import U2, * as Utils from './utils.js'

import type { User, Tweet } from './types.js'

const user: User = {id: 4, username: "omega@example.com"}
const jo: User = {id: 23, username: "jo@example.com"}
const mo: User = {id: 42, username: "mo@example.com"}
const chubbTweet: Tweet = {id: 3, userID: 4, text: "OMG! ChubbChubbs are comming!"}
const forrestTweet: Tweet = {id: 10, userID: 4, text: "Run Forrest Run!"}

const takeUser = (user: User) => {
    console.log(user)
}

class Notifier {
    name: string
    users: Array<User>

    constructor(users: Array<User>) {
        this.name = "notifier"
        this.users = users
    }

    sendTweets(tweets: Array<Tweet>) {
        const users = this.users

        console.log(`name: ${this.name}`)
        console.log("Sending tweets")
        console.log("Users:")
        console.log(users)
        console.log("Tweet ids:")
        console.log(tweets)
        console.log("")
    }

    testRun() {
        const notifier = new Notifier([jo, mo])

        let mock = {name: "mock", send: (t: Array<Tweet>) => {}}
        mock.name = "Mock"
        mock.send = notifier.sendTweets
        mock.send([jo, mo])

        let aMock = {name: "mock", send: (t: Array<Tweet>) => {}}
        aMock.name = "Mock"
        aMock.send = (t: Array<Tweet>) => { this.sendTweets(t) }
        aMock.send([jo, mo])
    }
}


const notifier = new Notifier([jo, mo])
notifier.sendTweets([chubbTweet, forrestTweet])
notifier.testRun()

Utils.debug('HTTP', 404)
U()
U2()
Utils.foo()

