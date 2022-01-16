// function App() {
//   let [name,setName] = useState("raj");
//   let [roll,setRoll]= useState("101")
//   let handleClick =()=>{
//     setName("rajkumar")
//     setRoll("105")
//   }
//   return <React.Fragment>
//     <UserName/>
//     <h1>{name}</h1>
//     <h1>{roll}</h1>
//     <button type='button' onClick={handleClick}>Change</button>
//   </React.Fragment>
// }

// export default App;


// function App() {
//   let [count,setCount] = useState(0);
//   let [count1,setCount1]= useState(50)
//   let handleIncremant =()=>{
//     setCount(count+1)
    
//   }
//   let handleDecreant=()=>{
//       setCount1(count1-1)
//   }
//   useEffect(()=>{
//     console.log('use effect')
//   }, [count]);

//   return <React.Fragment>
//     <h1>Count Up:{count}</h1>
//     <button type='button' onClick={handleIncremant}>Incremant</button>
//     <h1>Count Down:{count1}</h1>
//     <button type='button' onClick={handleDecreant}>Decremant</button>

//   </React.Fragment>
// }

// export default App;




// export default class App extends Component{
//   render(){
//     let isReg=this.props.consumer;
//     if(isReg){
//       return <User/>
//     }
//     return <Guest/>
//   }
// }



// function App(){
//   return <h1 className="hello">Hello World</h1>;
// }

// export default App;


// function App(){
//   return <img src={process.env.PUBLIC_URL+"/image/2.png"}></img>
// }

// export default App;

// export default class App extends Component{
//   state={
//     value:"Rajkumar"
//   }
//   handleChange = e =>{
//       console.log(e.target.value)
//       this.setState({value:e.target.value})
//   }
//   render(){
//     return(
//       <div>
//         <form>
//           <h2>Controlled by react</h2>
//           <input type="text" defaultValue={this.state.value} onChange={this.handleChange}/>
//         </form>
//       </div>
//     )
//   }
// }


// export default class App extends Component{
//   state={
//     name:"",
//     password:"" 
//    };
//   handleChange= e =>{
//     this.setState({[e.target.name]:e.target.value});
//   }
//   handleSubmit= e =>{
//     console.log(e);
//     e.preventDefault();
//   }

//   render(){
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:<input name="name" type="" value={this.state.name} onChange={this.handleChange}/>
//           </label>
//           <br/>
//           <br/>
//           <label>
//             Password:< input type="" name="password" value={this.state.password} onChange={this.handleChange}/>
//           </label><br/><br/>
//           <input type="submit" value="Submit"></input>
//         </form>
//       </div>
//     )
//   }
// }

import axios from 'axios';
// export default class App  extends Component{

//   state={
//     data1:[],
//   }

  
//   componentDidMount(){
//     axios.get("http://localhost:8000/api/shoping")
//       .then(res => {
//         const data= res.data;
//         let data1=data['list_of_employee']
//         this.setState({ data1 });
//         console.log(this.state.data1)
//         }
//       )
//   }
//   render(){
//     return(
//       <div>
//             {
//               this.state.data1.map((current)=>{
//                   return(
//                     <div className=''>
//                      <ul>{current.name}</ul>
//                      <img src={current.image} width="100" height="50" />

//                     </div>
                  

//                   )
                
//               })
//             }
      
//         </div>

//         )
//   }

// }


// function App() {
//   const [product_name,setProduct] = useState("");
//   const [image,setImage] = useState("");
//   const [created_on,setDate]=useState("");
//   const [description,setDesc] = useState("");
//   function saveUser(){
//     console.log(product_name,image)
//     let data={product_name,image,created_on,description}
//     fetch("http://localhost:8000/api/shoping",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       console.log("Warning")
//     })
//   }
//   return (
//     <div>
//       <label>Enter your name:
//         <input type="text" value={product_name} onChange={(e)=>{setProduct(e.target.value)}} />
//       </label>
//       <br></br>
//       <label> image
//         <input type="file"  value={image} name="image" onChange={(e)=>{setImage(e.target.value)}} />
//       </label>
//       <br></br>
//       <label>Date 
//         <input type="date" value={created_on} name="date" onChange={(e)=>{setDate(e.target.value)}}/>
//       </label>
//       <br></br>
//       <label>Desc
//         <input type="text" value={description} name="description" onChange={(e)=>{setDesc(e.target.value)}}/>
//       </label><br></br>
//       <button type='submit' onClick={saveUser}>Submit</button>
//     </div>  
//   )
// }

// export default App;


// function App() {
//   const [name,setName] = useState("");
//   const [contact,setContact] = useState("");
//   const [email,setEmail]=useState("");
//   const [address,setAddress] = useState("");
//   function saveUser(){
//     console.log(name,contact)
//     let data={name,contact,email,address}
//     let res=fetch("http://localhost:8000/api/userdetails/",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       console.log(result['status'])
//       if (result['status']==200){
//         swal({
//           title: "Success!",
//           text: "UserDetail Added Sucessfully!",
//           icon: "success",
//         });
//       }
//     })
//   }
//   return (
//     <div>
//       <label>Enter your name:
//         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//       </label>
//       <br></br>
//       <label>Contact
//         <input type="text" value={contact} name="contact" onChange={(e)=>{setContact(e.target.value)}}/>
//       </label>
//       <br></br>
//       <label>Email
//         <input type="text" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
//       </label><br></br>
//       <label>Address
//         <input type="text" value={address} name="address" onChange={(e)=>{setAddress(e.target.value)}}/>
//       </label><br></br>
//       <button type='submit' onClick={saveUser}>Submit</button>
//     </div>  
//   )
// }

// export default App;

