import * as FS from 'fs'
import * as Path from 'path'
import * as readLine from 'readline'
import * as Stream from 'stream'

const pathForDistFolder = Path.resolve(__dirname, '..','dist', 'src', 'ts')
const files = getFilesInFolder(pathForDistFolder)

files.forEach((file => {
    if(file.endsWith(".js")){
        alterImportExtension(Path.resolve(pathForDistFolder, file))
    }
}))



function alterImportExtension(pathFile:string){
    const file = interfaceReadline(pathFile)
    let context = ''
    file.on('line', (data => {
        data = data.trim()
        
        if(data.startsWith('import {') && data.endsWith('";')){
            data = data.replace('";', '.js";') 
            console.log(data)              
        }

        context += data
    }))

    file.on('close', () => {
        FS.writeFileSync(pathFile, context)
    })

    

}

function getFilesInFolder(path:string){
    const files = FS.readdirSync(pathForDistFolder)
    return files
}

export function interfaceReadline(path:string){
    const file = FS.createReadStream(path, {highWaterMark:13})
    return readLine.createInterface({
        input: file,
        crlfDelay:Infinity
    })
}