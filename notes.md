# Study Guide for Final

What ports are used for HTTP, HTTPS, SSH? 80, 443, 22

What do HTTP status codes in the 300, 400, 500 range indicate? 300- redirection 400- client errors 500 -server errors

What does the HTTP header content-type allows you to do? HTTP header is used to indicate the media type or MIME (Multipurpose Internet Mail Extensions) type of the resource being sent in the HTTP message. It allows the sender to specify the nature of the data contained in the body of the request or response. The Content-Type header is crucial for the recipient (typically a web browser or application) to correctly interpret and process the received data. text/html: application/json: application/xml: multipart/form-data: application/x-www-form-urlencoded:

What do the following attributes of a cookie do?
Domain:

The Domain attribute specifies the domain for which the cookie is valid. The cookie will be sent to any subdomains of the specified domain. For example, if a cookie is set with the domain ".example.com," it will be sent to "subdomain.example.com" as well as "example.com." This attribute helps manage cookies across different subdomains.
Path:

The Path attribute indicates the URL path for which the cookie is valid. If a cookie is set with a specific path, it will only be sent to the server for requests that match that path. For example, a cookie with the path "/account" will be sent to requests for URLs like "/account/profile" but not to requests for "/home" or "/blog."
SameSite:

The SameSite attribute controls when cookies are sent with cross-site requests. It is a security feature designed to mitigate the risk of cross-site request forgery attacks. There are three possible values for SameSite:
Strict: Cookies are only sent in a first-party context, meaning they are not sent with cross-site requests.
Lax: Cookies are sent with top-level navigations and with same-site POST requests. It provides a balance between security and usability.
None: Cookies are sent with both same-site and cross-site requests. This is typically used for third-party cookies but requires the Secure attribute when used in combination with the None value, meaning it is only sent over HTTPS connections.
HttpOnly:

The HttpOnly attribute is a security feature that, when set, prevents JavaScript from accessing the cookie through the document.cookie API. This helps protect the cookie from certain types of cross-site scripting (XSS) attacks. By limiting access to the cookie to HTTP requests only, the HttpOnly attribute makes it more difficult for malicious scripts to steal sensitive information stored in cookies.

Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
Given the following Express service code: What does the following JavaScript fetch return?
Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}
select all of the matching documents.

The MongoDB query you provided is filtering documents based on two conditions:

Cost is greater than 10:

{ cost: { $gt: 10 } }: This part of the query selects documents where the value of the "cost" field is greater than 10.
Name matches the regular expression /fran.*/:

{ name: /fran.*/ }: This part of the query selects documents where the value of the "name" field matches the regular expression /fran.*/. This means it will match names that start with "fran" followed by any characters.

Assuming you have a collection of documents and you want to select all documents that satisfy both conditions, the query would look like this:

javascript
Copy code
db.yourCollection.find({
  cost: { $gt: 10 },
  name: /fran.*/
})
This query will retrieve all documents where the "cost" is greater than 10 and the "name" field matches the specified regular expression.

How should you store user passwords in a database? Use Hashing:

Never store plain-text passwords in the database. Instead, use a strong one-way hashing algorithm to convert the password into a fixed-length string of characters. Commonly used hashing algorithms include bcrypt, Argon2, and scrypt.
Use a Salt:

Implement a unique salt for each user before hashing their password. A salt is a random value that is combined with the password before hashing. This ensures that even if two users have the same password, their hashed passwords will be different due to the unique salt.
Choose a Strong Hashing Algorithm:

Use a well-established and cryptographically secure hashing algorithm. bcrypt is a popular choice for password hashing due to its adaptive nature and resistance to brute-force attacks.
Use Key Derivation Functions (KDF):

Key Derivation Functions, like bcrypt, are designed to be slow and computationally intensive. This helps to slow down attackers attempting to crack passwords through brute-force or dictionary attacks.
Stay Current with Security Best Practices:

Keep abreast of the latest security developments and best practices. Security is an evolving field, and it's important to adapt to new threats and vulnerabilities.
Enforce Password Policies:

Implement and enforce password policies that encourage users to choose strong and unique passwords. Consider factors such as minimum length, complexity requirements, and expiration periods.
Implement Account Lockout Mechanisms:

Implement mechanisms to lock user accounts after a certain number of failed login attempts. This helps protect against brute-force attacks.
Use HTTPS:

Ensure that your application uses HTTPS to encrypt data in transit. This helps protect passwords and other sensitive information while it's being transmitted between the client and server.
Separate Authentication and Authorization:

Clearly separate the authentication (verifying identity) and authorization (granting access rights) processes. Authentication should focus on securely verifying the user's identity without revealing unnecessary information.

Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
What is the WebSocket protocol used for? The WebSocket protocol is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It is designed to be implemented in web browsers and web servers but can be used in any application where real-time communication is required. WebSocket is particularly well-suited for scenarios where low-latency communication and frequent data exchange between a client (such as a web browser) and a server are essential.

What is JSX and how are the curly braces rendered? JSX, or JavaScript XML, is a syntax extension for JavaScript that looks similar to XML or HTML. It is commonly associated with the React library, where it is used to describe the structure of UI components. JSX allows developers to write HTML-like code in their JavaScript files, making it easier to work with UI elements and components.

In JSX, you can include JavaScript expressions by enclosing them in curly braces {}. This allows you to embed dynamic content and JavaScript logic within your JSX code. The expressions inside curly braces are evaluated and the results are rendered as part of the final UI.

Here's a simple example of JSX in a React component:

jsx
Copy code
import React from 'react';

const MyComponent = () => {
  const name = 'John Doe';
  const greeting = <p>Hello, {name}!</p>;

  return greeting;
};

export default MyComponent;
In this example:

JSX allows the definition of HTML-like tags (<p> in this case) directly in the JavaScript code.
The curly braces {} are used to embed the name variable inside the JSX expression.
The value of name is dynamically inserted into the rendered output, resulting in a personalized greeting.
When the above component is rendered, it will output:

html
Copy code
<p>Hello, John Doe!</p>

Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
<div>
  <h1>Hello, Sara</h1>
  <h1>Hello, Cahal</h1>
  <h1>Hello, Edite</h1>
</div>
        
Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
<div id="root">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
      
What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
The provided React component, Example, is a functional component that uses the useState hook to manage state within a functional component. This component represents a simple example of a counter that tracks the number of times a button is clicked.

Let's break down the key aspects of the component:

State Declaration:

const [count, setCount] = useState(0);
This line uses the useState hook to declare a state variable named count and its associated updater function setCount. The initial value of count is set to 0.
Rendered JSX:

The component returns JSX that includes a <p> element displaying the current value of the count state variable and a <button> element.
The text inside the <p> element dynamically shows the number of times the button has been clicked using the curly braces {} for expression interpolation: <p>You clicked {count} times</p>.
Button Click Handler:

The <button> element has an onClick attribute that specifies an inline arrow function.
When the button is clicked, the inline arrow function is executed, calling setCount(count + 1). This updates the count state to its current value plus 1.
In summary, this React component renders a simple user interface with a paragraph (<p>) displaying the current count, and a button (<button>) that, when clicked, increments the count. The state management is handled by the useState hook, which allows functional components to have local state variables. The UI dynamically updates based on the state changes triggered by the button click.

What are React Hooks used for? React Hooks are functions that allow functional components to use state, lifecycle methods, and other React features that were previously only available in class components. They were introduced in React version 16.8 as a way to enable more functionality in functional components, making it easier to reuse stateful logic and manage component lifecycles.

Here are some of the key use cases for React Hooks:

State Management (useState):

The useState hook allows functional components to have local state variables. It takes an initial state as an argument and returns an array with the current state value and a function to update that state. This is particularly useful for managing component-specific state without the need for class components.
jsx
Copy code
const [count, setCount] = useState(0);
Effect (useEffect):

The useEffect hook is used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.
jsx
Copy code
useEffect(() => {
  // Side effect code here
  console.log('Component did mount or update');
  // Clean-up function (optional) for componentWillUnmount
  return () => {
    console.log('Component will unmount');
  };
}, [/* dependency array */]);
Context (useContext):

The useContext hook allows functional components to consume values from the React context. It simplifies the process of accessing context values without the need for a render prop or higher-order component.
jsx
Copy code
const contextValue = useContext(MyContext);
Reducer (useReducer):

The useReducer hook is an alternative to useState for managing more complex state logic. It is particularly useful when the next state depends on the previous state and when the state logic becomes more complex.
jsx
Copy code
const [state, dispatch] = useReducer(reducer, initialState);
Ref (useRef):

The useRef hook creates a mutable object called a ref that can persist across renders. It is commonly used for accessing and interacting with the DOM directly or for persisting values between renders without causing re-renders.
jsx
Copy code
const myRef = useRef(initialValue);
Custom Hooks:

Developers can create custom hooks to encapsulate and reuse pieces of stateful logic. This promotes code reusability and helps to manage complex logic in a more modular way.
jsx
Copy code
function useCustomHook() {
  // Custom hook logic here
}
React Hooks provide a more functional and concise way to manage state and lifecycle in React components, offering an alternative to class components and promoting the use of functional components. They make it easier to share and reuse logic across components, resulting in cleaner and more maintainable code.

What is the useEffect hook used for? The useEffect hook in React is used for handling side effects in functional components. Side effects are operations or behaviors that occur outside the normal render cycle and may include data fetching, subscriptions, manual DOM manipulations, and more. The useEffect hook allows you to perform such side effects in a functional component and manage their execution over the component's lifecycle.

What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

The provided code is a React component that uses the React Router library for handling navigation and routing in a React application. Let's break down the code to understand its functionality:

BrowserRouter:

The <BrowserRouter> component is a part of the React Router library and provides the context for the routing functionality. It uses the HTML5 History API to keep the UI in sync with the URL.
Routes and Route Components:

The <Routes> component is used to define the routes in the application.
The <Route> components are used to specify individual routes along with their corresponding components to render.
Nested Routes:

The routes are nested within each other, forming a hierarchical structure.
The top-level <Route> has a path="/", meaning it matches the root URL.
The element={<Layout />} prop specifies that when the root URL is matched, the <Layout> component should be rendered.
Child Routes:

The child routes are defined within the top-level <Route> using the index and path attributes.
<Route index element={<Home />} />: This means that when the root URL is matched, and it's the index route, the <Home> component will be rendered.
<Route path="blogs" element={<Blogs />} />: This sets up a route for the "/blogs" path, rendering the <Blogs> component.
<Route path="contact" element={<Contact />} />: This sets up a route for the "/contact" path, rendering the <Contact> component.
<Route path="*" element={<NoPage />} />: This is a catch-all route that matches any path not covered by the previous routes. It renders the <NoPage> component, which might be a 404 page or an error page.
In summary, the App component sets up a basic routing structure for a React application using React Router. It defines different routes and their corresponding components, allowing the application to render different content based on the URL path. The components such as <Layout>, <Home>, <Blogs>, <Contact>, and <NoPage> are assumed to be React components responsible for rendering specific parts of the UI.

What role does npm play in web development? npm (Node Package Manager) is a crucial tool in web development, particularly in projects that involve JavaScript, Node.js, and related technologies. Here are some key roles that npm plays in web development:

Package Management:

npm is primarily used for managing packages or libraries that a project depends on. It provides a vast registry of open-source JavaScript packages that developers can easily incorporate into their projects. This simplifies dependency management and allows developers to leverage existing solutions for common tasks.
Dependency Management:

Web development often involves using various libraries and frameworks. npm allows developers to specify project dependencies in a package.json file, making it easy to share the project with others. It also enables version management, ensuring that the project uses the specified versions of each dependency.
Module Resolution:

npm facilitates the use of CommonJS or ECMAScript modules in Node.js and front-end development. Developers can install and import modules using npm, and the module resolution system ensures that the correct modules are loaded.
Command-Line Interface (CLI):

npm provides a command-line interface that allows developers to execute various commands related to package management. Common commands include installing dependencies (npm install), updating packages (npm update), and running scripts defined in the package.json file.
Script Running:

npm allows developers to define custom scripts in the package.json file. These scripts can be executed using the npm run command. For example, developers can define scripts for running tests, building the project, starting a development server, and more.
Global and Local Packages:

npm allows the installation of packages either globally or locally. Global packages are installed system-wide and can be used across different projects. Local packages are specific to a project, and their dependencies are isolated.
Project Initialization:

npm provides a convenient way to initialize a new project by running npm init. This command prompts the developer to answer a series of questions to generate a package.json file with basic project information and dependencies.
Registry and Publishing:

npm serves as a central registry for JavaScript packages. Developers can publish their own packages to the npm registry, making them available for others to use. This encourages collaboration and code sharing within the community.
Security Auditing:

npm includes features for auditing the project's dependencies to identify and address security vulnerabilities. Developers can run npm audit to check for security issues and take appropriate actions to mitigate risks.
In summary, npm plays a central role in web development by providing a reliable and comprehensive package management system for JavaScript and Node.js projects. It simplifies the process of managing dependencies, facilitates code sharing, and offers tools for running scripts and handling various aspects of project development.

What does package.json do in a npm project? The package.json file is a key configuration file in npm (Node Package Manager) projects. It serves multiple purposes and plays a crucial role in managing dependencies, scripts, and metadata for a Node.js or JavaScript project. Here are some of the key functions of the package.json file:

Dependency Management:

The dependencies and devDependencies sections in the package.json file list the project's runtime and development dependencies, respectively. Dependencies are third-party packages or libraries that the project relies on. When someone else clones the project, they can run npm install, and npm will install the specified dependencies.
json
Copy code
"dependencies": {
  "express": "^4.17.1",
  "lodash": "^4.17.21"
},
"devDependencies": {
  "eslint": "^7.32.0",
  "jest": "^27.0.6"
}
Versioning and Semver:

Each dependency listed in the package.json file includes a version number, often following semantic versioning (SemVer) conventions. SemVer helps define how versions should be incremented based on the nature of changes (major, minor, patch). This ensures that projects remain compatible with the specified versions of their dependencies.
Project Metadata:

The package.json file contains metadata about the project, such as the project name, version, description, author, license, and more. This information is used for identification, documentation, and licensing purposes.
json
Copy code
"name": "my-project",
"version": "1.0.0",
"description": "A sample project",
"author": "John Doe",
"license": "MIT"
Scripts:

The scripts section allows developers to define custom scripts that can be executed using the npm run command. Common scripts include tasks like starting a development server, running tests, building the project, or any other custom command.
json
Copy code
"scripts": {
  "start": "node server.js",
  "test": "jest",
  "build": "webpack"
}
Project Initialization:

The package.json file is generated or modified using the npm init command. This command prompts the developer to provide information about the project, such as the project name, version, description, entry point, test command, repository, keywords, author, and license.
Lock File:

When dependencies are installed, npm generates a package-lock.json or yarn.lock file, depending on the package manager in use. This file contains an exact, deterministic version and dependency tree, ensuring that subsequent installations use the same versions of packages.
Security Auditing:

The package.json file is used in conjunction with npm's security features. Developers can run npm audit to check for security vulnerabilities in the project's dependencies and take appropriate actions to address any issues.
Global Configuration:

The package.json file can also include configuration settings, such as "private": true, to prevent accidental publishing of the project as a public package.
In summary, the package.json file serves as a central configuration and metadata file for npm projects. It defines the project's dependencies, scripts, and metadata, making it an essential component for managing and sharing Node.js and JavaScript projects.

What does the fetch function do? The fetch function is a modern JavaScript API that provides an easy and flexible way to make HTTP requests in web browsers. It is typically used to retrieve resources from a network, such as fetching data from an API or making requests to a server.

What does node.js do? Node.js is a runtime environment that allows the execution of JavaScript code server-side. It is built on the V8 JavaScript runtime engine, which is the same engine that powers the Google Chrome browser. Node.js is designed to be lightweight, efficient, and scalable, making it well-suited for building server-side and network applications.

What does Vite do? Vite is a build tool and development server designed for modern web development. It focuses on providing a fast and efficient development experience, especially for Vue.js applications, although it can be used with other JavaScript frameworks as well. The name "Vite" is derived from the French word for "fast."

# Study Guide Midterm
1. In the following code, what does the link element do? 
The <link> tag defines the relationship between the current document and an external resource.
The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
The <link> element is an empty element, it contains attributes only.

2. In the following code,  what does a div tag do? 
The <div> tag defines a division or a section in an HTML document.
The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
The <div> tag is easily styled by using the class or id attribute.
Any sort of content can be put inside the <div> tag! 

3. In the following code, what is the difference between the #title and .grid selector?
Title is an id and grid is a class. Id can be used only for one HTML element, and classes can include multiple elements.

4. In the following code, what is the difference between padding and margin? 
In general, use margins when you're adjusting the spacing of an element in relation to another element (i.e a div in relation to another div on the page), and padding when you're adjusting the look of an individual element (i.e the amount of pixels between the edge of a div and the text within it).
Padding represents the amount of inner space an element has, while the margin is whitespace available surrounding an element.

5. Given this HTML and this CSS how will the images be displayed using flex? The flex layout allows responsive elements within a container to be automatically arranged depending on viewport size

6. What does the following padding CSS do? ![image](https://github.com/BledsoeBoy/startup/assets/144291641/570cbc07-246f-4e44-b6c5-9d97e3cb0f8b)

7. What does the following code using arrow syntax function declaration do? Unlike regular functions, arrow functions do not allow duplicate parameters. Shorthand to write a function, even more shorthand for functions with one line of code.

8. What does the following code using map with an array output? 
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.

9. What does the following code output using getElementByID and addEventListener? 
Add a click event to a <button> element:
element.addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
10. What does the following line of Javascript do using a # selector?
11. Which of the following are true? (mark all that are true about the DOM) 
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

12. By default, the HTML span element has a default CSS display property value of: 
inline

13. How would you use CSS to change all the div elements to have a background color of red? 
 div {
      background: red;
    }
14. How would you display an image with a hyperlink in HTML?
<img src=“URL” alt=“descriptive text”>

15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
element, padding, border, margin
16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
17. What will the following code output when executed using a for loop and console.log?
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
document.getElementById("byu").style.color = "green";

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
(p ol ul h2 h1 h3)

20. How do you declare the document type to be html?
  !DOCTYPE html
  
21. What is valid javascript syntax for if, else, for, while, switch statements?
When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript supports + (concatenation) and === (equality). inequality (!==)
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}

22. What is the correct syntax for creating a javascript object?
There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

23. Is is possible to add new properties to javascript objects? Yes
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.

24. If you want to include JavaScript on an HTML page, which tag do you use? <script>tag 
script src="login.js"</script

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

26. Which of the following correctly describes JSON?
JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
wget- lets you download files and interact with REST APIs
nano- to modify or create files within SSH
vim- create a new file, edit an existing one, or just read one
echo - Output the parameters of the command
cd - Change directory
chmod- to change permissions for a file or directory on a Unix machine.
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual

28. Which of the following console command creates a remote shell session?
ssh

29. Which of the following is true when the -la parameter is specified for the ls console command?
You can list all of the files in the directory with ls (list files). Most command line applications take parameters that are specified after you type the application name. For example, ls can list all files (even hidden ones) in a long format if you provide the parameter -la.

30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? 
top level- click
subdomain- banana.fruit
root domain- bozo.click

31. Is a web certificate necessary to use HTTPS? Yes. you need a SSL or TLS certificate installed on your website
32. Can a DNS A record can point to an IP address or another A record? 
Yes. A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it's used to point a domain name to an IP address or host. You can only use an A record when you want to point to an IPv4 address. An AAAA record is required if you wish to direct your domain to an IPv6 address.

33. Port 443, 80, 22 is reserved for which protocol?
Each port number is assigned to a specific protocol or service. For example, port 80 is used for HTTP traffic, port 443 is used for HTTPS (HyperText Transfer Protocol Secure) traffic, and port 25 is used for SMTP traffic. The port 22 is used for Secure Shell (SSH) communication and allows remote administration access to the VM.

34. What will the following code using Promises output when executed?
Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});

# Random Notes
To be an exceptional web programmer, you must continually improve in four areas: 1. Technology 2. Art 3. Social 4. Discovery

# Section 1

## Discord
Discord is a peer chat service that is organized by servers and channels. This is how you can get on the TA Help Queue and get help through zoom calls or help from everybody including the instructor, TA's, or peers.

# Section 2 

## Startup application 
HTML - Basic structural and organizational elements
CSS - Styling and animating
JavaScript - Interactivity (e.g. What happens when a user presses a button)
Web service - Remote functions that your application calls on your, or someone else's, web server (e.g. saveScores, getWeather, chatWithFriend)
Authentication - Creating accounts and logging in
Database persistence - Storing user data in a database (e.g. Save the high scores and login information)
WebSocket - Support for pushing data from the server. This can be peer to peer communication (e.g. chatting with friends through the browser), or realtime data from the server (e.g. stock prices or the current game leader).
Web framework - Using React to add components and request routing

Simple is usually better. One common mistake is to spend too much time on trying to make the application look a certain way, so make it reasonable but move on.

Common mistakes:
Not putting in consistent effort.
Too many UI pieces.
Getting stuck on doing something a specific way.
Focusing too much on the UI. 
Implementing too many features.
Forgetting that programming is an art.

## The Console
Also known as the command line, shell, or terminal, the console window is an essential web development tool. There are many console applications that you can choose from. All operating systems come with a default console, but you will probably want to install one in order to get the best experience.

In order for you to successfully use the console for web programming it must be POSIX compliant. POSIX compliance means that it supports a standard set of console commands. Both Mac and Linix support POSIX. That means any necessary console commands will work on those operating systems. If you are using Microsoft Windows you can get a reasonable approximation of a POSIX compliant console by installing Git Bash. When installing use all the default settings.

You can use Windows Subsystem for Linux (WSL) (e.g Ubuntu on Windows) for your work in this class, but you must be very careful to do all of your work actually within WSL. Don't download files to your Windows partition and then access them from WSL. It is suggested that you use Git Bash instead of WSL, unless you are really familiar with WSL.

Basic console commands I should familiarize myself with:
-echo - Output the parameters of the command
-cd - Change directory
-mkdir - Make directory
-rmdir - Remove directory
-rm - Remove file(s)
-mv - Move file(s)
-cp - Copy files
-ls - List files
-curl - Command line client URL browser
-grep - Regular expression search
-find - Find files
-top - View running processes with CPU and memory usage
-df - View disk statistics
-cat - Output the contents of a file
-less - Interactively output the contents of a file
-wc - Count the words in a file
-ps - View the currently running processes
-kill - Kill a currently running process
-sudo - Execute a command as a super user (admin)
-ssh - Create a secure shell on a remote computer
-scp - Securely copy files to a remote computer
-history - Show the history of commands
-ping - Check if a website is up
-tracert - Trace the connections to a website
-dig - Show the DNS information for a domain
-man - Look up a command in the manual
-CTRL-R - Use type ahead to find previous commands
-CTRL-C - Kill the currently running command

## Editors
The code editor is the workspace of a web application developer. The VS Code Live Server extension is great for building web applications. You can do much of this on CodePen, but for your projects you are going to be working in your development environment. This means you will have a GitHub repository cloned to your personal development computer. With the press of the Go Live button on the bottom right status bar, your entire project directory is served up through your browser. Additionally, if you make any changes to a file the browser will automatically be updated. The basic support that VS Code offers for working with Git is sufficient for most tasks, but if you really want to unleash the power of git, consider installing the GitLens extension.

The following short list of commands should allow you to do most of what you will ever want to do.

keystroke	meaning
-:h	help
-i	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
-u	undo
-CTRL-r	redo
-gg	go to beginning of file
-G	go to end of file
-/	search for text that you type after /
-n	next search match
-N	previous search match
-v	visually select text
-y	yank or copy selected text to clipboard
-p	paste clipboard
-CTRL-wv	Split window vertically
-CTRL-ww	Toggle windows
-CTRL-wq	Close current window
-:e	Open a file. Type ahead available. If you open a directory you can navigate -it in the window
-:w	write file (save)
-:q	quit. Use :q! to exit without saving

# Section 3

## GitHub
When we introduced Git, we said that Git provides two things, 1) Version tracking in a repository, and 2) the ability to clone a copy of the repository to a different location. 

We are going to use GitHub for three things.
-Hosting all of this instruction. Because it is hosted on GitHub you can generate pull requests when you see things that need improvement.
-Publicly hosting your project repositories. This creates a backup copy of your code, demonstrates your progress with your commit history, allows for reviews of your code, and makes it so you can collaborate with your peers. It also looks good on a resume!
-Keeping notes about what you have learned and things you want to remember.

### Git
In the assignment of conflictTest.md, I learned mainly about how git/GitHub works. Here are simple things I learned
To add a completely new repository from GitHub to your computer: git clone <url>
To pull a repository from GitHub to your local environment, or in other words to open up the file or get it for the first time: git add <filename>
To update edits on the repository from GitHub to the development environment: git pull     --> don't include the file name or anything
Then make whatever changes you want and save (ctr + s)
Then commit the changes/in other words apply the changes and save it: git commit -am "(whatever comments you want explaining what you did)"
Then finally push the changes back to GitHub, or in other words, save the changes to the cloud of GitHub so that you can access your changes now on GitHub
To then have everything pushed back to GitHub you need to put git push (no name) and then you can access everything in GitHub.

### Merge
When having merge issues, just when you have the error, change the code from the text editor to where the code matches up or you add a bit of the editing from each GitHub and your development environment

## Development and production environments 
When working on a commercial web application, it is critical to separate where you develop your application, from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. For our work, you will use and manage both your development environment (your personal computer) and your production environment (your AWS server).

## CodePen
This course makes extensive use of the coding sandbox website CodePen. The power of CodePen is that it immediately renders your code in the preview window. This makes it so you can reduce a problem to something small, quickly iterate ideas, and immediately see what the impact is. CodePen also serves as a portfolio of what you have learned so that you can review it later or share it with others.

CodePen is used to run your ideas across and simply test what you are thinking out, but also can be helpful to see others' projects and to easily experiment with different technologies.

# Section 4

## The Internet
The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all the computers in the world are connected, but generally that is what the internet is.

When one device wants to talk to another it must have an **IP address**. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a **domain name**. You can look up the IP address for any domain name using the dig console utility.

Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection, the transport and application layers start exchanging data. You can determine the hops in a connection using the traceroute console utility. 

The actual sending of data across the internet uses the TCP/IP model. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC).

TCP/IP layers
Layer	         Example	         Purpose
Application	   HTTPS	           Functionality like web browsing
Transport	     TCP	             Moving connection information packets
Internet	     IP	               Establishing connections
Link	         Fiber, hardware	 Physical connections

## Web Servers
A web server is a computing device that hosts a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP.

Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. This makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTPS port 443. The gateway then looks at the request and maps it to the other services running on different ports. Our web server will use the application **Caddy** as the gateway to our services.

## Amazon Web Services - EC2
In theory you could contact your ISP and lease an IP address that you would then associate with your laptop. This would make your laptop into a web server, but this has the downside of requiring your laptop to always be available, have enough bandwidth to support your millions of fans, and creates a significant security risk for your laptop. Instead we want to use a cloud provider that can give you an inexpensive small computer that you can experiment with and throw away any time that you would like. This is actually exactly what many web companies do with their core business and so it should work fine for you. When you rent a web server, it is physically located in a massive data center located in a place like Virginia, Ohio, Dublin, or Tokyo.

t3.nano, t3.micro, or t2.micro are instance types and they depend how much power you want according to how much money you want to spend.

You can solely just have a public IP address to get a website working, but to make it easy and convenient for users and anybody to get to, it is better to have a "nickname" for it, or in other words, a domain name.

### Keeping the same public IP address
You can stop your server at any time. Don't confuse this with terminating your server which completely destroys it. Stopping your server just powers down the device. This is nice because you don't have to pay for it while it is stopped. However, every time you stop and start your server, it will be assigned a new public IP address. It is important to keep the same public IP address so that you, and others, can always browse to the same place. More importantly, when you create your domain name, you can assign it to an address that never changes.

You have two choices in order to keep the same public IP address:

1. Never stop your server.
2. Assign an elastic IP address to your server so that it keeps the same address even if you stop it.

## Domain names
A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry. 

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. You can get information about a domain name from the domain name registry using the whois console utility. This provides information such as a technical contact to talk to if there is a problem with the domain, and an administrative contact to talk to if you want to buy the domain. 

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

You can pay to lease an unused domain name for a specific period of time. Before the lease expires, you have the right to extend the lease for an additional amount of time. The cost to buy the domain varies from something like $3 to $200 a year. Buying, or sub-leasing, an existing domain name from a private party can be very expensive, and so you are better off buying something obscure. This is one reason why companies have such strange names these days.

## Amazon Web Services - Route 53
Referring to a web server by its IP address, is fine for development, but it is not going to work for most users. Additionally, you want to create a secure (HTTPS) connection to your application, and that is not possible with just an IP address. Instead you want to use a domain name to represent your web application. That way you can make it easy to remember and also secure. In order for you to do this you need to buy a domain name, and then create DNS records with a DNS (Domain Name System) server. 

Route 53 is the AWS service that handles everything DNS related. With Route 53 you can buy a domain name, host your domain on their DNS servers, and create DNS records.

Now that you own a domain name you can use it to create DNS records that will map domain names to IP addresses (A records) or other domain names (CNAME records). For the purposes of this class, you want your root domain name, and any subdomain of your root domain, to map to the IP address of the web server you created previously.

## Caddy
Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy).

For this course, we use Caddy for the following reasons.

-Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS.
-Caddy serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files.
-Caddy acts as a gateway for subdomain requests to your Simon and startup application services.

Caddy is preinstalled and configured on your server and so you do not need to do anything specifically with it other than configure your root domain name.

### HTTPS, TLS, and web certificates
To this point you have been accessing your web server using HTTP. If you notice your browser has been yelling at you that your connection is ⚠ Not Secure from the location bar.

During the first couple decades of the web, it was pretty common for websites to simply use HTTP (non-secure hypertext transport protocol) since it was difficult, non-performant, and expensive to secure the connection. Additionally, most websites just provided access to documents and so it didn't need to protect user's information. That all changed when computers got faster and the web moved from simple document servers (Web 1.0) to full on web applications (Web 2.0) that accepted information from users and displayed that information within the application. Without a secure connection anyone that had access to the network traffic, at any point, from the user's computer to the server handling the request could easily capture all the data sent in either direction. Remember when we used the console program traceroute to show you how many computers your connection goes through. You definitely do not want those computers to have access to your user's sensitive information.

**The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol.** TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data. You can see the actual negotiation that happens by using the console browser based application curl, along with the -v parameter to see the verbose output of the HTTPS exchange. The > /dev/null redirection throws away the actual HTTP response, since we only care about the negotiation, by redirecting the output to the null device.

#### Web certificates
Web certificates are generated by a trusted 3rd party using public/private key encryption. The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate. Once you have a certificate for your domain name, you can serve the certificate from your web server and then the browser can validate the certificate by using the public keys of the certificate issuer.

Two Mozilla employees created a non-profit called **Let's Encrypt** with the goal of creating trusted web certificates for free. This effectively broke the monopoly that the trusted web certificate issuers had on the industry. Now using a service like Let's Encrypt, and the IETF standard ACME protocol that they pioneered, anyone who owns a domain name, can dynamically generate and renew a certificate for free. This incredible contribution of critical web technology has made the web safer, and more reliable, for everyone. Caddy uses Let's Encrypt to generate a web certificate every time an HTTPS request is made for a domain name that Caddy doesn't have a web certificate for.

Modern browsers now expect web servers to exclusively use HTTPS for all communication. In fact, the next version of HTTP (v3) only supports secure connections. For this reason, you should always support HTTPS for any web application that you build. 

For our work we are using the web service Caddy to act as a gateway to our different services and to host our static web application files. Caddy has ACME support built into it by default, and so all you need to do is configure Caddy with the domain name for your web server.

## HTML Structure
Remember that when putting in an image, it has to be a valid file, so the URL link must end in .jpg, .jpeg, .png, .gif. You can get this URL from an image on a website by right-clicking and going to copy the image address.

Depending on what kind of header you want the sizes are determined by h1, h2, etc. To create a hyperlink put <a href="url link" </a> The three main parts of a website are its header, main, and footer, all within body. 

# Section 6-CSS
## CSS Introduction
With CSS a web programmer can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation. Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.
There are three ways that you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.

Example: <p style="color:green">CSS</p>

The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.
Example:
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>

The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document.

Example:
<link rel="stylesheet" href="styles.css" />
styles.css
p {
  color: green;
}

All of the above examples are equivalent, but using the link element usually is the preferred way to define CSS.

## CSS Selectors
By selecting the body element we will cascade our declaration down to all the children of the body, which is the whole document. Note could also use the wildcard element name selector (*) to select all elements, but for our needs the body element will work just fine.

#### Combinators
Next we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all h2 elements that are descendants of section elements.

#### Class Selectors
The next selector we will use is the class selector. Remember that any element can have zero or more classifications applied to it. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (.summary). You can also combine the element name and class selectors to select all paragraphs with a class of summary.

p.summary {
  font-weight: bold;
}
#### ID Selectors
ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (#). 

#### Attribute Selectors
Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (a[href]). You can also specify a required value for an attribute (a[href="./fish.png"]) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (`p[href*="https://"]).

#### Pseudo Selectors
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

section:hover {
  border-left: solid 1em purple;
}
## CSS Declarations
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

## CSS Fonts
In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the `@font-face` rule and provide the font name and source location.

```css
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

If you do not want to host font files on your server, then you can load them from a font provider. For example, Google provides a large selection of [open source fonts](https://fonts.google.com/) that you can use without paying any royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatically generate the CSS for importing the font.

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
## CSS Responsive Design
When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the `head` element of all your HTML pages. This tells the browser to not scale the page.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it. For example, if we had an `aside` element followed by a large paragraph of text, we could create the following CSS rule in order to cause the text to wrap around the aside.

```css
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

#### Media Queries
One of the main CSS features for creating responsive applications is the `@media` selector. This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

We can use the `@media` selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.

```css
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```
You can also use media queries to make entire pieces of your application disappear, or move to a different location. For example, if we had an aside that was helpful when the screen is wide, but took up too much room when the screen got narrow, we could use the following media query to make it disappear.

```css
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

## CSS Grid
We turn this into a responsive grid by including a CSS `display` property with the value of `grid` on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow. The `grid-template-columns` property specifies the layout of the grid columns. We set this to repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (`1fr`) of the parents total width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts. Next, we fix the height of the rows to be exactly 300 pixels by specifying the `gird-auto-rows` property. Finally, we finish off the grid configuration by setting the `grid-gap` property to have a gap of at least 1 em between each grid item.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
