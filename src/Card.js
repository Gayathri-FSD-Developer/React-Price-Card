// Component created for card template reusability
export default function Card(props)
{
    return (
    <div className="card rounded-4 m-4">
    <div className="card-header mb-3">
        <span className="fw-bold opacity-25">{props.about}</span>
        <h1>${props.month}/month</h1>
    </div>
    <div className="card-body"> 
      {/* Instead the repetation of code can use Map method which returns the something for each element iteration*/}
        {
          props.Features.map((ele,index)=>(
          //  Using this steps to adopt the css/ bootstrap style of our card. Fadded effect with "X" cross icon
          //  Adds&concat the classname&icon by checks the mentioned values is there in array element using array includes method
            <p className={`card-text ${ele.includes('fa-solid fa-xmark')?'opacity':''}`}>
              <i className={ele[0]}></i> {ele[1]}
           </p>
          ))
        }
        {/* Fade the button by specific value check */}
      <div className="button d-flex justify-content-center">
      <a href="#" className={`btn btn-primary ${props.about!='PRO'?'opacity':''}`}>Button</a>
    </div>
    </div>
  </div>);
}