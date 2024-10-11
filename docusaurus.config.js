const { themes } = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: 'Seacoast Builders',
	tagline:
		'Seacoast builders - The Best Custom Homes, Renovations & Additions for your Dream Home',
		url: 'https://spmsolutions.github.io', // The base URL for your GitHub Pages site
  baseUrl: '/seacoast/', // Base URL for your project. Should match your repository name.
  organizationName: 'spmsolutions', // Your GitHub organization name
	projectName: 'seacoast-builders',
	favicon: '/img/favicon.png',
	projectName: 'seacoast-builders',
	staticDirectories: ['static'],
	onBrokenLinks: 'warn',
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
				src: '/img/logo.jpg',
				height: 40
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
				{
					// to: '/gallery',
					// activeBasePath: 'gallery',
					label: 'Gallery',
					position: 'right',
					items: [
						{
							label: 'New Homes',
							to: '/new-homes',
							activeBasePath: 'gallery'
						},
						{
							label: 'Renovations & Additions',
							to: '/renovations',
						},
					],
				},
				{
					to: '/contact-us',
					activeBasePath: 'contact',
					label: 'Contact',
					position: 'right',
				},
				// {
				// 	href: 'tel:5082542804',
				// 	position: 'right',
				// 	label: '📞 508-254-2804',
				// 	style: { marginLeft: '12px' },
				// }
				
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
						// {
						// 	label: 'Twitter',
						// 	href: 'https://twitter.com/',
						// 	icon: 'twitter',
						// }
					],
				},
			],
			copyright: 'Built with ❤️ by SPMSolutions.',
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
		trailingSlash: false,
		metadata: [
      { name: 'description', content: 'A brief description of your site' },
      { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
			// Add Open Graph and Twitter card tags to improve how your site is displayed on social media:
			{ name: 'og:title', content: 'Your Site Title' },
      { name: 'og:description', content: 'A brief description of your site' },
      { name: 'og:image', content: 'https://your-site-url.com/img/logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Your Site Title' },
      { name: 'twitter:description', content: 'A brief description of your site' },
      { name: 'twitter:image', content: 'https://your-site-url.com/img/logo.png' },
			// Schema Markup: Implement structured data (schema.org) to help search engines understand your content 
			// better. You can add JSON-LD structured data within your site’s head tag
			{
        type: 'application/ld+json',
        content: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://your-site-url.com",
          "logo": "https://your-site-url.com/img/logo.png"
        }`,
      },
    ],
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
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
		'es-text-loader',
		// '@docusaurus/plugin-robots-txt',
		// [
    //   '@docusaurus/plugin-sitemap',
    //   {
    //     id: 'default',
    //     changefreq: 'weekly',
    //     priority: 0.5,
    //   },
    // ],
	],
	customFields: {
		keywords: [
			'construction',
			'custom homes',
			'renovations',
			'Home additions',
			'Seacoast builders',
			'Cape Cod builders',
			'Cape Cod construction',
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
