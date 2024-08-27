const { themes } = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: 'Seacoast Builders',
	tagline:
		'Custom Homes & Additions for your dream home',
		url: 'https://spmsolutions.github.io', // The base URL for your GitHub Pages site
  baseUrl: '/seacoast/', // Base URL for your project. Should match your repository name.
  organizationName: 'spmsolutions', // Your GitHub organization name
	projectName: 'seacoast-builders',
	favicon: '/img/favicon.png',
	projectName: 'seacoast-builders',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		},
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'Seacoast Builders Logo',
				src: '/img/logo.png',
			},
			items: [
				{
					to: '/',
					activeBasePath: 'home',
					label: 'Home',
					position: 'right',
				},
				{
					to: '/about-us',
					activeBasePath: 'about',
					label: 'About',
					position: 'right',
				},
				{
					to: '/services',
					activeBasePath: 'services',
					label: 'Services',
					position: 'right',
				},
				// {
				// 	to: '/playground/',
				// 	activeBasePath: 'playground',
				// 	label: 'Portfolio',
				// 	position: 'right',
				// },
				{
					to: '/contact-us',
					activeBasePath: 'contact',
					label: 'Contact',
					position: 'right',
				},
				{
					href: 'tel:5082542804',
					position: 'right',
					label: '📞 508-254-2804',
					style: { marginLeft: '12px' },
				}
				
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/',
							icon: 'twitter',
						}
					],
				},
			],
			copyright: 'Made with ❤️ by SPMSolutions.',
		},
		prism: {
			theme: darkTheme,
			additionalLanguages: ['php', 'scss', 'css'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			},
		},
		trailingSlash: false,
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@infinum/docusaurus-theme/dist/style.css'),
					],
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'ui-components',
				path: 'ui-components',
				routeBasePath: 'components',
				sidebarPath: require.resolve('./sidebars-components.js'),
			},
		],
		'es-text-loader',
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit',
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
