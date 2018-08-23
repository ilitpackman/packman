import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Constant } from './constants/constants' ;
import { Board } from './services/boards' ; 
import { Bubbles } from './services/bubbles' ;

@Component({
  selector: 'packman',
  templateUrl: './packman.component.html',
  styleUrls: ['./packman.component.css']
})

export class PackmanComponent implements AfterViewInit{
  
  title = 'Packman Game';
  // handle all the canvas
  @ViewChild('canvasboard') canvasBoardRef: ElementRef;
  @ViewChild('canvaspaths') canvasPathRef: ElementRef;
  @ViewChild('canvasbubbles') canvasBubbleRef: ElementRef;
  @ViewChild('canvasfruits') canvasFruitsRef: ElementRef; 
  @ViewChild('canvaspacman') canvasPacmanRef: ElementRef;
  @ViewChild('canvasghostblinky') canvasGhostBlinkyRef: ElementRef;
  @ViewChild('canvasghostpinky') canvasGhostPinkyRef: ElementRef;
  @ViewChild('canvasghostinky') canvasGhostInkyRef: ElementRef;
  @ViewChild('canvasghostclyde') canvasGhostClydeRef: ElementRef;

  constructor(public board:Board, public bubbles:Bubbles){

  }

  ngAfterViewInit(){

    // Board
    let ctx: CanvasRenderingContext2D =
    this.canvasBoardRef.nativeElement.getContext('2d');
    this.canvasBoardRef.nativeElement.width  = 900;
    this.canvasBoardRef.nativeElement.height = 550;  
    this.board.initBoard(ctx);
    this.board.drawBoardDoor(ctx);
    
    //bubbles
    let bubblesCtx:CanvasRenderingContext2D  =  
    this.canvasBubbleRef.nativeElement.getContext('2d');
    this.canvasBubbleRef.nativeElement.width  = 900;
    this.canvasBubbleRef.nativeElement.height = 550;

    this.bubbles.initBubbles(bubblesCtx);
	  this.bubbles.drawBubbles(bubblesCtx);

  }

  mouseEnter(){
    console.log(event);
  }

  mouseEnter1(){
    console.log(event);
  }

}
