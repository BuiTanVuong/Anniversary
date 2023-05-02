// chrome.runtime.onInstalled.addListener(({reason}) => {
//     if (reason === 'install') {
//       chrome.tabs.create({
//         url: "/src/index.html"
//       });
//     }
//   });

//   async function sendMessageToActiveTab(message) {
//     const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
//     const response = await chrome.tabs.sendMessage(tab.id, message);
//     // TODO: Do something with the response.
//   }