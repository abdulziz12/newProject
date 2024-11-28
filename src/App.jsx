import React from 'react';
import './App.css'

import Rasm from "./link.png"


import Icon from "./icon-1.png"
import Icon_2 from "./icon-2.png"
import Icon_3 from "./icon-3.png"
import Icon_4 from "./icon-4.png"

import location from "./location.png"
import clock from "./clock.png"

import road from "./road.png"
import person from "./person.png"


import tru from "./true.png"
import fols from "./folse.png"

import {Fade, Roll} from "react-awesome-reveal";
const App = () => {
  return (
    <div className='font-sans   '>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </div>
      <Fade>

      <header>
        <div className="navbar">
          <div className="container ">
            <div className="orab-turuvchi  flex  bg-custom-img  inset-0 bg-black opacity-50%  h-[92px] justify-between" >
              <img className="img-one-in-header h-[30.16px] m-[auto]" src={Rasm} alt />


              <ul className='flex m-[auto]'>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Home </a>
                </li>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Travel </a>
                </li>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Pages </a>
                </li>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Shop </a>
                </li>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Blog </a>
                </li>
                <li>
                  <a className="header-in-a  mr-[50px] text-white text-[18px]" href="/">Contact Us </a>
                </li>
              </ul>
              <div className="iconlar flex m-[auto]">
                <img className='w-[34px] h-[34px] mr-[10px]' src={Icon} alt="" />
                <img className='w-[30px] h-[30px] mr-[10px]' src={Icon_2} alt="" />
                <img className='w-[30px] h-[30px] mr-[10px]' src={Icon_3} alt="" />
                <img className='w-[30px] h-[30px] mr-[10px]' src={Icon_4} alt="" />



              </div>
            </div>
          </div>
        </div>
      </header>

      </Fade>






      <div className="">

        <div className="bitta-kotta bg-[#EDF2F5] font-sans">

          <div className="div flex justify-evenly mt-[8px] mb-[8px]" >

            <img className='w-[500px] h-[308px]' src="https://madloba.info/media/images/Hacvali-03.2e16d0ba.fill-1366x768.format-webp.mwtmk.webp" alt="" />
            <img className='w-[500px] h-[308px]' src="https://swiftmedia.s3.amazonaws.com/mountain.swiftcom.com/images/sites/2/2022/07/22122947/ce1f365e-ccee-5f33-9cd2-29930d69b2d0-scaled.jpg" alt="" />
            <img className='w-[500px] h-[308px]' src="https://img.freepik.com/premium-photo/pair-skis-stuck-snow-ai-generated_47726-10940.jpg" alt="" />

          </div>

          <div className="katta-div font-poppins flex items-center justify-between max-w-screen-xl m-[auto] w-100% h-[160px]">



            <div className="div flex flex-col">
              <h1 className='text-[30px] '>Chiang Mai</h1>

              <div className="kichik1 flex">

                <img className='w-[40px] h-[20px] ' src={location} alt="" />
                <p className='text-gray-400'>thailand</p>
              </div>
            </div>


            <div className="div flex items-center flex-col">
              <p className='text-gray-400 ml-[55px]'>Duration</p>

              <div className="kichik2 flex items-center ">

                <img className='w-[30px] h-[30px] mr-[20px] -[30px]' src={clock} alt="" />
                <h1 className='text-[30px] '>1 Week</h1>
              </div>
            </div>




            <div className="div flex items-center flex-col">
              <p className='text-gray-400 ml-[55px]'>Dificultly</p>
              <div className="kichik3 flex items-center">

                <img className='w-[30px] h-[30px] mr-[20px] ' src={road} alt="" />
                <h1 className='text-[30px] '>Easy</h1>
              </div>
            </div>





            <div className="div flex items-center flex-col">
              <p className='text-gray-400 ml-[55px]'>Min Age</p>


              <div className="kichik4 flex items-center">

                <img className='w-[50px] h-[50px] mr-[20px]  ' src={person} alt="" />
                <h1 className='text-[30px] '>0</h1>
              </div>
            </div>










          </div>






























        </div>

        <div className=" flex justify-evenly mt-[40px]">

          <div className=" ">
            <div className="kota-yozuvlar w-[750px] mt-[50px]">


              <div className="ichidigi  ">

                <h1 className='text-[24px] fontt-sans'>Enjoy the Adventure</h1>
                <br />
                <p className='mb-[30px] font-sans'> Are you looking for an adventure of a lifetime? Join us on an unforgettable journey through some of the
                  world's most stunning landscapes and cultural destinations. Our expertly curated tours take you to
                  incredible destinations, from the rugged mountains of Patagonia to the vibrant cities of Asia. Our
                  itineraries are designed to immerse you in the local culture, with opportunities to meet locals, try new
                  foods, and learn about the history and traditions of each destination. Our experienced guides will lead
                  you through each destination, sharing their knowledge and passion for travel. We offer a range of
                  activities to suit every traveler, from hiking and kayaking to cultural tours and culinary experiences.
                  <br /><br />
                  Our accommodations are carefully selected for comfort and convenience, with options to suit every
                  budget. Whether you prefer luxurious hotels or cozy homestays, we have something for everyone. At
                  every step of the journey, we prioritize sustainability and responsible tourism. We work with local
                  communities to ensure that our tours have a positive impact on the environment and the people we
                  meet along the way. Join us on a journey of discovery and exploration, and discover the world's most
                  incredible destinations with us.</p>
              </div>
              <hr />

              <h1 className='text-[24px] font-sans mt-[30px] '>Included / Excluded</h1>
              <br />
              <p className='font-sans'>To help you plan your trip, we have put together a list of what's included and what's not included in your
                tour package. This will give you a clear understanding of what to expect and help you make any
                necessary arrangements before your journey begins.</p>



              <div className="1 flex mt-[40px]">



                <div className="ikkalasinibitta mr-[60px]">

                  <div className="sozlar flex items-center  mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Train tickets and Bus transportation</p>
                  </div>

                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Breakfast, lunch, and dinner.</p>
                  </div>

                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Accommodation at hotel</p>
                  </div>



                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Train tickets and Bus transportation</p>
                  </div>
                </div>






                <div className="2">
                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Professional tour guide</p>
                  </div>

                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={tru} alt="" />
                    <p className='text-[16px]'>Transfers between destinations</p>
                  </div>

                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={fols} alt="" />
                    <p className='text-[16px]'>Entrance fees to museums</p>
                  </div>

                  <div className="sozlar flex items-center mt-[7px]">
                    <img className='w-[14px] h-[14px] mr-[15px]' src={fols} alt="" />
                    <p className='text-[16px]'>Custom itinerary</p>
                  </div>
                </div>

              </div>



              <div>
                <hr className="hr-one mt-[30px] mb-[30px]" size={5} noshade />
                <div className="map">
                  <h1 className="map-one text-[30px] font-sans mb-[40px]">Tour Map</h1>
                  <p className="map-p mb-[30px]">This comprehensive map is designed to guide you through an exciting journey filled
                    with remarkable
                    destinations and captivating experiences.</p>
                  <div style={{ position: 'relative', overflow: 'hidden' }}><a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Tashkent</a><a href="https://yandex.com/maps/10335/tashkent/?ll=69.269725%2C41.307405&utm_medium=mapframe&utm_source=maps&z=16.09" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Yandex&nbsp;Maps: search for
                    places, transport, and routes</a><iframe src="https://yandex.com/map-widget/v1/?ll=69.269725%2C41.307405&z=16.09" width={842} height={445} frameBorder={1} allowFullScreen="true" style={{ position: 'relative' }} />
                  </div>
                </div>
              </div>





























              <div>

                <hr class="border-t-[2px] border-gray-300 mt-[60px] mb-[50px]" />

                <div class=" items-center">
                  <h1 className='text-[30px] font-sans'>Itinerary</h1>
                  <p class="mt-[20px] mb-[80px] text-[#6e6e6e] w-[842px]">
                    We have carefully planned out each day to give you the best possible experience.
                    From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement.
                    Join us as we take you on a journey through some of the most fascinating destinations in the world.
                  </p>
                </div>

                <div class="flex w-[842px] justify-between items-center mt-[30px]">
                  <div class="flex items-center">
                    <h1 class="text-[#FD661E] text-[20px] font-sans flex">Day 1</h1>
                    <h2 className='text-[20px] font-sans'>- Arrivel and Orientation</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right text-[20px]"></i>
                </div>

                <hr class="border-t-[2px] border-gray-300 mt-[30px]" />

                <div class="flex w-[842px] justify-between items-center mt-[30px]">
                  <div class="flex items-center">
                    <h1 class="text-[#FD661E] flex text-[20px] font-sans mr-[5px]">Day 2</h1>
                    <h2 className='text-[20px] font-sans'>- City Tour</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right text-[20px]"></i>
                </div>

                <hr class="border-t-[2px] border-gray-300 mt-[30px]" />

                <div class="flex w-[842px] justify-between items-center mt-[30px]">
                  <div class="flex items-center">
                    <h1 class="text-[#FD661E] flex text-[20px] font-sans mr-[5px]">Day 3</h1>
                    <h2 className='text-[20px] font-sans'>- Cooking class</h2>
                  </div>

                  <i class="fa-solid fa-chevron-right text-[20px]"></i>
                </div>

                <hr class="border-t-[2px] border-gray-300 mt-[30px]" />

                <div class="flex w-[842px] justify-between items-center mt-[30px]">
                  <div class="flex items-center">
                    <h1 class="text-[#FD661E] flex text-[20px] font-sans mr-[5px]">Day 4</h1>
                    <h2 className='text-[20px] font-sans'>- Nature Hike</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right text-[20px]"></i>
                </div>

                <hr class="border-t-[2px] border-gray-300 mt-[30px]" />

                <div class="flex w-[842px] justify-between items-center mt-[30px]">
                  <div class="flex items-center">
                    <h1 class="text-[#FD661E] flex text-[20px] font-sans mr-[5px]">Day 5</h1>
                    <h2 className='text-[20px] font-sans'>- Free day</h2>
                  </div>
                  <i class="fa-solid fa-chevron-right text-[20px]"></i>
                </div>

                <hr class="border-t-[2px] border-gray-300 mt-[30px]" />

                <div class="gallery mt-[30px]">
                  <h1 className='text-[30px] font-sans mt-[10px] mb-[20px]'>Gallery</h1>
                  <p class="text-[#6e6e6e] mb-[300px]">
                    Each image tells a unique story, inviting us into a world of emotion, beauty, and complexity.
                    Get ready to be moved, inspired, and challenged as we journey through this captivating collection of images.
                  </p>
                </div>

              </div>


            </div>
          </div>


          <div className="">
            <div className="max-w-sm  shadow-2xl p-[30px] rounded-2xl mt-">


              <div className="flex items-center mb-[20px] mt-[10px] justify-between">

                <div className="">
                  <p className='text-[#6e6e6e]'>price</p>
                  <h1 className='text-[22px]'>from</h1>

                </div>
                <div className="">
                  <h1 className='font-sans ml-[229px] text-[20px]'>$ 490</h1>
                </div>


                <hr className='border-t-[2px] border-gray-300 mt-[30px]' />



              </div>

              <div className="flex justify-between">
                <h1 className='mr-[20px]'>Booking From</h1>
                <h1>Enquiry From</h1>
              </div>

              <hr className='border-t-[2px] border-gray-300 mt-[30px]' />

              <h1 className='text-[20px] mb-[25px] mt-[15px]'>Date</h1>


              <hr className='border-t-[2px] border-gray-300 mt-[30px]' />







              <div className="flex justify-between items-center">

                <div className="">
                  <h1 className='text-[20px] mt-[10px] '>Adults</h1>
                  <p className='mb-[20px] text-[#6E6E6E]'>over 18 ( $ 490 )</p>
                </div>

                <p className='text-[20px]'>1</p>
              </div>


              <hr className='border-t-[2px] border-gray-300 mt-[20px]' />





              <div className="flex justify-between items-center">

                <div className="">
                  <h1 className='text-[20px] mt-[10px] '>Children</h1>
                  <p className='mb-[20px] text-[#6E6E6E]'>under 18 ( $ 200 )</p>
                </div>

                <p className='text-[20px]'>0</p>
              </div>


              <hr className='border-t-[2px] border-gray-300 mt-[20px]' />



              <h1 className='text-[20px] mt-[10px]'>Extra Services</h1>
              <p className='text-[#6E6E6E] mb-[20px]'>Add extra services on your reservation</p>




              <div className='p-[30px] '>
                <div className="input flex  text-[#6E6E6E]">
                  <input className='mr-[20px]' type="checkbox" />
                  <p>Health Insurance ( $ 220 )</p>
                </div>


                <div className="input-two flex  text-[#6E6E6E]">
                  <input className='mr-[20px]' type="checkbox" />
                  <p>Health Insurance ( $ 220 )</p>
                </div>

                <button className="but w-[384px] ml-[-60px] m-[auto] h-[51px] rounded-lg bg-[#FD661E] text-white mt-[30px] mb-[-5 0px]">BOOK NOW FOR $ 490</button>
              </div>








            </div>
          </div>

        </div>

      </div>




      <div>
        <h1 className="text-3xl font-bold text-center mb-8">Packages</h1>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-[413px] h-[275px] rounded-t-lg" src="https://vidcdn.123rf.com/450nwm/liudmyla79/liudmyla792204/liudmyla79220400182.jpg" alt />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-5">Athense</h2>
              <div className="flex items-center mb-6 mt-2">
                <i className="fa-solid fa-location-dot text-[#FD661E]" />
                <p className="ml-2 text-[#6e6e6e]">Greece</p>
              </div>
              <hr className="my-2" />
              <p className="text-gray-700 text-base mx-auto w-[341px] h-[72px] mt-5 mb-5">Immerse yourself in the history and culture of this ancient city as you explore the stunning Acropolis.</p>
              <hr className="my-2" />
              <div className="flex justify-between items-center mt-4 pb-4">
                <div>
                  <p className="text-sm text-[#6e6e6e]">From</p>
                  <h2 className="font-bold text-lg">$ 677</h2>
                </div>
                <button className="bg-[#FD661E] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-[110px] h-[44px]">Details</button>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-[413px] h-[275px] rounded-t-lg" src="https://snowbrains.com/wp-content/uploads/2021/04/NONHlcgSJDknymd-800x450-noPad.jpg" alt />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-5">Azure Coast</h2>
              <div className="flex items-center mb-6 mt-2">
                <i className="fa-solid fa-location-dot text-[#BA71DA]" />
                <p className="ml-2 text-[#6e6e6e]">France</p>
              </div>
              <hr className="my-2" />
              <p className="text-gray-700 text-base mx-auto w-[341px] h-[72px] mt-5 mb-5">Escape to the azure coast and discover a world of breathtaking beauty and tranquility of coastline.</p>
              <hr className="my-2" />
              <div className="flex justify-between items-center mt-4 pb-4">
                <div>
                  <p className="text-sm text-[#6e6e6e]">From</p>
                  <h2 className="font-bold text-lg">$ 400</h2>
                </div>
                <button className="bg-[#1E92FD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[110px] h-[44px]">Details</button>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-[413px] h-[275px] rounded-t-lg" src="https://www.trailsofindochina.com/wp-content/uploads/2018/04/Bangkok_header.jpg" alt />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-5">Bangkok</h2>
              <div className="flex items-center mb-6 mt-2">
                <i className="fa-solid fa-location-dot text-[#FD661E]" />
                <p className="ml-2 text-[#6e6e6e]">Thailand</p>
              </div>
              <hr className="my-2" />
              <p className="text-gray-700 text-base mx-auto w-[341px] h-[72px] mt-5 mb-5">Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.</p>
              <hr className="my-2" />
              <div className="flex justify-between items-center mt-4 pb-4">
                <div>
                  <p className="text-sm text-[#6e6e6e]">From</p>
                  <h2 className="font-bold text-lg">$ 1000</h2>
                </div>
                <button className="bg-[#FD661E] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-[110px] h-[44px]">Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white py-8 mt-10">
          <h1 className="text-center text-2xl mb-6">Travel beyond your imagination, with our Travel Agency!</h1>
          <div className="flex justify-around">
            <div>
              <h3 className="text-lg mb-2">Address</h3>
              <p>1080 Brickell Ave</p>
              <p>Miami-Florida</p>
              <p>U.S. of America</p>
              <div className="flex space-x-4 mt-4">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-youtube" />
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-2">Contact</h3>
              <button className="bg-[#1BBC9B] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 w-[200px]">info@travel.com</button>
              <h1>+ 01 483 593 284</h1>
            </div>
          </div>
        </div>
      </div>






  

    </div>
      


  );
}

export default App;
