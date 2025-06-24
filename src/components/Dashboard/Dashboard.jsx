import React from "react";
import "./Dashboard.css";
import SunCloudy from "../../assets/sun-cloudy.png";
import Rain from "../../assets/rain.png";
import PartlySunny from "../../assets/partly-sunny.png";
import SunWindy from "../../assets/sun-windy.png";
import Compass from "../../assets/compass.png";
import Drops from "../../assets/drops.png";
import Ultraviolet from "../../assets/ultraviolet.png";

const Dashboard = () => {
  return (
    <section className='dashboard-section'>
      <div className='home'>
        <div className='feed-1'>
          <div className='feeds'>
            <img src={SunCloudy} alt='SunCloudy' />
            <div>
              <div>
                <span>Hanoi, VN</span>
                <span>Partly Cloudy</span>
              </div>
              <div>
                <span>
                  28<sup>o</sup>
                </span>
              </div>
            </div>
          </div>
          <div className='feed'>
            <div>
              <div>
                <img src={PartlySunny} alt='PartlySunny' />
                <span>
                  14<sup>o</sup>
                </span>
              </div>
              <div>
                <span>Wednesday</span>
                <span>Sun</span>
              </div>
            </div>
            <div>
              <div>
                <img src={SunWindy} alt='SunWindy' />
                <span>
                  16<sup>o</sup>
                </span>
              </div>
              <div>
                <span>Thursday</span>
                <span>Windy</span>
              </div>
            </div>
          </div>
        </div>
        <div className='highlights'>
          <h2>Today's Highlight</h2>
          <div className='all-highlights'>
            <div>
              <div>
                <img src={Compass} alt='Compass' />
                <div>
                  <span>Feel Like</span>
                  <span>Normal</span>
                </div>
              </div>
              <div>
                <span>
                  7<sup>o</sup>
                </span>
              </div>
            </div>
            <div>
              <div>
                <img src={SunCloudy} alt='SunCloudy' />
                <div>
                  <span>Cloudy</span>
                  <span>Heavy</span>
                </div>
              </div>
              <div>
                <span>
                  18<sup>o</sup>
                </span>
              </div>
            </div>
            <div>
              <div>
                <img src={Rain} alt='Rain' />
                <div>
                  <span>Rain</span>
                  <span>Normal</span>
                </div>
              </div>
              <div>
                <span>
                  2<sup>o</sup>
                </span>
              </div>
            </div>
            <div>
              <div>
                <img src={Drops} alt='Rain' />
                <div>
                  <span>Humidity</span>
                  <span>Heavy</span>
                </div>
              </div>
              <div>
                <span>
                  65<sup>o</sup>
                </span>
              </div>
            </div>
            <div>
              <div>
                <img src={Ultraviolet} alt='Ultraviolet' />
                <div>
                  <span>Ultraviolet</span>
                  <span>Heavy</span>
                </div>
              </div>
              <div>
                <span>
                  7<sup>o</sup>
                </span>
              </div>
            </div>
            <div>
              <div>
                <img src={PartlySunny} alt='PartlySunny' />
                <div>
                  <span>Cloudly</span>
                  <span>Normal</span>
                </div>
              </div>
              <div>
                <span>
                  26<sup>km/h</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cities'>
        <h2>Other Cities</h2>
        <div className='all-cities'>
          <div>
            <div>
              <img src={Rain} alt='Rain' />
              <div>
                <span>Quang Ninh</span>
                <span>Cloudy. High: 22 Low: 17</span>
              </div>
            </div>
            <div>
              <span>
                20<sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              <img src={SunCloudy} alt='SunCloudy' />
              <div>
                <span>Da Nang</span>
                <span>Cloudy. High: 29 Low: 23</span>
              </div>
            </div>
            <div>
              <span>
                26<sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              <img src={SunCloudy} alt='SunCloudy' />
              <div>
                <span>Binh Dinh</span>
                <span>Cloudy. High: 34 Low: 25</span>
              </div>
            </div>
            <div>
              <span>
                30<sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              <img src={SunCloudy} alt='SunCloudy' />
              <div>
                <span>Can Tho</span>
                <span>Cloudy. High: 32 Low: 24</span>
              </div>
            </div>
            <div>
              <span>
                27<sup>o</sup>
              </span>
            </div>
          </div>
          <button>
            <span>See more</span>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
