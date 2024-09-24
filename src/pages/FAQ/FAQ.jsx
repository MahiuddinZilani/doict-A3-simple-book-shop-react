import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="container mx-auto mt-8">
      <Accordion collapseAll>
        {/* Question: 01 */}
        <Accordion.Panel>
          <Accordion.Title>
            1. What is React.js and Explain the concept of "components" in
            React.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              React.js is an open-source JavaScript library developed by
              Facebook, used for building user interfaces, specifically
              single-page applications. React is used to create dynamic and
              interactive web applications by efficiently managing the DOM
              (Document Object Model). React allows developers to build reusable
              UI components.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Components in React are the building blocks of a React
              application. A component is a self-contained module that renders
              some part of the UI and encapsulates its logic, styling, and
              structure. Components can be either functional components (written
              as functions) or class components (written as ES6 classes).
              Components allow for reusability, composability, and
              maintainability of the code.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 02 */}
        <Accordion.Panel>
          <Accordion.Title>
            2. What is JSX in React, and how does it work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSX (JavaScript XML) is a syntax extension for JavaScript used in
              React to describe what the UI should look like. It allows you to
              write HTML-like syntax directly within JavaScript code. JSX makes
              it easier to write and visualize the structure of UI components by
              combining HTML and JavaScript.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSX is not executed directly by the browser; it is transpiled by
              tools like Babel into standard JavaScript (usually using React’s
              createElement function). JSX can also embed JavaScript expressions
              within curly braces {}.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 03 */}
        <Accordion.Panel>
          <Accordion.Title>
            3 What is the Virtual DOM, and how does React use it to optimize
            performance?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The Virtual DOM (VDOM) is a lightweight, in-memory representation
              of the actual DOM in the browser. React uses the Virtual DOM to
              improve performance by minimizing direct manipulation of the real
              DOM, which is slow and expensive.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              When a React component’s state or props change, React creates a
              new Virtual DOM and compares it with the previous version using a
              process called diffing. After detecting the differences, React
              performs reconciliation, where it updates only the parts of the
              actual DOM that changed. This selective rendering reduces the
              amount of DOM manipulation, optimizing performance.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 04 */}
        <Accordion.Panel>
          <Accordion.Title>
            4. Explain the concept of "props" in React and how they are used.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Props (short for "properties") are inputs to React components.
              They are used to pass data from a parent component to a child
              component. Props are immutable, meaning that once they are set,
              they cannot be modified by the child component. Props enable the
              creation of dynamic and reusable components by allowing data and
              behavior to be passed down.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 05 */}
        <Accordion.Panel>
          <Accordion.Title>
            5. What is "state" in React, and how does it differ from props?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              State is a built-in React object used to store data that affects
              the rendering of components. Unlike props, state is managed within
              the component itself and can change over time, usually in response
              to user actions or system events.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              While props are used to pass data into a component from the
              outside and are immutable, state represents data that is internal
              to the component and can be updated by the component, allowing it
              to react to user inputs or other dynamic data changes.
            </p>
            <p>Difference:</p>
            <ul className="text-gray-500 dark:text-gray-400">
              <li>Props: Immutable, passed from parent to child.</li>
              <li>
                State: Mutable, managed within the component and can be updated.
              </li>
              State: Mutable, managed within the component and can be updated.
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 06 */}
        <Accordion.Panel>
          <Accordion.Title>
            6. Explain the useState hook and provide an example of how it is
            used.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The useState hook is a built-in hook in React that allows
              functional components to manage state. It returns an array with
              two elements: the current state value and a function to update
              that state.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* Question: 07 */}
        <Accordion.Panel>
          <Accordion.Title>
            7. What is the purpose of the useEffect hook in React, and when
            would you use it?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The useEffect hook allows you to perform side effects in
              functional components, such as fetching data, setting up
              subscriptions, or directly interacting with the DOM. It is the
              equivalent of lifecycle methods like componentDidMount,
              componentDidUpdate, and componentWillUnmount in class components.
            </p>
            <p>When to use useEffect:</p>
            <ul>
              <li>When you need to fetch data from an API or database.</li>
              <li>When you need to set up a subscription or event listener.</li>
              <li>When you need to interact with the DOM directly.</li>
            </ul>

            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
