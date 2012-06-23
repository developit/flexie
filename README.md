Flexie
======
Flexie is a simple flexible layout manager for HTML. It is **NOT** a CSS3 Flexible box layout implementation

Usage
-----
The parent element needs a `data-flex` attribute, and, optionally, a `data-flex-direction` value that can be either `vertical` or `horizontal`. If no `data-flex-direction` is specified, `vertical` will be assumed.

Each child element that should be sized by Flexie should have a `data-flex-weight` that is a numerical value. the total of all the `data-flex-weight` values will be used to calculate the size of each element. If a element doesn't have a `data-flex-weight` then it's size will be left alone. A sized element can also be a flex container.

