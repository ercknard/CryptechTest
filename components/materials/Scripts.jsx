import Script from 'next/script';

export default function AllScripts() {
    return (

        <>
        <Script rel="preload" src="/assets/scripts/customloader.js" as="script" type="text/javascript"/>
        <Script rel="preload" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" as="script" type="text/javascript" />
        <Script rel="preload" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" as="script" type='module' />
        <Script rel="preload" src="/assets/scripts/AOS.js" as="script" type="text/javascript" />
        <Script rel="preload" src="/assets/scripts/npc.js" as="script" type="text/javascript" />
        <Script rel="preload" src="/assets/scripts/theme-modal.js" type="text/javascript" />
        {/* <Script src="/assets/scripts/typing.js" type="text/javascript" />
        <Script src="/assets/scripts/scroll.js" type="text/javascript" />
        <Script src="/assets/scripts/parallax.js" type="text/javascript" />
        <Script src="/assets/scripts/to-parallax.js" type="text/javascript" />
        <Script src="/assets/scripts/tab.js" type="text/javascript" />
        <Script src="/assets/scripts/themes.js" type="text/javascript" /> */}
        </>

    );   
        }