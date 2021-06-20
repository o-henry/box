<div align="center">

<h1>Visual Box</h1>
<p>Provides visual rendering status of components.</p>

</div>

---

<br />

[![](https://shields.io/npm/v/visual-box)](https://www.npmjs.com/package/visual-box)

<h2>Purpose</h2>

Components wrapped in visual-box change color when rendering occurs. <br />
When you wrap a child component, you know if the child component is rendered simultaneously when rendering occurs in the parent component.

<h2>Installation</h2>

Visual Box is available as a package on NPM & YARN.

```
# NPM
npm install --save-dev visual-box

# Yarn
yarn add --dev visual-box
```

<h2>Examples</h2>

```ts
import * as React from 'react';
import Box from 'visual-box';

function Button() {
  return <button>{children}</button>;
}

export default Button;
// → export default Box(Button)
```

- [**CODE-SANDBOX**](https://codesandbox.io/s/bitter-microservice-uif3q?file=/src/components/button.tsx)

<br/>

<div align="center">

![ezgif com-gif-maker](https://user-images.githubusercontent.com/48753593/122633016-2deba800-d111-11eb-86d4-6634e3674674.gif)

</div>

<h2>LICENSE</h2>

[MIT](https://github.com/o-henry/visual-box/blob/master/LICENSE)
