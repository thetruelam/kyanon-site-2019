const sectionMap = sectionIndex => {
  switch (sectionIndex + 1) {
  case 1:
    return 'Section1'
  case 2:
    return 'Section2'
  default:
    return null
  }
}

export default sectionMap
