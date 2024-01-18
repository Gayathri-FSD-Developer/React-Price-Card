import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Hard copy data for process
let price_details = [ 
  { 
    about:'Free',
    month:'0',
    available: false,
    Features:[
      ['fa-solid fa-check','Single User'],
      ['fa-solid fa-check','50 GB storage'],
      ['fa-solid fa-check','Unlimited public projects'],
      ['fa-solid fa-check','Community access'],
      ['fa-solid fa-xmark','Unlimted private project'],
      ['fa-solid fa-xmark','Dedicated phone support'],
      ['fa-solid fa-xmark','Free sub domain'],
      ['fa-solid fa-xmark','Monthly status Report']
    ]
  },
  {
    about:'PLUS',
    month:'9',
    available: false,
    Features:[
      ['fa-solid fa-check','Single User'],
      ['fa-solid fa-check','50 GB storage'],
      ['fa-solid fa-check','Unlimited public projects'],
      ['fa-solid fa-check','Community access'],
      ['fa-solid fa-check','Unlimted private project'],
      ['fa-solid fa-check','Dedicated phone support'],
      ['fa-solid fa-check','Free sub domain'],
      ['fa-solid fa-xmark','Monthly status Report']
    ]
  },
  {
    about:'PRO',
    month:'49',
    available: true,
    Features:[
      ['fa-solid fa-check','Single User'],
      ['fa-solid fa-check','50 GB storage'],
      ['fa-solid fa-check','Unlimited public projects'],
      ['fa-solid fa-check','Community access'],
      ['fa-solid fa-check','Unlimted private project'],
      ['fa-solid fa-check','Dedicated phone support'],
      ['fa-solid fa-check','Free sub domain'],
      ['fa-solid fa-check','Monthly status Report']
    ]
  }
];
// Function to design the webpage with components
function App() {
  return (
    <div className="container">
    <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        {/* destructing the array and passes the each elements 
        Assuming price_details[0] looks like { currency: 'USD', amount: 50 }, 
        the <Card> component will receive the following props: 
        like this=> <Card currency="USD" amount={50}></Card>
          */}
      <Card {...price_details[0]}></Card></div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
      <Card {...price_details[1]}></Card></div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
      <Card {...price_details[2]}></Card></div>     
      </div>
    </div>
  );
}

export default App;
