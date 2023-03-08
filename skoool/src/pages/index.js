import Head from 'next/head'
import Image from "next/image";
import mypic from "./Images/Traced.png";
import wave from "./Images/Wave.svg";

import divImg from "./Images/Divider.svg"

import google from "./Images/google.svg";
import facebook from "./Images/facebook.svg";

import mainImg1 from "./Images/MainImg-1.png";

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SkoolBus</title>
      </Head>
      <main className={styles.main}>
        <div className="main">
          <div className="flex justify-evenly pt-[10px] ">
            <div className="flex justify-evenly gap-x-12 pt-[4px] ">
              <Image
                src={mypic}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              <h1 className="Poppins font-[300] ">SkoolBus</h1>
            </div>
            <div className="flex gap-16 pt-[4px] ">
              <a href="#">About</a>
              <a href="#">Class</a>
              <a href="#">Libary</a>
              <a href="#">Courses</a>
              <a href="#">Teachers</a>
              <div className="flex gap-0.5 bg-[#fe4a6c] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[15px] pt-[4px] pb-[4px]">
                <a href="#">Login/Register</a>
              </div>
            </div>
          </div>
          <div className="relative pt-[10px]">
            <Image
              src={mainImg1}
              alt="Picture of the author"
              width="350px"
              height="300px"
            />
            <div className="flex bottom-[42%] left-[4%]  absolute">
              <div>
                <div className="pl-[100px] pr-[50%]  ">
                  <h6 className="text-white text-[60px]">Changing learning</h6>
                  <h3 className="text-white text-[60px]">for the better</h3>
                </div>
                <div className="pl-[100px] pr-[53%]">
                  <h2 className="text-white text-[20px]">
                    Whether you want to learn or to share what you know, you’ve
                    come to the right place. As a global destination for online
                    learning, we connect people through knowledge.
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-white absolute bottom-[15%] left-[58%] w-[35%] h-[70%] rounded-xl  ">
              <label className="flex justify-center font-[300] text-[50px] pt-[10%]">
                <b>Welcome back</b>
              </label>
              <br></br>
              <div className=" pl-[20%]">
                <input
                  className="flex justify-center w-[75%]   pl-[10%]  bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                  type="text"
                  placeholder="Your email"
                  name="uname"
                  required
                ></input>
                <br></br>
                <input
                  className="flex justify-center w-[75%]   pl-[10%] bg-[#FFFFFF]  rounded-[10px]  border-solid  pr-[15px] pl-[15px] pt-[10px] pb-[10px]"
                  type="text"
                  placeholder="Your password"
                  name="uname"
                  required
                ></input>
              </div>
              <div className="pl-[20%] pt-[6%]">
                <h1 className="text-[#00AFFF]">Forgot password?</h1>
              </div>
              <div className="pl-[15%] pt-[10%]">
                <div className="flex  justify-center   bg-[#12A35C] text-white w-[85%] Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[10px] pb-[10px]">
                  <a href="#">Login</a>
                </div>
              </div>
              <div className="flex justify-center pt-[10px]">
                <div className="flex pt-[5px] pr-[5px]">
                  <Image
                    src={divImg}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                  />
                </div>

                <h2>or continue with</h2>
                <div className="flex pt-[5px] pl-[5px]">
                  <Image
                    src={divImg}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                  />
                </div>
              </div>
              <div>
                <div className="flex pl-[40%] pt-[20px]">
                  <Image
                    src={google}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                  />
                </div>
                <div className="flex pl-[53%] absolute bottom-[56px]">
                  <Image
                    src={facebook}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex justify-center pt-[10px] ">
                <h1>New to Skoolbus? </h1>
                <span className="text-[#FF4A6C] pl-[10px]"> Sign Up</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center text-[50px] pt-[8%] ">
                <h1>Trusted by over 500 great businesses</h1>
              </div>
              <div className="flex justify-center pt-[20px]">
                <p className="w-[50%] text-[grey] font-semibold  Inter font-extralight  pt-[10px]">
                  Startup Framework includes great form options for your startup
                  projects. Each component is coded for web which makes creating
                  a website quick and easy.
                </p>
              </div>
              <div>
                <div className="flex justify-between w-[90%] pl-[100px] pt-[70px]	">
                  {["AMD", "Facebook-2", "ATT", "Forbes"].map((pic) => {
                    return (
                      <div>
                        <img src={`/${pic}.svg`} width="200" heigth="300" />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-evenly  w-[80%] pl-[100px]	 pt-[30px]">
                  {["Attlasian", "Disney", "Ebay"].map((pic2) => {
                    return (
                      <div>
                        <img src={`/${pic2}.svg`} width="200" heigth="300" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Image
              className="flex absolute pt-[10%]"
              src={wave}
              alt="Picture of the author"
              width="350px"
              height="300px"
            />
            <div>
              <div className="pt-[5%]">
                <div className="flex absolute pt-[10%] pl-[10%] ">
                  <h1 className="text-[grey] font-[unset]">FOLLOW US</h1>
                </div>
                <div className="pt-[12%]">
                  <div className=" flex absolute gap-[40px] pt-[10px] pl-[9%]">
                    {[
                      "icon-facebook",
                      "icon-linkedin",
                      "icon-slack",
                      "icon-twitter",
                    ].map((icon) => {
                      return (
                        <div>
                          <img src={`/${icon}.svg`} width="60" heigth="30" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex absolute pt-[90px] pl-[10%] ">
                    <h1 className="text-[grey] font-[unset]"> Menu</h1>
                  </div>
                  <div>
                    <div className="flex-wrap	">
                      <div className=" flex flex-col absolute pl-[10%] pt-[10%]  ">
                        <a lassName="text-[#2D3436]" href="#">
                          About SkoolBus
                        </a>
                        <br></br>
                        <a lassName="text-[#2D3436]" href="#">
                          {" "}
                          Classes
                        </a>
                        <br></br>
                        <a lassName="text-[#2D3436]" href="#">
                          {" "}
                          Library
                        </a>
                        <br></br>
                        <a lassName="text-[#2D3436]" href="#">
                          {" "}
                          Courses
                        </a>
                        <br></br>
                        <a lassName="text-[#2D3436]" href="#">
                          {" "}
                          Teachers
                        </a>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-[10%] pl-[25%] absolute ">
                    <a lassName="text-[#2D3436]" href="#">
                      {" "}
                      Privacy Policy
                    </a>
                    <br></br>
                    <a lassName="text-[#2D3436]" href="#">
                      {" "}
                      Terms of Service
                    </a>
                    <br></br>
                    <a lassName="text-[#2D3436]" href="#">
                      {" "}
                      Contact
                    </a>
                    <br></br>
                    <a lassName="text-[#2D3436]" href="#">
                      {" "}
                      FAQs
                    </a>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex absolute pl-[60%] text-[grey] font-[unset] ">
              <h1>Email us</h1>
            </div>
            <div>
              <span className="text-[#FF4A6C] flex absolute pl-[60%] pt-[40px] text-[40px] font-bold		">
                info@skoolbus.com
              </span>
            </div>
            <div>
              <h1 className="flex absolute pl-[60%] pt-[130px] text-[grey] font-[unset]">
                keep in touch
              </h1>
            </div>
            <div className="flex pl-[60%] pt-[13%] w-[10%]">
              <input
                className="flex justify-center  absolute   bg-[#FFFFFF] pr-[15px] pl-[15px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
                type="text"
                placeholder="Your name"
                name="uname"
              ></input>
            </div>
            <div className="flex pl-[75%]  w-[10%]">
              <input
                className="flex justify-center  absolute   bg-[#FFFFFF] pr-[15px] pl-[25px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
                type="text"
                placeholder="email"
                name="uname"
              ></input>
            </div>
            <div className="flex pl-[60%] pt-[70px]  ">
              <input
                className="flex justify-center  absolute  w-[20%] h-[60px] bg-[#FFFFFF] pr-[15px] pl-[25px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
                type="text"
                placeholder="Leave your message"
                name="uname"
              ></input>
            </div>
            <div className="pl-[82%]">
              <div className="flex gap-0.5 bg-[#fe4a6c] text-white absolute  Poppins font-light rounded-3xl pr-[35px] pl-[35px] pt-[18px] pb-[18px]">
                <a href="#">SEND</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

