import React from 'react';
import './index.scss';
import ButtonOne from "./components/utils/button-one/ButtonOne";
import CucumberHeaderLogo from "./components/header/CucumberHeaderLogo";
import CucumberHeaderLinkContainer from "./components/header/CucumberHeaderLinkContainer";
import CucumberHeaderLink from "./components/header/CucumberHeaderLink";
import CucumberHeaderButton from "./components/header/CucumberHeaderButton";
import CucumberHeader from './components/header/CucumberHeader';
import CucumberHeroSlider from "./components/hero-slider/CucumberHeroSlider";
import CucumberHeaderWrapper from "./components/header/CucumberHeaderWrapper";
import CucumberFooter from "./components/footer/CucumberFooter";
import CucumberFooterSocial from './components/footer/CucumberFooterSocial';
import CucumberMainFooter from "./components/footer/CucumberMainFooter";

function CucumberApp() {
    const sliders = [
        {
            style:{
                background: "linear-gradient(36deg, rgb(238, 241, 253) 12%, rgb(240, 242, 254) 71%)"
            },
            title:'1 title',
            content:'this is content',
            button:{
                title:'1 button title',
                content:'this is button content'
            }
        },
        {
            style:{
                background: "linear-gradient(36deg, rgb(45, 77, 185) 12%, rgb(112, 119, 255) 71%)"
            },
            title:'2 title',
            content:'this is content',
            button:{
                title:'2 button title',
                content:'this is button content'
            }
        },
        {
            style:{
                background: "linear-gradient(36deg, rgb(209, 205, 199) 12%, rgb(237, 235, 232) 71%)"
            },
            title:'3 title',
            content:'this is content',
            button:{
                title:'3 button title',
                content:'this is button content'
            }
        },
        {
            style:{
                background:"rgb(55, 100, 246)"
            },
            title:'4 title',
            content:'this is content',
            button:{
                title:'4 button title',
                content:'this is button content'
            }
        },
        {
            style:{
                background:"rgb(20,246,28)"
            },
            title:'5 title',
            content:'this is content',
            button:{
                title:'5 button title',
                content:'this is button content'
            }
        }
    ];

    const socials = [
        {name:'twitter',link:'https://www.google.com.au'},
        {name:'facebook',link:'https://www.google.com.au'},
        {name:'github',link:'https://www.google.com.au'}
    ];

    return (
        <div className="">
            <CucumberHeaderWrapper></CucumberHeaderWrapper>
            <CucumberHeroSlider
                contents={sliders}
            ></CucumberHeroSlider>
            <CucumberFooter>
                <CucumberMainFooter>
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <a href="#" className={'cucumber-button-one d-block text-center'}>Contact Us</a>
                        </div>
                        <div className={'col-md-9'}>

                        </div>
                    </div>
                </CucumberMainFooter>
                <CucumberFooterSocial socials={socials}></CucumberFooterSocial>
            </CucumberFooter>
        </div>
    );
}

export default CucumberApp;
