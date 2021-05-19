import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Matthew's portfolio template</title>
        <meta property="og:title" content="Matthew's portfolio template" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c0050666-759d-42bb-9f0a-11c95e7749a2/97f0a8b7-7528-47bb-9e4a-5ebe85d12417?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['navbar-container']}>
        <div className={styles.navbar}>
          <div className={styles['links-container']}>
            <div className={styles['navlink-container']}>
              <span className={` ${projectStyles.navbarLink} ${styles.link} `}>
                <span>Home</span>
              </span>
              <span className={styles.text01}>
                <span>______________</span>
                <br></br>
                <span>Intro</span>
              </span>
            </div>
            <div className={styles['navlink-container1']}>
              <span className={` ${projectStyles.navbarLink} ${styles.link1} `}>
                <span>About</span>
              </span>
              <span className={styles.text06}>
                <span>______________</span>
                <br></br>
                <span>Who am I?</span>
              </span>
            </div>
            <div className={styles['navlink-container2']}>
              <span className={` ${projectStyles.navbarLink} ${styles.link2} `}>
                <span>Portfolio</span>
              </span>
              <span className={styles.text11}>
                <span>______________</span>
                <br></br>
                <span>what I do?</span>
              </span>
            </div>
            <div className={styles['navlink-container3']}>
              <span className={styles.text15}>
                <span>Contact</span>
              </span>
              <span className={styles.text17}>
                <span>______________</span>
                <br></br>
                <span>Say hi!</span>
              </span>
            </div>
          </div>
          <div className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles.icon}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles['section-separator']}></div>
      <div className={styles['section-separator1']}></div>
      <div className={styles.container01}>
        <div className={styles.hero}>
          <div className={styles.container02}>
            <div className={styles['hero-text-container']}>
              <h1 id="hero" className={` ${projectStyles.heroText} ${styles.heading} `}>
                <span>
                  I
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  make
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>stuff</span>
              </h1>
            </div>
            <span className={styles.text24}>
              <span>Screens, prototypes and visuals</span>
              <br></br>
              <span>
                that grab your audience&apos;s full attention
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>to lead them to your products</span>
            </span>
          </div>
          <div className={styles.container03}></div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles['heading-container']}>
          <h2 className={` ${projectStyles.sectionHeading} ${styles.text30} `}>Deliverables</h2>
          <span className={` ${projectStyles.sectionText} ${styles.text31} `}>
            What do I bring to the table?
          </span>
        </div>
        <div className={styles['cards-container']}>
          <div className={styles.card}>
            <div className={styles['icon-container']}>
              <svg viewBox="0 0 865.7188571428571 1024" className={styles.icon02}>
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className={styles['content-container']}>
              <span className={` ${projectStyles.cardHeading} ${styles.heading1} `}>Mockups</span>
              <span className={` ${projectStyles.cardText} ${styles.text32} `}>
                <span>Designs, website layouts, user flow diagrams.</span>
                <br></br>
                <span>
                  Content that outlines the goal and its components for use in the final product
                </span>
              </span>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles['icon-container1']}>
              <svg viewBox="0 0 1024 1024" className={styles.icon04}>
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className={styles['content-container1']}>
              <span className={` ${projectStyles.cardHeading} ${styles.heading2} `}>Code</span>
              <span className={` ${projectStyles.cardText} ${styles.text36} `}>
                <span>any code generated on my side for the project,</span>
                <br></br>
                <span>
                  this includes, html, css, javascript and any other scripts or languages that may
                  be applied
                </span>
              </span>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles['icon-container2']}>
              <svg viewBox="0 0 1024 1024" className={styles.icon06}>
                <path d="M170 554v300h300v84h-300q-34 0-59-25t-25-59v-300h84zM854 854v-300h84v300q0 34-25 59t-59 25h-300v-84h300zM854 86q34 0 59 25t25 59v300h-84v-300h-300v-84h300zM726 362q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM426 554l128 158 86-114 128 170h-512zM170 170v300h-84v-300q0-34 25-59t59-25h300v84h-300z"></path>
              </svg>
            </div>
            <div className={styles['content-container2']}>
              <span className={` ${projectStyles.cardHeading} ${styles.heading3} `}>Visuals</span>
              <span className={` ${projectStyles.cardText} ${styles.text40} `}>
                <span>
                  Video or graphical content provided
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  by me for the sake of the project.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Mostly made in blender</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles['max-content-width-container']}>
          <div className={styles['heading-container1']}>
            <h1 className={` ${projectStyles.sectionHeading} ${styles.text46} `}>
              Professional experience
            </h1>
          </div>
          <div className={styles['content-container3']}>
            <div className={styles['about-1']}>
              <div className={styles.container04}>
                <svg viewBox="0 0 1024 1024" className={styles.icon08}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text47} `}>
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
              <div className={styles.container05}>
                <svg viewBox="0 0 1024 1024" className={styles.icon10}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text48} `}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles.container06}>
                <svg viewBox="0 0 1024 1024" className={styles.icon12}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text49} `}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className={styles['about-11']}>
              <div className={styles.container07}>
                <svg viewBox="0 0 1024 1024" className={styles.icon14}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text50} `}>
                  <span>Lorem ipsum dolor sit amet aulla quis sem at nibh elementum</span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className={styles.container08}>
                <svg viewBox="0 0 1024 1024" className={styles.icon16}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text54} `}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles.container09}>
                <svg viewBox="0 0 1024 1024" className={styles.icon18}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className={` ${projectStyles.cardText} ${styles.text55} `}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
          <button
            className={` ${projectStyles.anchor} ${projectStyles.thqButton} ${styles.button} `}
          >
            CHECK MY WORK
          </button>
        </div>
      </div>
      <div className={styles['section-separator2']}></div>
      <div className={styles['section-separator3']}></div>
      <div className={styles['section-separator4']}></div>
      <div className={styles.faqs}>
        <h2 className={` ${projectStyles.sectionHeading} ${styles.text56} `}>About me</h2>
        <div className={styles['content-container4']}>
          <div className={styles.faq}>
            <div className={styles['question-container']}>
              <span className={styles.question}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container']}>
              <span className={` ${projectStyles.cardText} ${styles.answer} `}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
                Nulla quis sem at nibh elementum imperdiet. Here you would give the answer. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum
                imperdiet.
              </span>
              <span className={projectStyles.cardText}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles['question-container1']}>
              <span className={styles.question1}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container1']}>
              <span className={` ${projectStyles.cardText} ${styles.answer2} `}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </span>
              <span className={projectStyles.cardText}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className={styles.faq2}>
            <div className={styles['question-container2']}>
              <span className={styles.question2}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container2']}>
              <span className={` ${projectStyles.cardText} ${styles.answer4} `}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </span>
              <span className={projectStyles.cardText}>
                Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator5']}></div>
      <div className={styles.subscribe}>
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6ed0c374-b143-44b7-9ae7-5666f9970cf8/08a75f8f-aa8d-41c8-a40e-5c3509fcea9b?org_if_sml=1"
          className={styles.image}
        />
        <div className={styles.container10}>
          <div className={styles['heading-container2']}>
            <h1 className={` ${projectStyles.sectionHeading} ${styles.text57} `}>
              Get our guide to crafting digital products
            </h1>
            <span className={` ${projectStyles.sectionText} ${styles.text58} `}>
              We will send you our monthly freebies on your email. We will not share your email
              address or use it for promotional goals.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className={` ${projectStyles.sectionText} ${projectStyles.thqTextInput} ${styles.textinput} `}
          />
          <button
            className={` ${projectStyles.anchor} ${projectStyles.thqButton} ${styles.button1} `}
          >
            SEND
          </button>
        </div>
      </div>
      <div className={styles['section-separator6']}></div>
      <div className={styles['footer-container']}>
        <div className={styles.footer}>
          <div className={styles['social-links']}>
            <svg viewBox="0 0 950.8571428571428 1024" className={styles.icon20}>
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles.icon22}>
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles.icon24}>
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className={styles['copyright-container']}>
            <svg viewBox="0 0 1024 1024" className={styles.icon26}>
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className={projectStyles.anchor}>Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
