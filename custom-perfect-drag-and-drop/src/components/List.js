import React from 'react';
import './List.scss'

const placeholder = document.createElement("li");
placeholder.className = "placeholder";
placeholder.id="placeholder";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  dragStart(e) {

    //드래그 대상이 한개인 경우
    if(e.target.parentNode.childElementCount===1){
      return;
    }

    this.currentDragDirection = 'DRAG_DIRECTION_NONE';
    this.capiedTo=-1

    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);

  }

  dragEnd(e) {

    //드래그 대상이 한개인 경우
    if(e.target.parentNode.childElementCount===1){
      return;
    }

    if(this.dragged.parentNode.querySelector('#placeholder') !==null){
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);

      // update state
      const data = this.state.datas;
      const from = Number(this.dragged.dataset.id);
      const to = Number(this.over.dataset.id);
      const length = Number(this.over.parentNode.childElementCount);

      console.log("from", from);
      console.log("to", to);
      console.log("length", length);
      console.log(data);
  
      let nextDatas = undefined;
      if( from <= to){
        
        if(from ===0)
        {
          nextDatas = [ ...data.slice(from+1, to+1), data[from], ...data.slice(to+1)]
        }
        else{
          nextDatas = [ ...data.slice(0,from),...data.slice(from+1, to+1), data[from], ...data.slice(to+1)]
        }

      }
      else if(from > to){
        if(to ===0)
        {
          nextDatas = [ data[from], ...data.slice(1,to),...data.slice(to, from),...data.slice(from+1)]
        }
        else{
          nextDatas = [ ...data.slice(0,to), data[from],...data.slice(to, from), ...data.slice(from+1)]
        }
      }
      
      console.log(nextDatas);

      this.setState({
        datas:nextDatas
      })

    }

  }

  dragOver(e) {

    //드래그 대상이 한개인 경우
    if(e.target.parentNode.childElementCount===1){
      return;
    }

    e.preventDefault();
    this.dragged.style.display = "none";
    this.over = e.target;

    const from = Number(this.dragged.dataset.id);
    const to = Number(this.over.dataset.id);

    const capiedTo = this.capiedTo!==-1? this.capiedTo: from;

    const childElementCount = e.target.parentNode.childElementCount -2;

    // console.log("capiedTo",capiedTo);
    // console.log("to",to);
    // console.log("from",from);
    // console.log("childElementCount",childElementCount);
    // console.log("currentDragDirection",this.currentDragDirection);


    //방향 재설정
    if( to ===capiedTo || capiedTo === from ){

        this.initDragDrection=true;
        if(to){      
          e.target.parentNode.insertBefore(placeholder, e.target);
        }

        //console.log("방향 재설정");
        //console.log("----------------------");     
    }

    //처음 클릭 할 때
    //방향 모를 때
    if(this.initDragDrection){

      this.initDragDrection=false;

        //console.log("방향 찾기");
        
        if(capiedTo > to){ 
            this.currentDragDirection= 'DRAG_DIRECTION_UP';
            //console.log("DRAG_DIRECTION_UP");
        }

        //방향 모를 떄
        if(capiedTo === to){
            //처음 클릭 시
            if(from ===to && this.currentDragDirection==="DRAG_DIRECTION_NONE"){
              this.initDragDrection = true;
              //console.log("처음 클릭");
            }
            else{
            
            this.currentDragDirection= this.currentDragDirection=== "DRAG_DIRECTION_DOWN" ? "DRAG_DIRECTION_UP" : "DRAG_DIRECTION_DOWN";
            //console.log("방향 반전 ", this.currentDragDirection);
            }
        }
    
        else if(capiedTo < to){
            this.currentDragDirection= 'DRAG_DIRECTION_DOWN';
            //console.log("DRAG_DIRECTION_DOWN");
        }

        //console.log("----------------------");
    }

    //위에서 아래로
    if(("DRAG_DIRECTION_DOWN"===this.currentDragDirection)){

        //console.log("DOWN");
        //console.log("----------------------");

        this.capiedTo=to;
        e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);

        return;
    }

    //아래에서 위로
    if(("DRAG_DIRECTION_UP"===this.currentDragDirection)){
        
        //console.log("UP");
        //console.log("----------------------");
        
        this.capiedTo=to;
        e.target.parentNode.insertBefore(placeholder, e.target);
        return;
    }
 }
  
	render() {
    const listItems = [...this.state.datas].map((item, i) => {
      return (
        <li 
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          onDragOver={this.dragOver.bind(this)} 
        >
          
          {item[this.state.displayedProp]}
        </li>
      )
     });
		return (
            <ul>
              {listItems}
            </ul>
		)
	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datas: [
        {
          id:0,
          name:"name 0",
          title:"title 0"
        },
        {
          id:1,
          name:"name 1",
          title:"title 1"
        },
        {
          id:2,
          name:"name 2",
          title:"title 2"
        },
        {
          id:0,
          name:"name 3",
          title:"title 3"
        },
        {
          name:"name 4",
          title:"title 4"
        }
      ],
      displayedProp:"title"
    }
	}
	render() {
		return (
			<div>
        <List datas={this.state.datas} displayedProp={this.state.displayedProp}/>	
			</div>
		)
	}
}

export default App;
