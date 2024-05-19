class Weight {
  constructor() {
    this.text = document.querySelector('#weight-text')
    this.range = document.querySelector('#weight-range')
    this.out = document.querySelector('#weight-value-out')

    console.log(this.range);
    
    this.init()
  }

  init() {
    this.range.addEventListener('input', () => {this.handleChange()})
  }

  handleChange() {
    let value = +this.range.value

    this.text.style.fontWeight = value
    this.out.textContent = 'font-weight: ' + value
  }
}

new Weight