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

### Install ssl spinning library 

```bash
npm i react-native-ssl-pinning
```

## Request Snippet: Make `POST` Request
```typescript

import { fetch } from 'react-native-ssl-pinning'; // SSL Spinning Library

// POST request snippets
  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // your payload (passing parameters)
    const payLoad = {
      username: email,
      password,
    };

    try {
      // using fetch from ssl-spinning library
      const response = await fetch('https://yourdomain.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
        sslPinning: {
          certs: ['mycert'], // SSL certificate file
        },
      });

      const data = await response.json();
      if (data.code == 200) { // check your json response
        setIsLoading(false);
        navigation.navigate('Dashboard');
      } else {
        setIsLoading(false);
        Alert.alert('Error', 'Invalid Credentials.' || 'Login failed.');
      }
    } catch (error) {
      setIsLoading(false);
      console.log("login error:", error)
      Alert.alert('Error', 'Certification Expired.');
    }
  };

```
## Request Snippet: Make `GET` Request

```typescript

// GET request snippets
  const fetchShows = async () => {
    if (startDate > endDate) {
      setDateError('Start date must be less than or equal to end date.');
      return;
    }
    setDateError('');
    setLoading(true);
    try {
      const apiUrl = "https://yourdomain.com/";
      const response = await fetch(apiUrl, {
        method: 'GET',
        sslPinning: {
          certs: ['mycert'], // SSL certificate file
        },
      });
      const json = await response.json();

      setData(json?.data?.result);
    } catch (error) {
      console.error(error);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

```

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
