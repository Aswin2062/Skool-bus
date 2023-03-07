import Head from 'next/head'
import Image from "next/image";
import mypic from "./Images/Traced.png";
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
          <div className="flex justify-evenly pt-[10px]	">
            <div className="flex justify-evenly	gap-x-12 pt-[4px]	">
              <Image
                src={mypic}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              <h1 className="Poppins font-[300]	">SkoolBus</h1>
            </div>
            <div className="flex gap-16	pt-[4px] ">
              <a href="#">About</a>
              <a href="#">Class</a>
              <a href="#">Libary</a>
              <a href="#">Courses</a>
              <a href="#">Teachers</a>
              <div className="flex gap-0.5 bg-[#fe4a6c] text-white	Poppins font-light rounded-3xl pr-[15px] pl-[15px] pt-[4px] pb-[4px]">
                <a href="#">Login/Register</a>
              </div>
            </div>
          </div>
          <div className="relative">
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
            <div className="bg-white absolute bottom-[15%] left-[58%] w-[35%] h-[70%] rounded-xl	">
              <label className="flex justify-center font-[300] text-[50px] pt-[10%]">
                <b>Welcome back</b>
              </label>
              <br></br>
              <div className=" pl-[20%]">
                <input
                  className="flex justify-center w-[75%]   pl-[10%]  bg-[#FFFFFF]		rounded-[10px]	border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]	"
                  type="text"
                  placeholder="Your email"
                  name="uname"
                  required
                ></input>
                <br></br>
                <input
                  className="flex justify-center w-[75%]   pl-[10%] bg-[#FFFFFF]	rounded-[10px]	border-solid	pr-[15px] pl-[15px] pt-[10px] pb-[10px]"
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
                <div className="flex  justify-center	 bg-[#12A35C] text-white w-[85%] Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[10px] pb-[10px]">
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
