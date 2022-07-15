# Configuration
This project runs on React Native using the Expo CLI for bundling. For reference, please click [here](https://reactnative.dev/docs/environment-setup)

To get the application running, you must have Node 14 LTS or higher installed. 

**Below are two ways that you are able to install Node LTS**

## Installation via Chocolatey

If you do not have chocolatey installed, run the following command on an administrative command prompt

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

*Note: Once you run the above command to install chocolatey, you may have to close and reopen an admin prompt*

Once you have this installed, to install Node on your computer run the following command below on an admin prompt

`choco install nodejs-lts`

## Installation via .msi

Click this link [here](https://nodejs.org/en/download/) for the node.js installation website and just follow the steps for your specific OS

# Set Up

To verify that Node installed correctly, in a command prompt type the following commands
```
node -v
npm -v
```

Now that you have node installed, you will have to download certain npm packages to have the application run. Below are the commands that are needed to install npm, the expo CLI, and yarn (the npm package manager that we use) globally on your computer

```
npm install -g npm
npm install -g expo-cli
npm install -g yarn
```

# Running the Project

Now that you have all the dependencies installed, all you have to do is install all of the npm packages that we use and run the expo-CLI tool on your laptop

To run this project, open your filesystem to the directory that you want to clone this project into and run...
```
git init
git clone https://github.com/PDuff234/Paper-Management-System
```

Once cloned, navigate into the project directory with a `cd Paper-Management-System`

When you are in the projects directory, run the following commands to install all npm packages used and run the project

```
yarn 
yarn start
```

# Setting up the Database

Sweet! If you followed everything up to this point, you should be able to run the app itself but none of the APIs. Here is how you set everything up to have a fully functional program


