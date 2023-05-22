
const WebTitle= () => (

    <>

    <h1 id="web_title"> Welcome to CryptechTest </h1>
    
    <svg>
        <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="100%">
                CRYPTECHTEST SMP SERVER
            </text>
        </symbol>
        <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy" />
            <use xlinkHref="#s-text" className="text-copy" />
            <use xlinkHref="#s-text" className="text-copy" />
            <use xlinkHref="#s-text" className="text-copy" />
            <use xlinkHref="#s-text" className="text-copy" />
        </g>
    </svg>

    <a
            className="a-button play-button"
            href="https://discord.com/invite/WxvrzzPFAH"
            target="_blank"
          >
            {" "}
            PLAY{" "} </a>



    </>
    
    );
      
    export default WebTitle;