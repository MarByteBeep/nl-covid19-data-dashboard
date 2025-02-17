(function () {
	/**
	 * Detect javascript
	 */
	try {
		window.document.documentElement.classList.remove('has-no-js');
	} catch (err) {
		/** */
	}

	/**
	 * load piwik
	 */
	window._paq = window._paq || [];
	window._paq.push(['setLinkTrackingTimer', 750]);
	window._paq.push(['trackPageView']);
	window._paq.push(['enableLinkTracking']);

	(function () {
		var u = '//statistiek.rijksoverheid.nl/piwik/';
		window._paq.push(['setTrackerUrl', u + 'piwik.php']);
		window._paq.push(['setSiteId', '7939']);
		var d = document,
			g = d.createElement('script'),
			s = d.getElementsByTagName('script')[0];
		g.type = 'text/javascript';
		g.async = true;
		g.defer = true;
		g.src = u + 'piwik.js';
		s.parentNode.insertBefore(g, s);
	})();
})();
