const stepValidator = (step) => {
  let isValid = true
  if (!(step.label && step.label.length)) {
    // eslint-disable-next-line
    console.error('Missing required prop "label" inside a "Step" prop')
    isValid = false
  }
  if (!(step.action && {}.toString.call(step.action) === '[object Function]')) {
    // eslint-disable-next-line
    console.error('Missing required prop "action" inside a "Step" prop')
    isValid = false
  }
  if (typeof step.isDisabled !== 'boolean') {
    // eslint-disable-next-line
    console.error('Missing required prop "isDisabled" inside a "Step" prop')
    isValid = false
  }
  return isValid
}

export default stepValidator
