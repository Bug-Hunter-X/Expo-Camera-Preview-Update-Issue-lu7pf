```javascript
// bugSolution.js
import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const switchCamera = async () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
    setCameraReady(false); // Force re-render after switch
    //Added to force re-render and trigger camera update
    if (cameraRef.current) {
      await cameraRef.current.resumePreview();
    }
    setCameraReady(true);
  };

  if (!cameraReady) return null; //Avoid rendering before camera is ready

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} onCameraReady={() => setCameraReady(true)}>
        <Button title="Switch Camera" onPress={switchCamera} />
      </Camera>
    </View>
  );
};
export default App;
```