This repository belongs how you can add ssl certification spinning into your react native android / ios app.
# Getting Started

>**Note**: A React Native library for managing SSL certificate pinning and handling secure network requests. This ensures enhanced security by preventing man-in-the-middle (MITM) attacks. 
React Native app needs SSL Spinning for access the api/server which are having SSL certification.

## Step 1: Get your SSL Certification Key

First, you will need to go [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/') for getting your **ssl certification** key. Enter your domain in search and you will get a page like the below snippet.
Then click **Download Server Certificate**. You will get the downloaded certificate key file.

![Download SSL Certificate Key](https://github.com/Remonhasan/react-native-ssl-certificate-spinning/blob/main/ssl-certificate-spinning.png)

## Step 2: Add Certificate in your application

Go to Folder `android` -> `app` -> `src` -> `main`. Make a folder inside `main` folder by name `assets`. The make a file by name `mycert.cer`. And copy your certificate key form the downloaded file and paste it into `mycert.cer` file. **Note: just copy full context and paste** .
![Folder Structure](https://github.com/Remonhasan/react-native-ssl-certificate-spinning/blob/main/certification-folder.png)

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
