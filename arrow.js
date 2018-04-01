function MyButtonAlaReactConstructor(name) {
  this.name = name;
  this.handleClick = () => console.log(this.name)
  this.render = () => ({
        type: 'button',
        buttonClick: this.handleClick
    })
}

const myButton = new MyButtonAlaReactConstructor('I am button, I am good!');
const buttonRender = myButton.render();
document.getElementById('hi').innerHTML = "<button onclick='buttonRender.buttonClick()'>Click Me</button>";
