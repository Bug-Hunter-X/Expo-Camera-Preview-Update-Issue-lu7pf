# Expo Camera Preview Update Issue

This repository demonstrates a bug in the Expo Camera API where the camera preview fails to update reliably when switching between cameras (front/rear) or adjusting camera settings. The preview often freezes, displaying a stale image instead of reflecting the current camera state.

## Bug Description

The issue is not signaled by a specific error message. Instead, the camera preview simply stops updating, displaying an image from a previous camera state. This leads to a visually broken user experience, as the user sees an outdated image while the camera's actual settings have changed.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `expo start` to start the Expo development server.
4. Open the app on your device or emulator.
5. Observe the camera preview as you switch between front and rear cameras using the provided button.
6. You will likely see the preview freeze on one camera state and fail to update correctly.

## Solution

See `bugSolution.js` for a possible solution involving using `onCameraReady` and forcing a re-render