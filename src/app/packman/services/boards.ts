export class Board{

initBoard(ctx){
    ctx.strokeStyle = "#193fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
      // UP    
    ctx.moveTo(0, 251);
    ctx.lineTo(97, 251);
    ctx.arcTo(99, 251, 99, 248, 5);
    ctx.lineTo(99, 199);
    ctx.arcTo(99, 196, 97, 196, 5);
    ctx.lineTo(12, 196);		
    ctx.arcTo(1, 196, 1, 185, 12);
    ctx.lineTo(1, 10);		
    ctx.arcTo(1, 1, 10, 1, 12);
    ctx.lineTo(886, 1);
    ctx.arcTo(897, 1, 897, 12, 12);
    ctx.lineTo(897, 185);
    ctx.arcTo(897, 196, 886, 196, 12);
    ctx.lineTo(802, 196);
    ctx.arcTo(799, 196, 449, 199, 5);
    ctx.lineTo(799, 248);
    ctx.arcTo(799, 251, 801, 251, 5);
    ctx.lineTo(900, 251);
    ctx.stroke();
    
    ctx.moveTo(0, 258);
    ctx.lineTo(98, 258);
    ctx.arcTo(106, 258, 106, 252, 12);
    ctx.lineTo(106, 199);
    ctx.arcTo(106, 189, 101, 189, 12);
    ctx.lineTo(15, 189);
    ctx.arcTo(9, 189, 9, 158, 5);
    ctx.lineTo(9, 15);
    ctx.arcTo(9, 7, 18, 7, 5);
    ctx.lineTo(259, 7);   
    ctx.arcTo(883, 7, 883, 7, 5);
    ctx.lineTo(883, 7);
    ctx.arcTo(890, 7, 890, 11, 5);
    ctx.lineTo(890, 185);
    ctx.arcTo(890, 189, 883, 189, 5);
    ctx.lineTo(802, 189);
    ctx.arcTo(792, 189, 792, 192, 12);
    ctx.lineTo(792, 250);
    ctx.arcTo(792, 258, 795, 258, 12);
    ctx.lineTo(900, 258);
    ctx.stroke();
    //end Up

    // DOWN 
    
    ctx.moveTo(0, 303);
    ctx.lineTo(97, 303);
    ctx.arcTo(99, 303, 99, 306, 5);
    ctx.lineTo(99, 355);
    ctx.arcTo(99, 358, 96, 358, 5);
    ctx.lineTo(9, 358);
    ctx.arcTo(1, 358, 1, 361, 12);
    ctx.lineTo(1, 540);
    ctx.arcTo(1, 548, 9, 548, 12);
    ctx.lineTo(889, 548);
    ctx.arcTo(897, 548, 897, 540, 12);
    ctx.lineTo(897, 365);
    ctx.arcTo(897, 357, 889, 357, 12);
    ctx.lineTo(803, 357);
    ctx.arcTo(800, 357, 800, 354, 5);
    ctx.lineTo(800, 306);
    ctx.arcTo(800, 303, 803, 303, 5);
    ctx.lineTo(900, 303);
    ctx.stroke();
    
    
    ctx.moveTo(0, 296);
    ctx.lineTo(99, 296);
    ctx.arcTo(107, 296, 107, 302, 12);
    ctx.lineTo(107, 355);
    ctx.arcTo(107, 365, 101, 365, 12);
    ctx.lineTo(12, 365);
    ctx.arcTo(9, 365, 9, 368, 5);
    ctx.lineTo(9, 452);    
    ctx.arcTo(9, 471, 9, 474, 5);
    ctx.lineTo(9, 538);
    ctx.arcTo(9, 541, 12, 541, 5);
    ctx.lineTo(886, 541);
    ctx.arcTo(889, 541, 889, 538, 5);
    ctx.lineTo(889, 475);    
    ctx.arcTo(889, 453, 889, 450, 5);
    ctx.lineTo(889, 369);
    ctx.arcTo(889, 365, 886, 365, 5);
    ctx.lineTo(805, 365);
    ctx.arcTo(792, 365, 792, 362, 12);
    ctx.lineTo(792, 308);
    ctx.arcTo(792, 296, 798, 296, 12);
    ctx.lineTo(900, 296);
    ctx.stroke();
    // end Down
    
    //center
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="orange";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(429, 223);
    ctx.lineTo(352, 223);
    ctx.lineTo(352, 292);
    ctx.lineTo(547, 292);
    ctx.lineTo(547, 223);
    ctx.lineTo(491, 223);
    ctx.lineTo(491, 230);
    ctx.lineTo(539, 230);
    ctx.lineTo(539, 284);
    ctx.lineTo(360, 284);
    ctx.lineTo(360, 230);
    ctx.lineTo(429, 230);
    ctx.lineTo(429, 223);
    ctx.stroke();
    


     //******  Learning ********//
    //For L //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(16,232,108,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(52,151);
    ctx.lineTo(52,53);
    ctx.lineTo(70,53);
    ctx.lineTo(70,133);
    ctx.lineTo(108,133);
    ctx.lineTo(108,151);
    ctx.lineTo(52,151);
    ctx.stroke();
    //  L  end //

    //  start E //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(238,228,75,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(160,151);
    ctx.lineTo(160,53);
    ctx.lineTo(215,53);
    ctx.lineTo(215,70);
    ctx.lineTo(175,70);
    ctx.lineTo(175,95);
    ctx.lineTo(215,95);
    ctx.lineTo(215,112);
    ctx.lineTo(175,112);
    ctx.lineTo(175,135);
    ctx.lineTo(215,135);
    ctx.lineTo(215,152);
    ctx.lineTo(160,151);
    ctx.stroke();
    // End E //

    //  start A //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(32,165,249,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(265,151);
    ctx.lineTo(265,53);
    ctx.lineTo(330,53);
    ctx.lineTo(330,151);
    ctx.lineTo(310,151);
    ctx.lineTo(310,110);
    ctx.lineTo(285,110);
    ctx.lineTo(285,151);
    ctx.lineTo(265,151);
    ctx.rect(285, 70, 25, 25);
    ctx.stroke();
    // End A //

    //  start R //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(244,87,106,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(380,151);
    ctx.lineTo(380,53);
    ctx.lineTo(445,53);
    ctx.lineTo(445,110);
    ctx.lineTo(425,110);
    ctx.lineTo(445,151);
    ctx.lineTo(425,151);
    ctx.lineTo(405,110);
    ctx.lineTo(400,110);
    ctx.lineTo(400,151);
    ctx.lineTo(380,151);
    ctx.rect(400, 70, 25, 25);
    ctx.stroke();
    // End R //

    //  start N //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(243,51,209,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(495,151);
    ctx.lineTo(495,53);
    ctx.lineTo(513,53);
    ctx.lineTo(538,110);
    ctx.lineTo(538,53);
    ctx.lineTo(558,53);
    ctx.lineTo(558,151);
    ctx.lineTo(538,151);
    ctx.lineTo(513,108);
    ctx.lineTo(513,151);
    ctx.lineTo(495,151);
    ctx.stroke();
    // End N //

    //  start I //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(16,232,108,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(605,151);
    ctx.lineTo(605,53);
    ctx.lineTo(625,53);
    ctx.lineTo(625,151);
    ctx.lineTo(605,151);
    ctx.stroke();
    // End I //

    //  start N //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(243,51,209,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(675,151);
    ctx.lineTo(675,53);
    ctx.lineTo(693,53);
    ctx.lineTo(718,110);
    ctx.lineTo(718,53);
    ctx.lineTo(738,53);
    ctx.lineTo(738,151);
    ctx.lineTo(718,151);
    ctx.lineTo(693,108);
    ctx.lineTo(693,151);
    ctx.lineTo(675,151);
    ctx.stroke();
    // End N //

    //  start G //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(16,232,108,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(785,151);
    ctx.lineTo(785,53);
    ctx.lineTo(845,53);
    ctx.lineTo(845,70);
    ctx.lineTo(802,70);
    ctx.lineTo(802,135);
    ctx.lineTo(830,135);
    ctx.lineTo(830,110);
    ctx.lineTo(818,110);
    ctx.lineTo(818,98);
    ctx.lineTo(845,98);
    ctx.lineTo(845,151);
    ctx.lineTo(785,151);
    ctx.stroke();
    // End G //




    // *** M start ** //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(35,218,245,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(200, 480);
    ctx.lineTo(200, 380);
    ctx.lineTo(218, 380);
    ctx.lineTo(238, 437);
    ctx.lineTo(256, 380);
    ctx.lineTo(274, 380);
    ctx.lineTo(274, 480);
    ctx.lineTo(256, 480);
    ctx.lineTo(256, 445);
    ctx.lineTo(247, 480);
    ctx.lineTo(230, 480);
    ctx.lineTo(218, 445);
    ctx.lineTo(218, 480);
    ctx.lineTo(200, 480);
    ctx.stroke();

    // ******** M end ***** //

    // *** A start ** //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(238,131,44,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(330, 480);
    ctx.lineTo(330, 380);
    ctx.lineTo(395, 380);
    ctx.lineTo(395, 480);
    ctx.lineTo(375, 480);
    ctx.lineTo(375, 439);
    ctx.lineTo(350, 439);
    ctx.lineTo(350, 480);
    ctx.lineTo(330, 480);
    ctx.rect(350, 395, 25, 25);

    ctx.stroke();

    // ******** A end ***** //

    // *** T start ** //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(87,250,183,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(485, 480);
    ctx.lineTo(485, 395);
    ctx.lineTo(450, 395);
    ctx.lineTo(450, 380);
    ctx.lineTo(540, 380);
    ctx.lineTo(540, 395);
    ctx.lineTo(505, 395);
    ctx.lineTo(505, 480);
    ctx.lineTo(485, 480);

    ctx.stroke();

    // ******** T end ***** //

    // *** E start ** //
    ctx.shadowColor ="rgba(0,0,0,0)";
    ctx.strokeStyle ="rgba(224,47,180,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(610, 480);
    ctx.lineTo(610, 380);
    ctx.lineTo(670, 380);
    ctx.lineTo(670, 397);
    ctx.lineTo(630, 397);
    ctx.lineTo(630, 422);
    ctx.lineTo(670, 422);
    ctx.lineTo(670, 439);
    ctx.lineTo(630, 439);
    ctx.lineTo(630, 464);
    ctx.lineTo(670, 464);
    ctx.lineTo(670, 480);
    ctx.lineTo(610, 480);
    ctx.stroke();

    // *******Mate*********//
    /// end center
    ctx.closePath();
}

drawBoardDoor(ctx){
  ctx.strokeStyle = "#FF5733";
	ctx.lineWidth = "8";
	
	ctx.beginPath();
	ctx.moveTo(432, 226);
	ctx.lineTo(489, 226);
	ctx.stroke();
	
	ctx.closePath();
}
    
}