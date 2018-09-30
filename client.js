// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('DCloud_VR', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  //r360.compositor.setBackground(r360.getAssetURL('asd.jpg'), '2D');

  //const player = r360.compositor.createVideoPlayer('myplayer');
  //player.setSource(r360.getAssetURL('iw.mp4'), '3D');
  //r360.compositor.setBackgroundVideo('myplayer');

  //const player = r360.compositor.createVideoPlayer('myplayer');
  //player.setSource(r360.getAssetURL('iw.mp4'), '2D');
}

window.React360 = {init};
