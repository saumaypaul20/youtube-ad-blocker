console.log("Service worker loaded.");

// Listen for the installation event
// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Service worker installed.");
  
//   // Create an alarm to wake up the service worker periodically
//   chrome.alarms.create('wakeUpAlarm', {
//     periodInMinutes: 1  // Adjust the period as needed
//   });
// });

// // Listen for the startup event
// chrome.runtime.onStartup.addListener(() => {
//   console.log("Service worker started up.");
// });

// // Handle the alarm event
// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === 'wakeUpAlarm') {
//     console.log("Wake up alarm triggered.");
//     // Perform any periodic tasks here
//   }
// });

// // Handle messages from content scripts or other parts of the extension
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Message received:", message);
//   if (message.type === 'keepAlive') {
//     // Perform any tasks needed to keep the service worker active
//     console.log("Keep-alive message received.");
//   }
// });
