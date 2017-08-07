(function () {
  'use strict';

  /**
   * XHR wrapper
   *
   * @param {string} url
   * @param {Function} callback(json, error)
   */
  function fetch(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      if (xhr.status !== 200) {
        callback(null, xhr.status + ': ' + xhr.statusText);
      } else {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.send();
  }


  /**
   * Storage
   *
   * @returns {Object}
   * @constructor
   */
  function Storage() {
    var PREFIX = 'cdrpro-v4-';

    var supported = (function () {
      try {
        return 'localStorage' in window && window['localStorage'] !== null
      } catch (e) {
        return false
      }
    })();

    /**
     * Get value from localStorage
     * @param {string} key
     * @returns {string|null|undefined}
     */
    function read(key) {
      if (!supported) return;
      return localStorage.getItem(PREFIX + key);
    }

    /**
     * Save value to localStorage
     * @param {string} key
     * @param {string} value
     */
    function save(key, value) {
      if (!supported) return;
      localStorage.setItem(PREFIX + key, value);
    }

    return {
      read: read,
      save: save
    };
  }


  /**
   * NotificationManager
   *
   * @returns {Object}
   * @constructor
   */
  function NotificationManager() {
    var HIDE_DELAY = 5 * 1000; // 5s

    var HIDDEN_CLASS = 'notification__hidden';
    var LINK_CLASS = 'notification__link';
    var MANUAL_CLOSE_CLASS = 'js-manual-close';

    var wrapper = document.createElement('div');
    wrapper.className = 'notification__wrapper';
    document.body.appendChild(wrapper);

    function onClick(event) {
      var target = event.target;
      if (!target.classList.contains(MANUAL_CLOSE_CLASS)) return;

      event.preventDefault();
      event.stopPropagation();

      hide(target);
    }

    wrapper.addEventListener('click', onClick, true);

    /**
     * Show a new notification
     * @param {string} text
     * @param {Object} options
     * @param {string} link
     */
    function show(text, options, link) {
      if (options === undefined) options = {};
      var notification;

      if (!link) {
        notification = document.createElement('div');
      } else {
        notification = document.createElement('a');
        notification.setAttribute('href', link);
      }

      notification.className = ['notification', HIDDEN_CLASS].join('  ');
      notification.textContent = text;

      if (options.type) notification.classList.add('notification--' + options.type);

      if (!link && options.auto === false) {
        notification.classList.add(MANUAL_CLOSE_CLASS);
      } else if (!!link) {
        notification.classList.add(LINK_CLASS);
      }

      wrapper.appendChild(notification);

      setTimeout(function () {
        notification.classList.remove(HIDDEN_CLASS);

        if (options.auto !== false) {
          setTimeout(function () {
            hide(notification)
          }, options.delay || HIDE_DELAY);
        }
      }, 100);
    }

    /**
     * Hide specific notification
     * @param {Element} notification
     */
    function hide(notification) {
      notification.classList.add(HIDDEN_CLASS);

      setTimeout(function () {
        wrapper.removeChild(notification);
      }, 600);
    }

    return {
      show: show
    }
  }


  /**
   * Application
   *
   * @returns {Object}
   * @constructor
   */
  function App() {
    var language = document.documentElement.lang || 'ru';

    var storage = new Storage();
    var notificationManager = new NotificationManager();

    function showNotifications() {
      function func() {
        function onFetchResolve(notifications, error) {
          if (!Array.isArray(notifications) || error) {
            console.error(error);
            return false;
          }

          for (var i = 0, length = notifications.length; i < length; i++) {
            var notify = notifications[i];

            if (!notify.active) continue;
            if (storage.read(notify.key)) continue;

            if (notify.msg[language]) {
              notificationManager.show(notify.msg[language], {auto: false}, notify.link);
              storage.save(notify.key, true);
            }
          }
        }

        fetch('/assets/notifications.json', onFetchResolve);
      }

      setTimeout(func, 1000);
    }

    return {
      showNotifications: showNotifications
    };
  }


  /** Create and run the App */

  function onContentLoaded() {
    function run() {
      var app = new App();
      app.showNotifications();
    }

    setTimeout(run, 100);
  }

  if (document.readyState !== 'loading') {
    onContentLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', onContentLoaded, true);
  }

  console.log('Hey there! 😎 Wanna see the source code? \nIt\'s here https://github.com/cdrpro/cdrpro.github.io');

})();
