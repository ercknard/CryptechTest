import Script from 'next/script';

export default function AllScripts() {
    return (

        <>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript" />
        <Script rel="preload" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" as="icon" fetchpriority="high" type='module' />
        <Script src="/assets/scripts/AOS.js" type="text/javascript" />
        <Script src="/assets/scripts/NPC.js" type="text/javascript" />
        <Script src="/assets/scripts/loader.js" type="text/javascript" />
        {/* <Script src="/assets/scripts/typing.js" type="text/javascript" />
        <Script src="/assets/scripts/npc.js" type="text/javascript" />
        <Script src="/assets/scripts/scroll.js" type="text/javascript" />
        <Script src="/assets/scripts/parallax.js" type="text/javascript" />
        <Script src="/assets/scripts/to-parallax.js" type="text/javascript" />
        <Script src="/assets/scripts/tab.js" type="text/javascript" />
        <Script src="/assets/scripts/themes.js" type="text/javascript" />
        <Script src="/assets/scripts/theme-modal.js" type="text/javascript" /> */}
        </>

    );   
        }