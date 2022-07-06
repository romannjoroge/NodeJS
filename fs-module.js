const fs = require('fs')
const path = require('path')

// Synchronous fs
const firstPath = path.resolve(__dirname, 'test', 'first.txt')
const secondPath = path.join('./test', 'second.txt')

// Reads the contents of first.txt and second.txt
// The arguement takes filepath and encoding as arguements
const firstContent = fs.readFileSync(firstPath, 'utf8')
const secondContent = fs.readFileSync(secondPath, 'utf8')

console.log(firstContent, secondContent)

// To write to a file
// Arguements taken are path of file to write to, content to place in file and an optional parameter
// specifying whether to append or not
fs.writeFileSync('./test/results.txt',
                  `The combination of first.txt and second.txt is ${firstContent} : ${secondContent}`,
                  {flag: 'a'})

// Asynchronous fs

// Arguements are filename, encoding, and a callback function
fs.readFile(firstPath, 'utf-8', (err, result)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log(result)
    firstContentAsync = result
    fs.readFile(secondPath, 'utf-8', (err, result)=>{
        if (err){
            console.log(err)
            return;
        }
        secondContentAsync = result
        // Arguements are filename, what to input, an optional flag for whether to append
        // and a callback function
        fs.writeFile('./test/result-async.txt',
                     `The combination of first.txt and second.txt is: \n ${firstContentAsync} \t ${secondContentAsync}`,
                     (err, result)=>{
                        if (err){
                            console.log(err)
                            return;
                        }
                     })
    })
})
console.log('Hopefully this is printed before first.txt')