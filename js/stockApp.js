var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Stock App',
  // App id
  id: 'com.stockapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');