let recordedData = [];

self.onmessage = function(e) {
  if (e.data.type === 'record') {
    console.log('Recording data:', event.data.data);
    recordedData.push(e.data.data);
  } else if (e.data.type === 'download') {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(recordedData, null, 2));
    // eslint-disable-next-line no-restricted-globals
    self.postMessage(dataStr);
  }
};