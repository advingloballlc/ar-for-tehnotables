export const checkInp = (e, setState, minNum, maxNum) => {
  let value = e.currentTarget.value

    if (value.match(/[^0-9]/g)) setState(value.replace(/[^0-9]/g, ''))
    else setState(value)

    if (value === '') setState(minNum)

    if (parseInt(value) > maxNum) setState(maxNum)
}