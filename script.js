const decInp = document.getElementById('dec-inp')
const binInp = document.getElementById('bin-inp')
const errMsg = document.getElementById('err-msg')

// Decimal ---> Binary when input in decimal

decInp.addEventListener('input', () => {
  let decVal = parseInt(decInp.value)
  binInp.value = decVal.toString(2)
})

// Binary ---> Decimal when input in binary

binInp.addEventListener('input', () => {
  const binVal = binInp.value
  const validBin = (num) => {
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== '0' && num[i] !== '1') {
        return false
      }
    }
    return true
  }

  if (validBin(binVal)) {
    decInp.value = parseInt(binVal, 2)
    errMsg.textContent = ''
  } else {
    errMsg.textContent = 'Invalid binary number'
  }
})
