# Project Plan

## Expected dependencies

- [Amazon Polly](https://aws.amazon.com/polly/)
- [MFRC522-python](https://github.com/mxgxw/MFRC522-python)
- [SPI-Py](https://github.com/lthiery/SPI-Py)
- [WiringPi](https://pypi.python.org/pypi/wiringpi/2.44.4)
- Various front-end dependencies (node, react, express etc...)

## Plan

### Step 1:

The first part of the plan is to get a basic version of the software deployed onto the raspberry pi. This should be easily deployable via git or ssh (preferably git) The first iteration of the software needs only to turn a relay on and off via the command line.

### Step 2:

Part two is to get Raveena to talk to an NFC reader and allow it to automatically turn the relay switch on when a card is detected 

### Step 3:

Part three requires the web interface. It will need to accept the RFID input as authentication.

### Step 4:

A screen will be connected to the Pi and once a card has authenticated with Raveena it will automatically turn on and display the console.

### Step 5
Amazon polly will be integrated and an array microphone connected to the Pi allowing authenticated users to control the relay switch with voice commands. I've not decided yet if I should add integrated speakers or connect to external wired/bluetooth speakers.

### Step 6:
Other third party services will be integrated with Raveena to allow control of devices such as Phillips Hue, Nest, Smartthings, Logitech Harmony and Wemo. IFTTT integration would be a nice to have here.

### Step 7:
A webcam will be attached to the pi and software added to turn the console into a security camera. Software will also be added to the interface to allow for video calls between other Raveena devices (and possibly the outside world).

### Step 8:

The prototype console will be installed into a room and a 2nd relay connection added to the room light switch (which the console will replace). At this point, a manual switch will be added to the device to allow non-authenticated users to turn on the lights and power sockets if required. (Note: This requires thought to ensure it isn't the way everyone ends up using the device).

### Step 9:

Build a 2nd console and attempt to get them to communicate with each other