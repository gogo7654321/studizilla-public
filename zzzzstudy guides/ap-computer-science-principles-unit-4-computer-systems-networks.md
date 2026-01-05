# AP Computer Science Principles Unit 4 Study Guide

:::GUIDE:::
unit::=Unit 4
title::=🖥️ Unit 4: Computer Systems and Networks Complete Guide
desc::=Master computing devices, systems, networks, Internet protocols, and cybersecurity fundamentals
diff::=Medium
time::=50 minutes
tags::=computer science principles, networks, Internet, protocols, cybersecurity
content::=

# 🖥️ Unit 4: Computer Systems and Networks

## � Internet and Networking History Timeline

:::TIMELINE:::
id::=networking-history-timeline
title::=The History of Computer Networks and the Internet
events::=[
  {"year": "1958", "event": "ARPA Created", "detail": "Advanced Research Projects Agency; will fund internet"},
  {"year": "1969", "event": "ARPANET First Message", "detail": "UCLA to Stanford; 'LO' sent (crashed before 'LOGIN')"},
  {"year": "1971", "event": "First Email Sent", "detail": "Ray Tomlinson; @ symbol for addresses"},
  {"year": "1973", "event": "TCP/IP Developed", "detail": "Vint Cerf, Bob Kahn; internet protocol suite"},
  {"year": "1983", "event": "ARPANET Adopts TCP/IP", "detail": "'Birth of the Internet'; universal protocol"},
  {"year": "1984", "event": "DNS Introduced", "detail": "Domain Name System; human-readable addresses"},
  {"year": "1988", "event": "Morris Worm", "detail": "First major internet worm; security concerns raised"},
  {"year": "1989", "event": "World Wide Web Proposed", "detail": "Tim Berners-Lee at CERN; HTTP, HTML"},
  {"year": "1991", "event": "WWW Goes Public", "detail": "First website; hypertext revolution"},
  {"year": "1993", "event": "Mosaic Browser", "detail": "Graphical web browsing; mass adoption begins"},
  {"year": "1995", "event": "Netscape IPO", "detail": "Browser Wars; commercial internet"},
  {"year": "1998", "event": "Google Founded", "detail": "Search engine; organizing the world's data"},
  {"year": "1999", "event": "WiFi Standard (802.11b)", "detail": "Wireless networking mainstream"},
  {"year": "2004", "event": "Facebook Launches", "detail": "Social networking; web 2.0"},
  {"year": "2007", "event": "iPhone Launch", "detail": "Mobile internet; always connected"},
  {"year": "2008", "event": "Cloud Computing Mainstream", "detail": "AWS, Azure; distributed computing"},
  {"year": "2010", "event": "LTE/4G Networks", "detail": "Fast mobile data; streaming possible"},
  {"year": "2016", "event": "Mirai Botnet Attack", "detail": "IoT devices weaponized; DDoS attack"},
  {"year": "2020", "event": "5G Rollout", "detail": "Faster speeds; IoT expansion; low latency"}
]
:::/TIMELINE:::

## 💻 Interactive Networking Code Examples

:::CODE:::
id::=ip-address-demo
title::=IP Address and Subnet Basics
language::=python
runnable::=true
code::=# IP Address and Networking Demo
# Understanding how computers identify each other

def ip_to_binary(ip_address):
    """Convert IP address to binary representation"""
    parts = ip_address.split('.')
    binary_parts = []
    for part in parts:
        binary = bin(int(part))[2:].zfill(8)
        binary_parts.append(binary)
    return '.'.join(binary_parts)

def is_private_ip(ip_address):
    """Check if IP is in private range"""
    parts = [int(p) for p in ip_address.split('.')]
    # 10.0.0.0 - 10.255.255.255
    if parts[0] == 10:
        return True
    # 172.16.0.0 - 172.31.255.255
    if parts[0] == 172 and 16 <= parts[1] <= 31:
        return True
    # 192.168.0.0 - 192.168.255.255
    if parts[0] == 192 and parts[1] == 168:
        return True
    return False

# Demonstrate IP addresses
print("=== IP Address Demo ===\n")

ips = ["192.168.1.1", "10.0.0.1", "8.8.8.8", "172.16.0.1"]

for ip in ips:
    print(f"IP Address: {ip}")
    print(f"  Binary: {ip_to_binary(ip)}")
    print(f"  Private: {is_private_ip(ip)}")
    print()

# Show subnet example
print("=== Subnet Example ===")
print("IP: 192.168.1.100")
print("Subnet Mask: 255.255.255.0")
print("Network: 192.168.1.0 (first 3 octets)")
print("Host: 100 (last octet)")
print("Devices on same network: 192.168.1.1 through 192.168.1.254")
expected_output::==== IP Address Demo ===

IP Address: 192.168.1.1
  Binary: 11000000.10101000.00000001.00000001
  Private: True

IP Address: 10.0.0.1
  Binary: 00001010.00000000.00000000.00000001
  Private: True

IP Address: 8.8.8.8
  Binary: 00001000.00001000.00001000.00001000
  Private: False

IP Address: 172.16.0.1
  Binary: 10101100.00010000.00000000.00000001
  Private: True

=== Subnet Example ===
IP: 192.168.1.100
Subnet Mask: 255.255.255.0
Network: 192.168.1.0 (first 3 octets)
Host: 100 (last octet)
Devices on same network: 192.168.1.1 through 192.168.1.254
:::/CODE:::

:::CODE:::
id::=http-simulation-demo
title::=HTTP Request/Response Simulation
language::=python
runnable::=true
code::=# HTTP Request/Response Simulation
# Demonstrates how web browsers communicate with servers

class HTTPRequest:
    def __init__(self, method, path, headers=None):
        self.method = method  # GET, POST, etc.
        self.path = path      # /index.html
        self.headers = headers or {}

    def __str__(self):
        lines = [f"{self.method} {self.path} HTTP/1.1"]
        for key, value in self.headers.items():
            lines.append(f"{key}: {value}")
        return '\n'.join(lines)

class HTTPResponse:
    def __init__(self, status_code, body, headers=None):
        self.status_code = status_code
        self.body = body
        self.headers = headers or {}
        self.status_messages = {
            200: "OK",
            404: "Not Found",
            500: "Internal Server Error"
        }

    def __str__(self):
        lines = [f"HTTP/1.1 {self.status_code} {self.status_messages.get(self.status_code, '')}"]
        for key, value in self.headers.items():
            lines.append(f"{key}: {value}")
        lines.append("")
        lines.append(self.body)
        return '\n'.join(lines)

# Simulate a web request
print("=== Simulating Web Request ===\n")

# 1. Browser creates request
request = HTTPRequest(
    "GET", 
    "/index.html",
    {"Host": "www.example.com", "User-Agent": "Mozilla/5.0"}
)
print("Browser sends REQUEST:")
print("-" * 40)
print(request)

# 2. Server processes and responds
print("\n")
print("Server sends RESPONSE:")
print("-" * 40)
response = HTTPResponse(
    200,
    "<html><body><h1>Hello World!</h1></body></html>",
    {"Content-Type": "text/html", "Content-Length": "47"}
)
print(response)

# 3. Show 404 example
print("\n")
print("If page doesn't exist (404):")
print("-" * 40)
response_404 = HTTPResponse(404, "Page not found")
print(response_404)
expected_output::==== Simulating Web Request ===

Browser sends REQUEST:
----------------------------------------
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0


Server sends RESPONSE:
----------------------------------------
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 47

<html><body><h1>Hello World!</h1></body></html>


If page doesn't exist (404):
----------------------------------------
HTTP/1.1 404 Not Found

Page not found
:::/CODE:::

## �📋 Unit Overview

Computers are connected! This unit covers computing devices, systems, networks, the Internet, protocols, and security. Understanding how computers communicate! 🌐

### Essential Questions

| Question | Focus |
|----------|-------|
| What are computing devices? | Hardware types |
| How do networks work? | Connections and protocols |
| What is the Internet? | Global network |
| What are protocols? | Communication rules |
| How to secure systems? | Cybersecurity basics |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Computing device** | Physical machine |
| **Network** | Connected devices |
| **Internet** | Network of networks |
| **Protocol** | Communication rules |
| **Bandwidth** | Data transmission rate |
| **Latency** | Delay in transmission |

---

## 💻 Computing Devices

### Types of Devices

| Device | Description |
|--------|-------------|
| **Computer** | Desktop, laptop |
| **Smartphone** | Mobile computer |
| **Tablet** | Touchscreen device |
| **Server** | Provides services |
| **IoT device** | Internet of Things |

### Components

| Component | Function |
|-----------|----------|
| **CPU** | Central Processing Unit (brain) |
| **RAM** | Random Access Memory (temporary) |
| **Storage** | Hard drive, SSD (permanent) |
| **Input** | Keyboard, mouse, touchscreen |
| **Output** | Monitor, speaker, printer |

---

## 🌐 Networks

### Definition

| Network | Two or more connected devices |
|---------|-------------------------------|

### Types of Networks

| Type | Description |
|------|-------------|
| **LAN** | Local Area Network (building) |
| **WAN** | Wide Area Network (large area) |
| **Internet** | Global network |

### Network Topology

| Topology | Description |
|----------|-------------|
| **Bus** | Single cable |
| **Star** | Central hub |
| **Mesh** | Multiple connections |
| **Ring** | Circular connection |

---

## 📡 Internet

### Definition

| Internet | Network of networks |
|----------|---------------------|

### How It Works

| Layer | Description |
|-------|-------------|
| **Physical** | Cables, routers |
| **Network** | IP addressing |
| **Transport** | TCP, UDP |
| **Application** | HTTP, email |

### Packet Switching

| Concept | Data broken into packets |
|---------|-------------------------|

| Step | Description |
|------|-------------|
| **1. Break** | Split data into packets |
| **2. Route** | Send via different paths |
| **3. Reassemble** | Put back together |

### Benefits of Packet Switching

| Benefit | Description |
|---------|-------------|
| **Reliable** | Redundant paths |
| **Efficient** | Shared resources |
| **Scalable** | Add more devices |

---

## 🔢 IP Addresses

### IPv4

| Format | 4 numbers (0-255) |
|--------|------------------|
| **Example** | 192.168.1.1 |
| **Size** | 32 bits |
| **Total** | ~4.3 billion addresses |

### IPv6

| Format | 8 groups of hex |
|--------|-----------------|
| **Example** | 2001:0db8:85a3::8a2e:0370:7334 |
| **Size** | 128 bits |
| **Total** | Huge number of addresses |

### Why IPv6?

| Reason | IPv4 addresses running out |
|--------|---------------------------|

---

## 📦 Protocols

### Definition

| Protocol | Set of rules for communication |
|----------|-------------------------------|

### Common Protocols

| Protocol | Purpose |
|----------|---------|
| **HTTP** | Web pages |
| **HTTPS** | Secure web pages |
| **SMTP** | Send email |
| **TCP** | Reliable data transfer |
| **IP** | Addressing and routing |
| **DNS** | Domain names to IP |

### HTTP vs. HTTPS

| HTTP | Not encrypted |
|------|---------------|
| **HTTPS** | **Encrypted (secure)** |

---

## 🌍 DNS (Domain Name System)

### Purpose

| DNS | Translate domain names to IP addresses |
|-----|---------------------------------------|

### Example

| Domain | IP Address |
|--------|------------|
| google.com | 142.250.80.46 |
| example.com | 93.184.216.34 |

### How It Works

| Step | Process |
|------|---------|
| **1. Request** | Enter URL |
| **2. DNS lookup** | Find IP address |
| **3. Connect** | Use IP to connect |
| **4. Load** | Display webpage |

---

## 📊 Bandwidth and Latency

### Bandwidth

| Definition | Amount of data per unit time |
|------------|------------------------------|
| **Units** | Mbps (megabits per second) |
| **Analogy** | Width of pipe |

### Latency

| Definition | Delay in transmission |
|------------|----------------------|
| **Units** | Milliseconds (ms) |
| **Analogy** | Length of pipe |

### Comparison

| Aspect | High Bandwidth | Low Latency |
|--------|----------------|-------------|
| **Good for** | Large files | Real-time (games, video calls) |

---

## 🔐 Cybersecurity

### Threats

| Threat | Description |
|--------|-------------|
| **Malware** | Malicious software |
| **Phishing** | Fake emails/websites |
| **DDoS** | Overwhelming server |
| **Man-in-the-middle** | Intercept communication |

### Protection Methods

| Method | Description |
|--------|-------------|
| **Encryption** | Scramble data |
| **Firewall** | Block unauthorized access |
| **Antivirus** | Detect malware |
| **Authentication** | Verify identity |
| **Updates** | Patch vulnerabilities |

---

## 🔑 Encryption

### Definition

| Encryption | Converting data to unreadable form |
|------------|-----------------------------------|

### Symmetric Encryption

| Type | Same key for encrypt and decrypt |
|------|----------------------------------|

### Asymmetric Encryption

| Type | Public key (encrypt) and private key (decrypt) |
|------|-----------------------------------------------|

### Public Key Cryptography

| Use | HTTPS, secure email |
|-----|---------------------|

| Key | Purpose |
|-----|---------|
| **Public** | Anyone can encrypt |
| **Private** | Only owner can decrypt |

---

## 🛡️ Authentication

### Password Best Practices

| Practice | Description |
|----------|-------------|
| **Long** | 12+ characters |
| **Complex** | Mix of characters |
| **Unique** | Different for each site |
| **Changed** | Periodically update |

### Multi-Factor Authentication (MFA)

| Factor | Example |
|--------|---------|
| **Something you know** | Password |
| **Something you have** | Phone, token |
| **Something you are** | Fingerprint, face |

---

## 🌐 World Wide Web (WWW)

### Web vs. Internet

| Internet | Infrastructure |
|----------|---------------|
| **Web** | **Service on Internet** |

### Components

| Component | Description |
|-----------|-------------|
| **Web browser** | View web pages |
| **Web server** | Stores web pages |
| **URL** | Web address |
| **HTML** | Web page structure |

---

## 📡 Routing

### Definition

| Routing | Finding path for data packets |
|---------|-------------------------------|

### Routers

| Function | Forward packets between networks |
|----------|----------------------------------|

### Redundancy

| Benefit | Multiple paths available |
|---------|-------------------------|
| **Fault tolerance** | If one fails, use another |

---

## 🌍 Scalability

### Definition

| Scalability | Ability to handle growth |
|-------------|-------------------------|

### Internet Scalability

| Feature | Impact |
|---------|--------|
| **Distributed** | No single control point |
| **Hierarchical** | DNS, routing |
| **Standards** | Open protocols |

---

## 📱 IoT (Internet of Things)

### Definition

| IoT | Everyday objects connected to Internet |
|-----|---------------------------------------|

### Examples

| Device | Function |
|--------|----------|
| **Smart home** | Lights, thermostat |
| **Wearables** | Fitness tracker, smartwatch |
| **Vehicles** | Connected cars |
| **Appliances** | Smart refrigerator |

### Concerns

| Concern | Description |
|---------|-------------|
| **Privacy** | Data collection |
| **Security** | Vulnerable devices |
| **Reliability** | Dependence on network |

---

## 🔄 Client-Server Model

### Definition

| Client | Requests service |
|--------|-----------------|
| **Server** | **Provides service** |

### Examples

| Client | Server |
|--------|--------|
| Web browser | Web server |
| Email app | Email server |
| Game | Game server |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Network** | Connected devices |
| **Internet** | Network of networks |
| **Protocol** | Communication rules |
| **IP address** | Device identifier |
| **DNS** | Domain name to IP |
| **Bandwidth** | Data rate |
| **Latency** | Delay |
| **Encryption** | Scramble data |
| **Firewall** | Block access |
| **Packet** | Data chunk |
| **Router** | Forwards packets |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Protocols** | Purpose and function |
| **Security** | Threats and protection |
| **Internet structure** | Packet switching, routing |
| **Encryption** | Public key vs. symmetric |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Packet switching** | Data broken into packets |
| **HTTPS** | Encrypted, secure |
| **DNS** | Domain to IP |
| **MFA** | Multiple authentication factors |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Internet = Web | Web is on Internet |
| IPv4 = IPv6 | Different formats |
| Bandwidth = speed | Actually capacity |

### Exam Tips

| Tip | Explanation |
|-----|-------------|
| **Know protocols** | HTTP, DNS, TCP/IP |
| **Security methods** | Encryption, firewall, MFA |
| **Internet benefits** | Fault tolerance, scalability |

---

## 🧩 Real-World Applications

### Online Shopping

| Step | Protocol |
|------|----------|
| Browse | HTTP/HTTPS |
| Domain | DNS |
| Checkout | HTTPS (encrypted) |
| Email confirmation | SMTP |

### Video Streaming

| Consideration | Impact |
|---------------|--------|
| **Bandwidth** | Quality of video |
| **Latency** | Buffering |
| **Routing** | Deliver packets |

---

## 🌐 Digital Divide

### Definition

| Digital divide | Unequal access to technology |
|----------------|------------------------------|

### Factors

| Factor | Impact |
|--------|--------|
| **Economic** | Cost of devices, Internet |
| **Geographic** | Rural vs. urban |
| **Education** | Digital literacy |

### Importance

| Impact | Education, employment, information |
|--------|-----------------------------------|

---

## 🔒 Privacy Concerns

### Data Collection

| Source | Data |
|--------|------|
| **Websites** | Browsing history |
| **Apps** | Location, contacts |
| **Social media** | Personal information |

### Protection

| Method | Description |
|--------|-------------|
| **Privacy settings** | Control sharing |
| **VPN** | Hide IP address |
| **Incognito mode** | Don't save history |

---

**Good luck on your AP Computer Science Principles exam! 🍀🖥️🌐**

Remember: The Internet is a network of networks using packet switching. Protocols like HTTP, DNS, and TCP/IP enable communication. HTTPS encrypts data for security. Use multi-factor authentication for better security. DNS translates domain names to IP addresses!
