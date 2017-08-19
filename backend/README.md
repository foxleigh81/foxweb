# Welcome to the backend

This is a python based smart home system

## Command lists

The smart home can be interacted with in 3 ways:

1. Voice control
1. Touch screen consoles
1. Via sensors

Voice control is the preferred way, a list of commands can be found in commands.json. **Please note:** The 'actions' which are listed are not currently working commands, nor do they follow a proper language syntax, they are pseudocode commands to help me work out how to plan the command structures.

## Manual mode

In the event that automatic control of a room fails, it will be possible to manually turn the lights and power sockets on via a rocker switch, however doing this will disable the console (including all voice commands) for that room until manual mode has been disabled.