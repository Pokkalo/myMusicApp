// filepath: /C:/Users/OWNER/Desktop/myProject/myNewProject/reactNativeFrontend/musicApp/metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/global.css' })