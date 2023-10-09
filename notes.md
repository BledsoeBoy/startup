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
## CSS 
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

