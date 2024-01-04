import { Inter } from 'next/font/google'
import Script from "next/script"
import './globals.css'



export const metadata = {
  title: 'BTQ Superstore - Quality Products at Affordable prices.',
  description: 'BTQ Superstore is the Best Supermarket to get the best quality household appliances, kitchen utensils, Baby care essentials, and many more at affordable prices. ',
  icons: {
    icon: [
      {
        url: '/favicon/android-chrome-192x192.png',
        href: '/favicon/android-chrome-192x192.png',
      },
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        {children}
      </body>
      <Script
        id="whatsapp-widget-script"
        strategy="afterInteractive" // Load after some hydration
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, u) {
w.gbwawc = {
url: u,
options: {
        waId: "+234 08101411444",
        siteName: "BTQ Superstore",
        siteTag: "Usually reply in 5 minutes",
        siteLogo: "https://i.ibb.co/W5LK2dg/BTQ-PP.jpg",
        widgetPosition: "RIGHT",
        triggerMessage: "",
        welcomeMessage: "Welcome to BTQ Superstore",
        brandColor: "#25D366",
        messageText: "What can we do for you?",
        replyOptions: ['','',''],
    },
};
var h = d.getElementsByTagName(s)[0],
j = d.createElement(s);
j.async = true;
j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
h.parentNode.insertBefore(j, h);
})(window, document, "script", "https://waw.gallabox.com");
          `
        }}
      />
    </html>
  )
}


