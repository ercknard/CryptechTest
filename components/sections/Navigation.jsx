// import Image from "next/image";

const Navigation= () => (

        <nav>
        <div className="index-navigation-main">
            <div className="width-class">
            <ul className="navigation-list">
                <li>
                <div className="nav-buttons">HOME</div>
                </li>
                <li>
                <div className="nav-buttons">SERVERS</div>
                </li>
                <li>
                <div className="nav-buttons">AGES</div>
                </li>
                <li>
                {/* {" "}
                <Image alt="Front Logo" className="index-logo" src="/assets/images/CryptechTest.png" width={680} height={79}/>{" "} */}
                <h1 className="CT-logo "> CT </h1>
                </li>
                <li>
                <div className="nav-buttons">SUPPORT</div>
                </li>
                <li>
                <div className="nav-buttons">ABOUT</div>
                </li>
                <li>
                <div className="nav-buttons">DONATE</div>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    
    );
      
    export default Navigation;