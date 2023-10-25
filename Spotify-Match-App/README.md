# Spotify Match React Native App
Discover and connect with music enthusiasts using the Spotify Match React Native App!

## Getting Started
```bash
git clone https://github.com/cajowils/Spotify-Match.git
cd Spotify-Match/Spotify-Match-App
```

`npm install --force` and `yarn add` need to be used for the packages to get installed.
Its also reccomended to clear the cache. (recommended)

Individual packages installation-
`npm install` or `yarn add` or `npx expo install <indivisual package name>` 

Possibly other seperate installations that may need to be completed-
- `npx expo install jest-expo jest`
- `npx expo install expo-media-library@~15.0.`
- `npx expo install expo-auth-session@~3.8.0`

Note- After installing all the packages, there may be npm dependency issues or vulnerabilities warnings. The application should work regardless.

## Usage
### Running the app-
`npx expo start` or
`npx expo start --tunnel`

### Testing the app-
The unit tests are placed in the tests directory. 
To run them:
`npm run test`

### Clear cache and run the app-
`npx expo start --clear`
OR ADD "clean": "npx expo start --clear" to package.json scripts for cache clearing

## Navigation Sturcture-
- Stack.Navigator
 - - Spotify Login (Screen)
 - - Survey General (Screen)
 - - Survey Bio (Screen)
 - - Survey Advanced (Screen)
 - - Add Images (Screen)
 - - Home Page (Tab.Navigator and Screen)
  - - - - Percentage Breakdown (Pop up)
  - - - Matches (Screen)
   - - - - Socials (Screen)
  - - - Profile (Screen)

## Dependencies -

    rneui/base
    rneui/themed
    expo-font

    react-navigation/native
    react-native-community/masked-view
    react-navigation/stack
    react-navigation/bottom-tabs

    expo-status-bar
    expo-image-picker
    expo-media-library
    @react-native-community/datetimepicker
    react-native-dropdown-select-list
    react-native-keyboard-aware-scroll-view
    axios
    expo-splash-screen

    expo-linear-gradient
    react-native-gesture-handler
    react-native-safe-area-context
    react-native-screens

    react-native-dropdown-picker
    react-native-modal-datetime-picker
    react-hook-form

    react-native-reanimated
    react-native-cards-swipe
    react-native-gesture-handler
    buffer

    expo-auth-session
    
    (other packages mentioned in package.json)
