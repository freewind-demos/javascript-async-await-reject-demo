async function futureAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (a === 1) {
                reject('too easy!')
            } else {
                resolve(a + b)
            }
        }, 1000)
    })
}

async function run() {
    try {
        const result = await futureAdd(1, 2)
        console.log(`Result: ${result}`)
    } catch (err) {
        console.log('--------- catch (1) ---------')
        console.log(typeof err)
        console.log(`Err(1): ${err}`)
        throw new Error(`Can't add: ${err}`)
    }
}

(async () => {
    try {
        await run()
    } catch (err) {
        console.log('-------- catch (2) --------')
        console.log(`Err(2): ${err}`)
        console.log(err)
    }

})()




