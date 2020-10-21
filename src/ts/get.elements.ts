export function getElementsList(){
    const items = document.querySelectorAll('#list > li')

    const times:string[] = []
    items.forEach((item => {
        times.push(item.innerHTML)
    }))
    
    return times
}

