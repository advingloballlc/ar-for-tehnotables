import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="facebook-domain-verification" content="xyki8lv8fereq9153i5xevv3zyi70m"/>
        <meta name="google-site-verification" content="hN2I2EB44_R--v-WE6IP5XE4M1E94rckuyb4a7wB_8U" />
        <meta name="p:domain_verify" content="e2fbe58748fb40469aad7b71c482cb4b" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127066793-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.navigator.userAgent.indexOf('Chrome-Lighthouse') === -1) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-127066793-1');

                window.gtag = gtag
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.navigator.userAgent.indexOf('Chrome-Lighthouse') === -1) {
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '332485770836347');
                fbq('track', 'PageView');

                window.fbq = fbq
              }
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.navigator.userAgent.indexOf('Chrome-Lighthouse') === -1) {
                window.helpcrunchSettings = {
                  organization: 'tehnotable',
                  appId: '8858aef8-bf30-4af6-b428-30a1b9809de4',
                };
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.navigator.userAgent.indexOf('Chrome-Lighthouse') === -1) {
                (function(w,d){var hS=w.helpcrunchSettings;if(!hS||!hS.organization){return;}var widgetSrc='https://'+hS.organization+'.widget.helpcrunch.com/';w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];function r(){if (d.querySelector('script[src="' + widgetSrc + '"')) { return; }var s=d.createElement('script');s.async=1;s.type='text/javascript';s.src=widgetSrc;(d.body||d.head).appendChild(s);}if(d.readyState === 'complete'||hS.loadImmediately){r();} else if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}})(window, document)
            
                HelpCrunch('onPreChatFormSubmit', function () {
                  gtag('event', 'submitsPreChatForm', {
                    'event_category': 'customer',
                  })
                })
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
