1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Answer: getElementById returns a single element object. Id is for unique HTML document

   getElementsByClassName returns a live HTMLCollection. It is an array like object for elements that have the specified class name.

   querySelector returns the first element in the document that matches the specified CSS selector.

   querySelectorAll returns a static NodeList of all elements that matches the specified CSS selector.

2. How do you **create and insert a new element into the DOM**?
   Answer:
   const newParagraph = document.createElement('p');

   newParagraph.textContent = 'Hello JavaScript!';

   newParagraph.classList.add('new-element');

   const container = document.getElementById('container');

   container.appendChild(newParagraph);

3. What is **Event Bubbling** and how does it work?
   Answer:
   Event bubbling is a method of event propagation in which an event, triggered on an element, "bubbles up" through its DOM ancestors. That is, when you click on an inner element, the click event will fire on that element first, followed by its parent, then its grandparent, and so on all the way to the root of the document.

   Example
   It works in a flow:

   1. span for the targetted element
   2. p tag works as a parent of the span
   3. div which is child og p tag
   4. and so on

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer:

   Event delegation is a JavaScript approach where you bind one event handler to a parent node instead of binding separate handlers to all child elements of the parent. The handler handles all the events for its children by taking advantage of event bubbling.
   It is Useful:

   1. Improve Performance
   2. Reduces Code
   3. Works with Dynamic Content and so on.....

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Answer:
   preventDefault() stops the default browser action for an event

   stopPropagation() stops an event from bubbling up the DOM tress
