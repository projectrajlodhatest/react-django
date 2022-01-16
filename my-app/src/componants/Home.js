import React, { Component } from 'react'
// import App from "../App";
import axios from 'axios';
import { Link ,NavLink} from "react-router-dom"

export default class Home  extends Component{
  state={
        data1:[],
      }
      componentDidMount(){
        axios.get("http://localhost:8000/api/userdetails")
          .then(res => {
            const data= res.data;
            let data1=data['user_data']
            this.setState({ data1 });
            console.log(this.state.data1)
            }
          )
      }
  render(){
    return(
      <div>
        <table class="table caption-top">
    <caption>List of users</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Email</th>
        <th scope ="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    {
      this.state.data1.map((current,index)=>(
        <tr>
            <th>{index+1}</th>
            <td>{current.name}</td>
            <td>{current.contact}</td>
            <td>{current.email}</td>
            <td>{current.address}</td>
            <td>
                <Link className="btn btn-outline-primary mr-2" to="user/edit">Edit</Link>
                <Link className='btn btn-danger mr-2' to="">Delete</Link>

            </td>

        </tr>
        
      ))
          }
    
    </tbody>
  </table>
      </div>
    )
  }
}


// export default class Home extends Component {

//   state = {
//     data1: [],
//   }


//   componentDidMount() {
//     axios.get("http://localhost:8000/api/shoping")
//       .then(res => {
//         const data = res.data;
//         let data1 = data['list_of_employee']
//         this.setState({ data1 });
//         console.log(this.state.data1,'jjjjjj')
//       }
//       )
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.data1.map((current) => {
//             return (
//               <div className="col-md-4">
//               <div className="cards">
//                 <div className="card">
//                   <img  src={current.image}/>
//                   <h2 className="name">{current.name}</h2>
//                   <small>{current.description}</small>
//                 </div>  
//               </div>
//               </div>
//             )

//           })
//         }
//       </div>

//     )
//   }

// }

