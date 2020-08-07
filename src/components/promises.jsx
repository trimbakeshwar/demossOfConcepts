import React , { Component } from 'react'
export default class promisesCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            count1:0,
            count:0  
              }
    }
    Changename=(e)=>{
          this.setState({name:e.target.value})
         console.log("val",this.state)
         this.setState({count1:this.state.count1+1})
    }
    Changenum=(e)=>{
        this.setState({number:e.target.value})
       console.log("val",this.state)
       this.setState({count:this.state.count+1})
  }
    submit=(e)=>{
        var promise = new Promise( (resolve, reject) => {
            if((this.state.count === 10 ) && (this.state.count1 > 2  )){
                resolve("this number and name valid")
            }
            else{
                reject(Error("this is not valid"))
            }
        })
        promise.then( result => {
          console.log(result)
           }, function(error) {
            console.log(error)
           });
    }
    render() {
        return(
            <div style={{paddingTop:"100px"}}>
           <input lable="name" value={this.state.name} onChange={this.Changename}>
            
        </input>
        <br/> <br/>
         <input lable="number" value={this.state.number} onChange={this.Changenum}>
         
        </input>
        <br/> <br/>
        <button onClick={this.submit}>submit</button>
        </div>
 
        )
    }
}