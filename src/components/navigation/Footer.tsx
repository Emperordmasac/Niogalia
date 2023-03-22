import React from "react";

//--IMPORT ICONS
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { AiOutlineCopyright } from "react-icons/ai";
import { DiJqueryLogo } from "react-icons/di";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import Button from "../common/Button";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.footer_box_up}>
                    <div className={styles.footer_box_up_left}>
                        <div className={styles.footer_box_up_left_details}>
                            <h3>Stay in the loop</h3>
                            <p>
                                Join our mailing list to stay in the loop with
                                our newest products drops, and tips and tricks
                                for navigating the world of commerce.
                            </p>
                        </div>
                        <div className={styles.footer_box_up_left_form}>
                            <div
                                className={
                                    styles.footer_box_up_left_form_input_box
                                }
                            >
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                />
                            </div>
                            <div
                                className={
                                    styles.footer_box_up_left_form_button
                                }
                            >
                                <Button
                                    name="Sign up"
                                    style={styles.footer_button}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_box_up_right}>
                        <div className={styles.footer_box_up_right_social_box}>
                            <div
                                className={
                                    styles.footer_box_up_right_social_title
                                }
                            >
                                <h3>Join the community</h3>
                            </div>
                            <div className={styles.footer_social}>
                                <a href="#">
                                    <TiSocialFacebook className={styles.icon} />
                                </a>
                                <a href="#">
                                    <TiSocialLinkedin className={styles.icon} />
                                </a>
                                <a href="#">
                                    <TiSocialTwitter className={styles.icon} />
                                </a>
                                <a href="#">
                                    <TiSocialYoutube className={styles.icon} />
                                </a>
                                <a href="#">
                                    <TiSocialInstagram
                                        className={styles.icon}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_box_down}>
                    <div className={styles.footer_box_down_box}>
                        <div className={styles.footer_box_down_box_left}>
                            <div className={styles.logo}>
                                <DiJqueryLogo />
                            </div>
                            <div
                                className={
                                    styles.footer_box_down_box_left_details
                                }
                            >
                                <h3>Niogalia</h3>
                                <p>
                                    The world’s first and largest digital
                                    e-commerce for all things imaginable . Buy,
                                    sell, and discover exclusive items.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_box_copyright}>
                    <div className={styles.footer_box_copyright_left}>
                        <div className={styles.footer_box_copyright_left_date}>
                            <AiOutlineCopyright />
                            <span> 2023 Snow Inc.</span>
                        </div>
                    </div>
                    <div className={styles.footer_box_copyright_left}>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
