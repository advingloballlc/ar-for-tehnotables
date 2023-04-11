export const getParent = (element, parentSelector) => {
  let elements = []
  let ishaveselector = parentSelector !== undefined
 
    while ((element = element.parentElement) !== null) {
        if (element.nodeType !== Node.ELEMENT_NODE) {
            continue
        }
 
        if (!ishaveselector || element.matches(parentSelector)) {
            elements.push(element)
        }
    }
 
    return elements[0]
}