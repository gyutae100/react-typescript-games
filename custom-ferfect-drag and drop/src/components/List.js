import React from 'react';
import './List.scss'

var placeholder = document.createElement("li");
placeholder.className = "placeholder";
placeholder.id="placeholder";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  dragStart(e) {
    this.currentDragDirection = 'DRAG_DIRECTION_NONE';
    this.capiedTo=-1

    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);

  }

  dragEnd(e) {

    if(this.dragged.parentNode.querySelector('#placeholder') !==null){
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);

      // update state
      var data = this.state.datas;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
    }

  }

  dragOver(e) {
    console.log("xxxxxxxxx");
    e.preventDefault();
    this.dragged.style.display = "none";
    this.over = e.target;

    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);

    var capiedTo = this.capiedTo!==-1? this.capiedTo: from;

    const childElementCount = e.target.parentNode.childElementCount -2;

    console.log("capiedTo",capiedTo);
    console.log("to",to);
    console.log("from",from);
    console.log("childElementCount",childElementCount);
    console.log("currentDragDirection",this.currentDragDirection);


    //방향 재설정
    if( to ===capiedTo  || capiedTo ===  from){

        this.initDragDrection=true;
        if(to){      
          e.target.parentNode.insertBefore(placeholder, e.target);
        }

        console.log("방향 재설정");
        console.log("----------------------");     
    }

    //처음 클릭 할 때
    //방향 모를 때
    if(this.initDragDrection){

      this.initDragDrection=false;

        console.log("방향 찾기");
        
        if(capiedTo > to){ 
            this.currentDragDirection= 'DRAG_DIRECTION_UP';
            console.log("DRAG_DIRECTION_UP");
        }

        //방향 모를 떄
        if(capiedTo === to){
            //처음 클릭 시
            if(from ===to && this.currentDragDirection==="DRAG_DIRECTION_NONE"){
              this.initDragDrection = true;
              console.log("처음 클릭");
            }
            else{
            
            this.currentDragDirection= this.currentDragDirection=== "DRAG_DIRECTION_DOWN" ? "DRAG_DIRECTION_UP" : "DRAG_DIRECTION_DOWN";
            console.log("방향 반전 ", this.currentDragDirection);
            }
        }
    
        else if(capiedTo < to){
            this.currentDragDirection= 'DRAG_DIRECTION_DOWN';
            console.log("DRAG_DIRECTION_DOWN");
        }

        console.log("----------------------");
    }

    //위에서 아래로
    if(("DRAG_DIRECTION_DOWN"===this.currentDragDirection)){

        console.log("DOWN");
        console.log("----------------------");

        this.capiedTo=to;
        e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);

        return;
    }

    //아래에서 위로
    if(("DRAG_DIRECTION_UP"===this.currentDragDirection)){
        
        console.log("UP");
        console.log("----------------------");
        
        this.capiedTo=to;
        e.target.parentNode.insertBefore(placeholder, e.target);
        return;
    }
 }
  



	render() {
    var listItems = this.state.datas.map((item, i) => {
      return (
        <li 
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          onDragOver={this.dragOver.bind(this)} 
        >
          {item}
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
			datas: ['0', '1','2','3','4','5','6']
		}
	}
	render() {
		return (
			<div>
        <List datas={this.state.datas} />	
			</div>
		)
	}
}

export default App;
