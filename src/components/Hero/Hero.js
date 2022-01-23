import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Grid } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Astro from "../../assets/astro.png";
import Collection from "../../assets/collection.png";
import Collection2 from "../../assets/collection2.png";
import Collection3 from "../../assets/collection3.png";
const Hero = () => {
    return (
        <div>
            <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2 ">

            <div className="hero_outer_container">
            
            <Grid container spacing={0}>
                <div className="hero_container">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: "left" }}>
                            <h1 className="hero_head">
                                <b>
                                    The Innovative
                                    <br />
                                    
                                    METACOPS & $MCOP
                                    <br />
                                     Built with Solana.
                                </b>
                            </h1>
                            <div className="hero_right_col">
                                <p className="hero_para">
                                    A Solana NFT DAO Project that creates
                                    <br />
                                    new blockchain technology for staking and breeding of NFT's to be evolved.
                                </p>
                                <div className="hero_buttons">
                                    <Link className="hero_btn1" to="/roadmap" activeStyle={{ fontWeight: "bold" }}>
                Explore
                </Link>
                                    <Link className="hero_btn2" to="/mint" activeStyle={{ fontWeight: "bold" }}>
                Mint Soon
                </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
        <div className="hero_right_col">
        <Grid item xs={12} sm={12} md={6} lg={6} >
                        <div className="hero_four_boxes_container" style={{ overflow: "hidden" }}>
                            <div className="right-hero-div ">
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img src={Astro} alt="hero" />
                                    <img src={Collection3} alt="hero" />
                                    <img
                                        src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2021/09/09/2802471-1141576147.jpg?itok=iBUxiaoP"
                                        alt="hero"
                                        />
                                    <img src={Collection2} alt="hero" />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "160px",
                                    }}
                                    >
                                    <img src={Collection3} alt="hero" />
                                    <img src={Collection} alt="hero" />
                                    <img src={Collection2} alt="hero" />
                                    <img
                                        src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2021/09/09/2802471-1141576147.jpg?itok=iBUxiaoP"
                                        alt="hero"
                                        />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "80px",
                                    }}
                                    >
                                    <img src={Astro} alt="hero" />
                                    <img src={Collection2} alt="hero" />
                                    <img
                                        src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2021/09/09/2802471-1141576147.jpg?itok=iBUxiaoP"
                                        alt="hero"
                                        />
                                    <img src={Collection} alt="hero" />
                                </div>
                            </div>
                        </div>
                    </Grid>
        </div>
                </div>
            </Grid>
        </div>
        </div>
                                        </div>
    );
};

export default Hero;