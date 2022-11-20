a. What is the main functionality of the browser?

The main function of the browser is to get the resources like text or images or other media from the url that is mentioned in the address bar. It allows the user to interact with the web pages and dynamic content like surveys, forms, etc.

b. High Level Components of a browser?
The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
The browser engine: marshals actions between the UI and the rendering engine.
The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
JavaScript interpreter. Used to parse and execute JavaScript code.
Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![Main Components of a Browser] (./PgPX6ZMyKSwF6kB8zIhB.avif) 

c. Rendering engine and its use.
This component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface.

d. Parsers (HTML, CSS, etc)
Once the browser receives the first chunk of data, it can begin parsing the information received. Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, which is used by the renderer to paint a page to the screen.

The DOM is the internal representation of the markup for the browser. The DOM is also exposed, and can be manipulated through various APIs in JavaScript.

Even if the request page's HTML is larger than the initial 14KB packet, the browser will begin parsing and attempting to render an experience based on the data it has. This is why it's important for web performance optimization to include everything the browser needs to start rendering a page, or at least a template of the page - the CSS and HTML needed for the first render — in the first 14 kilobytes. But before anything is rendered to the screen, the HTML, CSS, and JavaScript have to be parsed.

e. Script Processors
There are script processors based on languages like Javascript

f. Tree construction
To construct the render tree, the browser roughly does the following:

Starting at the root of the DOM tree, traverse each visible node.
Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.
Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.

For each visible node, find the appropriate matching CSSOM rules and apply them.

Emit visible nodes with content and their computed styles.
Order of script processing
Scripts The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched.

Speculative Parsing While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved.

Style Sheets Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing.

Layout and Painting
HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

The coordinate system is relative to the root frame. Top and left coordinates are used.

Layout is a recursive process. It begins at the root renderer, which corresponds to the element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

The painting order This order affects painting since the stacks are painted from back to front. The stacking order of a block renderer is:

background color
background image
border
children
outline
