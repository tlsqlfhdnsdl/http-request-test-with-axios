const axios = require('axios')

const axiosRetry = require('axios-retry')

axiosRetry(axios, {
    retries: 3
})

async function get() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")

    return res.data
}

async function getWitParam(userId) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            userId: userId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authentication": "hahahoho"
        }
    })

    return res.data
}

async function post() {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: 'foo',
        body: 'bar',
        userId: 1
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return res.data
}

async function main() {
    var res = await get()

    console.log(res)

    res = await post()

    console.log(res)

    res = await getWitParam(10)

    console.log(res[0].title)
}

main().then(() => {
    console.log("test done")
})