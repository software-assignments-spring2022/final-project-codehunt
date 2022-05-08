const fs = require("fs")
const {getLeetcodeContent} = require("./wc-leetcode.js")
const {getCodeForcesContent} = require("./wc-codeforces.js")
const {getCodeChefContent} = require("./wc-codechef.js")


Promise
    .all([
      getLeetcodeContent(),
      getCodeForcesContent(),
      getCodeChefContent()
    ])
    .then((data) => {
      const contests = []
      data.forEach((value) => contests.push(...value))
      console.log(contests)
      fs.writeFile("contests.json", JSON.stringify(contests), (err) => {
        if (err) {
          throw err
        }
        console.log("JSON data is saved.")
      })
    })

