class app_sw {
  constructor() {
    this.swver = 'ud-rr-v1'
    this.reg_sw();
  }

  reg_sw () {
    console.log('in the reg_sw function');
    let swobj = this;
    if (!navigator.serviceWorker) return;
  
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      if (!navigator.serviceWorker.controller) {
        return;
      }
  
      if (reg.waiting) {
        swobj._sw_update(reg.waiting);
        return;
      }
  
      if (reg.installing) {
        swobj._wait_install(reg.installing);
        return;
      }
  
      reg.addEventListener('updatefound', function() {
        swobj._wait_install(reg.installing);
      });
    });

    // Ensure refresh is only called once. This works around a bug in "force update on reload".
    var refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  }

  _wait_install (swref) {
    let swobj = this;
    swref.addEventListener('statechange', function() {
      if (swref.state == 'installed') {
        swobj._sw_update(swref);
      }
    });
  }    
  
  _sw_update (swref) {
    console.log('place for sw update');
  }
}
