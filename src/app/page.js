"use client";
import Image from "next/image";
import Link from "next/link";
import profilePic from "./images/me.jpg";
import java from "./images/java.webp";
import javascript from "./images/js.png"
import vscode from "./images/vs.png";
import mysql from "./images/mysql.png";
import nextjs from "./images/nextjs.png";
import php from "./images/php.png";
import laravel from "./images/laravel.png";
import tailwind from "./images/tailwind.png";
import Modal from "./components/Modal";

export default function Home() {
  const CircleProgress = ({source, prog, progColor}) => {
    const progress = prog; // Progress (0 - 100)
    const radius = 50; // Circle size
    const stroke = 10; // Stroke width
    const progressColor = progColor;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className="absolute"
        >
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke="#E5E7EB"
            strokeWidth={stroke}
            fill="transparent"
          />
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke={progressColor}
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
            transform={`rotate(-90 ${radius} ${radius})`} // Rotates to start from top
          />
        </svg>
        <div className={`absolute w-[50px] h-50px]`}>
          <Image
            src={source}
            alt="tech stack"
            objectFit="cover"
            className="rounded-[5px]"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* navigation */}
      <div className="flex flex-row px-6 py-8 justify-between items-center md:px-14">
        <div className="items-center">
          <a className="text-xl font-bold ">harvey.dev</a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="px-8">
            <Link href="#section1" className="">Home</Link>
          </div>
          <div className="px-8">
            <Link href="#section2" className="">About</Link>
          </div>
          <div className="px-8">
            <Link href="#section3" className="">Projects</Link>
          </div>
          <div className="px-8">
            <a className="">Contact</a>
          </div>
        </div>
        <div className="block w-[50px] h-[50px] sm:hidden">
            <Image
              src={profilePic}
              alt="Picture of the author"
              placeholder="blur"
              className="rounded-full"
            />
        </div>
      </div>
      {/* home */}
      <div id="section1" className="px-6 mt-10 md:px-20 sm:mt-4">
        <div className="flex flex-row">
          <div className="flex w-full flex-col justify-center pl-16 md:w-1/2">
            <span className=" text-2xl mb-4 animate-fade-in">[Hello]</span>
            <h1 className=" text-6xl mb-2">I'm Jan Harvey,</h1>
            <p className="">
              I am a dedicated software developer with a passion
              for crafting efficient and innovative solutions.
            </p>
          </div>
          <div className="hidden w-1/2 justify-center py-12 md:flex">
            <div className="flex w-[600px] h-[600px] relative justify-center items-center">
              <div className="w-[300px] h-[300px] border absolute bottom-[130px] right-[90px] z-0 xl:w-[500px] xl:h-[500px] xl:bottom-[10px] xl:right-[10px]"/>
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={300}
                height={300}
                placeholder="blur"
                className="z-10 xl:w-[500px] xl:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div id="section2" className="px-6 py-20 md:px-20">
        <div className="w-full">
          <h1 className="text-4xl mb-2 md:text-6xl">About Me</h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
              <p className="text-justify">
              Hi, I'm Jan Harvey Jimenez from the Philippines. I have a deep passion for working with a variety of technologies and thrive on taking on new challenges. Whether it's exploring new frameworks, solving complex problems, or building innovative solutions, I enjoy continuously learning and growing in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <h1 className=" text-xl mb-2 md:text-4xl">My Tech Stack</h1>
          <div className="flex flex-col mt-8 md:flex-row">
            <div className="flex flex-wrap justify-center sm:justify-start w-full md:w-3/4">
              <CircleProgress source={java} prog={75} progColor={"#e22c2d"}/>
              <CircleProgress source={javascript} prog={90} progColor={"#f7e01d"}/>
              <CircleProgress source={vscode} prog={70} progColor={"#0076b7"}/>
              <CircleProgress source={mysql} prog={80} progColor={"#428eb2"}/>
              <CircleProgress source={nextjs} prog={40} progColor={"#7D7D7D"}/>
              <CircleProgress source={php} prog={70} progColor={"#6182bb"}/>
              <CircleProgress source={laravel} prog={60} progColor={"#fe2d1f"}/>
              <CircleProgress source={tailwind} prog={35} progColor={"#39bcf9"}/>
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div id="section3" className="px-6 mt-10 md:px-20 sm:mt-4">
        <div className="w-full">
          <h1 className=" text-4xl mb-6 md:text-6xl">Projects</h1>
          <div className="project-card">
            <h3 className="">Mati Water District System</h3>
            <p className="">A web and mobile application for water billing. Employees can input customer usage, and the system generates a receipt bill calculated from previous usage.</p>
            <div className="button-group">
              <a href="#" className="button disabled">GitHub</a>
              <Modal title="Mati Water District System">
                <div className="project-details-section">
                    <p><strong>Overview:</strong></p>
                    <p>A web and mobile application for managing water billing, payments, and customer accounts for Mati Water District.</p>
                </div>
                <div className="project-details-section">
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Employees can input customer water usage directly in the app.</li>
                        <li>Automatic receipt and bill generation based on previous usage.</li>
                        <li>Customer account management with billing history.</li>
                    </ul>
                </div>
                <div className="project-details-section">
                    <p><strong>Technologies Used:</strong> Laravel, Ionic, MySQL</p>
                </div>
                <p><strong>My Role:</strong> Maintained the system and fixed bugs to improve reliability and performance.</p>
              </Modal>
            </div>
          </div>

          <div className="project-card">
            <h3>MediaoneTix</h3>
            <p>Online ticketing web app for the October Metal Mayhem concert held in Davao City. Part of the development team.</p>
            <div className="button-group">
              <a href="https://github.com/harbi98/ticketing-online" className="button">GitHub</a>
              <Modal title="MediaoneTix">
                <div className="project-details-section">
                    <p><strong>Overview:</strong></p>
                    <p>An online ticketing system developed for the October Metal Mayhem concert in Davao City.</p>
                </div>
                <div className="project-details-section">
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Online seat reservation and ticket purchasing.</li>
                        <li>QR code-based digital tickets.</li>
                        <li>Integration with PayMongo for secure payment processing.</li>
                        <li>Event organizer dashboard for tracking sales.</li>
                    </ul>
                </div>
                <div className="project-details-section">
                    <p><strong>Technologies Used:</strong> React Native, Laravel, Mapbox</p>
                </div>
                <p><strong>My Role:</strong> Mobile Developer - Developed and implemented core features for the app.</p>
              </Modal>
            </div>
          </div>

          <div className="project-card">
            <h3>Medtracker</h3>
            <p>A mobile app like Grab but focused on medicine delivery. Developed the mobile application.</p>
            <div className="button-group">
              <a href="https://github.com/harbi98/Medtracker" className="button">GitHub</a>
              <a href="https://play.google.com/store/apps/details?id=com.mediaone.MedTracker&pcampaignid=web_share" className="button">Play Store</a>
              <Modal title="Medtracker">
                <div className="project-details-section">
                    <p><strong>Overview:</strong></p>
                    <p>A mobile app similar to Grab but focused on medicine delivery.</p>
                </div>
                <div className="project-details-section">
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Users can search for nearby pharmacies and order medicines.</li>
                        <li>Real-time tracking of deliveries.</li>
                        <li>Prescription upload for controlled medications.</li>
                    </ul>
                </div>
                <div className="project-details-section">
                    <p><strong>Technologies Used:</strong> React Native, Laravel, Mapbox</p>
                </div>
                <p><strong>My Role:</strong> Mobile Developer - Developed and implemented core features for the app.</p>
              </Modal>
            </div>
          </div>

          <div className="project-card">
            <h3>DMFlow</h3>
            <p>Maintained and implemented new features for the Document Manager System used by Del Monte Fresh Produce.</p>
            <div className="button-group">
              <a href="#" className="button disabled">GitHub</a>
              <Modal title="DMFlow">
                <div className="project-details-section">
                    <p><strong>Overview:</strong></p>
                    <p>A Document Management System used by Del Monte Fresh Produce for efficient file tracking.</p>
                </div>
                <div className="project-details-section">
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Document version control and approval workflow.</li>
                        <li>Automated notifications for pending approvals.</li>
                        <li>Secure role-based access for users.</li>
                    </ul>
                </div>
                <div className="project-details-section">
                    <p><strong>Technologies Used:</strong> Java, Oracle SQL, Angular, LoopBack JS</p>
                </div>
                <p><strong>My Role:</strong> Maintained the system and implemented new features based on business needs.</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div id="section4" className="px-6 py-20 md:px-20">
        <div className="w-full">
          <h1 className="text-4xl mb-2 md:text-6xl">Contact</h1>
          <p>Feel free to reach out if you'd like to collaborate or discuss any projects!</p>
          <div className="flex flex-col">
            <div className="contact-details flex flex-col mt-8 md:flex-row">
                <div>
                    <h3 className="text-2xl">Email</h3>
                    <p><a href="mailto:jimenezjanharvey@gmail.com">jimenezjanharvey@gmail.com</a></p>
                </div>
                <div>
                    <h3 className="text-2xl">Phone</h3>
                    <p><a href="tel:+639667594716">+639667594716</a></p>
                </div>
                <div>
                    <h3 className="text-2xl">Social Media</h3>
                    <div className="social-media flex flex-col">
                      <a href="https://github.com/harbi98" target="_blank">GitHub</a>
                      <a href="https://www.linkedin.com/in/jan-harvey-jimenez-910150104/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            {/* <div className="contact-form">
              <input type="text" name="name" placeholder="Your Name"/>
              <input type="email" name="email" placeholder="Your Email"/>
              <textarea name="message" placeholder="Your Message" rows="5"></textarea>
              <button type="submit">Send Message</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
