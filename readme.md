# 4 Function Calculator

<strong><em>Topic: web fundmentals</em></strong>

<br/>

<div style="color:grey">
<p>Status as of 1/20/2023 for script.js<p>
  <ul>
    <li>need to deal with dicimal</li>
    <li>need to deal with multi-digit number</li>
    <li>need to deal with 3 items but the middle is not an operator</li>
  </ul>
</div>

<div style="color:grey">
<p>Status as of 1/21/2023 for script1.js<p>
  <ul>
    <li>convert data type to number to do calculate</li>
    <li>need to deal with calculation</li>
  </ul>
</div>

<br/>

Using what we've learned about:

- variables
- conditionals
- onclick

And the following code snippets:

- `var displayDiv = document.querySelector("#display");`
- `displayDiv.innerText = "Some new value";`

Try to build a 4 Function Calculator from scratch.

We'll provide some HTML to get you started, and check out a working demo embedded below!

```html
<div id="calculator">
  <div id="display">0</div>
  <div class="row">
    <button onclick="press(7);">7</button>
    <button onclick="press(8);">8</button>
    <button onclick="press(9);">9</button>
    <button class="operator" onclick="setOP('/');">÷</button>
  </div>
  <div class="row">
    <button onclick="press(4);">4</button>
    <button onclick="press(5);">5</button>
    <button onclick="press(6);">6</button>
    <button class="operator" onclick="setOP('*');">×</button>
  </div>
  <div class="row">
    <button onclick="press(1);">1</button>
    <button onclick="press(2);">2</button>
    <button onclick="press(3);">3</button>
    <button class="operator" onclick="setOP('-');">−</button>
  </div>
  <div class="row">
    <button onclick="clr();">C</button>
    <button onclick="press(0);">0</button>
    <button onclick="press('.');">.</button>
    <button class="operator" onclick="setOP('+');">+</button>
  </div>
  <div class="row">
    <button id="equals" onclick="calculate()">=</div>
  </div>
<div>
```

<br/>

Working Demo:
https://cdpn.io/wgoode3/fullpage/pobBOzj?anon=true&view=fullpage

