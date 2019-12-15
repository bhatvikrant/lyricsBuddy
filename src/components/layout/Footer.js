import React from "react";

const Footer = () => {
    return (
        <div className="bg-dark text-center sticky-bottom">
            <div className="row" style={{ width: "99%", marginTop: "20px" }}>
                <div className="col col-sm-3 p-0">
                    <a
                        href="https://www.instagram.com/code_with_vic/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-instagram"
                            style={{ padding: "30px", fontSize: "40px", color: "pink" }}
                        ></i>
                    </a>
                </div>

                <div className="col col-sm-3 p-0">
                    <a
                        href="https://www.youtube.com/channel/UCaNyCsgmDApwhFtZojS1Mhw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-youtube"
                            style={{ padding: "30px", fontSize: "40px", color: "red" }}
                        ></i>
                    </a>
                </div>

                <div className="col col-sm-3 p-0">
                    <a
                        href="https://www.linkedin.com/in/vikrant-bhat-2b6221189/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-linkedin"
                            style={{ padding: "30px", fontSize: "40px", color: "#3498db" }}
                        ></i>
                    </a>
                </div>

                <div className="col col-sm-3 p-0">
                    <a
                        href="https://github.com/bhatvikrant"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-github"
                            style={{ padding: "30px", fontSize: "40px", color: "lightgrey" }}
                        ></i>
                    </a>
                </div>
            </div>
            <br />
            <h6 className="m-0 " style={{ color: "#ecf0f1" }}>
                <a
                    href="https://vikrantbhat.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="m-0 " style={{ color: "white" }}>created by Vikrant Bhat 	&copy;</p>
                    <br />
                </a>
            </h6>
        </div>
    );
};

export default Footer;
