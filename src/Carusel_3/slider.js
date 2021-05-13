import {Component} from 'react';

import './slide.css';

class Slider extends Component {
  state = {
       count: 0, 
       images: [
                 {
                      id: 1,
                      url: "https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg",
                  },
                  {
                      id: 2,
                      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752",
                  },
                  {
                      id: 3,
                      url: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
                  },
                  {
                      id: 4,
                      url: "https://www.terracestandard.com/wp-content/uploads/2020/04/21333414_web1_200420-CRM-earth-day-EARTHDAY_1.jpg",
                  },
                  {
                      id: 5,
                      url: "https://p0.pikist.com/photos/311/99/nature-earth-sustainability-leaf-caution-cycle-green-ecology-globe.jpg", 
                  },
                  { 
                      id: 6,
                      url: "https://static.timesofisrael.com/www/uploads/2021/04/iStock-615398376-e1618739729576.jpg",
                  },
               ]
      }

render() {
 return (
   <div className="wrapper">
     <div className="myImg" key={this.state.count}
          style={{backgroundImage: `url(${this.state.images[this.state.count].url})`}}>
         <div className="radio_inputs">   
           {this.state.images.map((img, i) => 
          <input type="radio" name="radioIpnuts" value={i} key={i} onClick={() => {
                                      this.setState({
                                        count: i,
                                      })
                                    }} checked={this.state.count === i} />             
             )
           }

        </div>
     </div>
   </div>
 )
}
}

export default Slider;

