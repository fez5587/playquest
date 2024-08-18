#Install Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
Import-Module $env:ChocolateyInstall\helpers\chocolateyProfile.psm1

mkdir C:\Users\%USERNAME%\AppData\Roaming\npm

# NOTE:
# Chocolatey is not a Node.js package manager.
# Please ensure it is already installed on your system.
# Follow official instructions at https://chocolatey.org/
# Chocolatey is not officially maintained by the Node.js project and might not support the v20.16.0 version of Node.js
# download and install Node.js
# download and install Node.js
choco install nodejs-lts --version="20.16.0" -y

# Clear npm cache
npm cache clean --force

#restart shell
refreshenv

# verifies the right Node.js version is in the environment
node -v # should print `20`

# verifies the right npm version is in the environment
npm -v # should print `10.8.1`

npm install express mongoose cors

#Create a new Next.js project
cd ../
npm install -g dashboard
npx create-next-app@latest dashboard --typescript --tailwind --eslint
cd dashboard
npx shadcn-ui@latest init
npm run dev