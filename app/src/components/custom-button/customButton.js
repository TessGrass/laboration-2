
const template = document.createElement('template')
template.innerHTML = `
<style>

.submit {
  background-color: rgba(255, 123, 123);
  border-radius: 12px;
  border: 0;
  color: white;
  font-size: 16px;
  height: 4vh;
  text-align: center;
  width: 8vw;
}

.submit:active {
  background-color: rgba(255, 123, 150);
}


</style>
    <button type="number" id="custom-buttom" class="submit"><slot /></button>
  `
customElements.define('custom-button',
  /**
   * Creates a custom-button component.
   */
  class extends HTMLElement {
  /**
   * Creates a instance of the current type.
   */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.customButton = this.shadowRoot.querySelector('#custom-buttom')

      this.customButton.addEventListener('click', (event) => {
      })
    }
  })
