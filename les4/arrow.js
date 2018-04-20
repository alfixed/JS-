function MyButtonAlaReactConstructor(name) {
    this.name = name;
    this.handleClick = () => console.log('Example 1:' + this.name)
    this.render = function () {
      return {
          type: 'button',
          buttonClick: this.handleClick
      }
    }
    this.handleClick2 = () => {
        console.log('Example 2:' + this.name);
      }
    this.render2 = function () {
      return {
          type: 'button',
          buttonClick: this.handleClick2
      }
    }
    this.handleClick3 = function() {
        setTimeout(() => {
          console.log('Example 3:', this.name);
        }, 1000);
      }.bind(this)
    this.render3 = function () {
      return {
          type: 'button',
          buttonClick: this.handleClick3
      }
    }
  }
  
  const myButton = new MyButtonAlaReactConstructor('I am button, I am good!');
  const buttonRender = myButton.render();
  const buttonRender2 = myButton.render2();
  const buttonRender3 = myButton.render3();
  document.getElementById('hi').innerHTML = `   <button onclick='buttonRender.buttonClick()'>Click Me</button>
                                                <button onclick='buttonRender2.buttonClick()'>Click Me2</button>
                                                <button onclick='buttonRender3.buttonClick()'>Click Me3</button>
                                            `;