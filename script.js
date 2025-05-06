//
//  script.js
//  timleaf.github.io
//
//  Created by Tim Le Flem on 06/05/2025.
//

async function setLanguage(lang) {
	const response = await fetch(`lang/${lang}.json`);
	const translations = await response.json();

	document.querySelectorAll('[data-i18n]').forEach(element => {
		const key = element.getAttribute('data-i18n');
		if (translations[key]) {
			element.textContent = translations[key];
		}
	});

	document.documentElement.lang = lang;
}

// load default language
window.addEventListener('DOMContentLoaded', () => { setLanguage('en'); });
