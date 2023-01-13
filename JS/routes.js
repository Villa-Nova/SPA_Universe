export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName]= page;
  };
  
  eventWindow(event) {
    event = event || window.event
    event.preventDefault();
    
    window.history.pushState({}, "", event.target.href);
    this.handleRoutes();
  };
  
  handleRoutes() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.getElementById("app").innerHTML = html
    });
  };
};  