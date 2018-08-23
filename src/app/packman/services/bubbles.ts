export class Bubbles{
    public static BUBBLES_ARRAY:any = [];
    public static BUBBLES_CANVAS_CONTEXT = null;
    public static BUBBLES_X_START:number = 30;
    public static BUBBLES_X_END:number = 868;
    public static BUBBLES_GAP = ((Bubbles.BUBBLES_X_END - Bubbles.BUBBLES_X_START) / 18);
    public static BUBBLES_Y_START = 30;
    public static BUBBLES_Y_END = 522;
    public static BUBBLES_SIZE:any = 3;
    public static BUBBLES_COUNTER = 0;

    public static SUPER_BUBBLES:any = [];
    public static SUPER_BUBBLES_SIZE:any = 8;
    public static SUPER_BUBBLES_BLINK = false;
    public static SUPER_BUBBLES_BLINK_STATE:any = 0;
    public static SUPER_BUBBLES_BLINK_TIMER:any = -1;
    public static SUPER_BUBBLES_BLINK_SPEED:any = 525;
    public static getCnavasContext:any ;

    initBubbles(ctx){
    Bubbles.BUBBLES_COUNTER = 0;
	Bubbles.BUBBLES_ARRAY.length = 0;
	Bubbles.getCnavasContext = ctx ;
    }

    drawBubbles(ctx){
        
        ctx.fillStyle = "#dca5be";	
        for (var line = 1, linemax = 29, i = 0, s = 0; line <= linemax; line ++) { 
            let y:any = this.getYFromLine(line);
            for (var x = Bubbles.BUBBLES_X_START, xmax = Bubbles.BUBBLES_X_END, bubble = 1 ; x < xmax; bubble ++, x += Bubbles.BUBBLES_GAP) { 
                if (this.canAddBubble(line, bubble)) { 
                    var type = "";
                    var size = "";
                    if (this.isSuperBubble(line, bubble)) { 
                        type = "s";
                        size = Bubbles.SUPER_BUBBLES_SIZE;
                        Bubbles.SUPER_BUBBLES[s] = line + ";" + bubble + ";" + parseInt(this.correctionX(x, bubble)) + "," + parseInt(y) + ";0";
                        s ++;
                    } else { 
                        type = "b";
                        size = Bubbles.BUBBLES_SIZE;
                    }
                    Bubbles.BUBBLES_COUNTER ++;
                    ctx.beginPath();
                    ctx.arc(this.correctionX(x, bubble), y, size, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.closePath();
                    
                    Bubbles.BUBBLES_ARRAY.push( parseInt(this.correctionX(x, bubble)) + "," + parseInt(y) + ";" + line + ";" + bubble + ";" + type + ";0" );
                    i ++;
                }
            }
        }
    }
    stopBlinkSuperBubbles() { 
        clearInterval(Bubbles.SUPER_BUBBLES_BLINK_TIMER);
        Bubbles.SUPER_BUBBLES_BLINK_TIMER = -1;
        Bubbles.SUPER_BUBBLES_BLINK = false;
    }
    
    blinkSuperBubbles() { 
    
        if (Bubbles.SUPER_BUBBLES_BLINK === false) { 
            Bubbles.SUPER_BUBBLES_BLINK = true;
            Bubbles.SUPER_BUBBLES_BLINK_TIMER = setInterval('blinkSuperBubbles()', Bubbles.SUPER_BUBBLES_BLINK_SPEED);
        } else { 
            
            if (Bubbles.SUPER_BUBBLES_BLINK_STATE === 0) { 
                Bubbles.SUPER_BUBBLES_BLINK_STATE = 1;
            } else { 
                Bubbles.SUPER_BUBBLES_BLINK_STATE = 0;
            }
            
            var clone = Bubbles.SUPER_BUBBLES.slice(0);
            
            for (var i = 0, imax = clone.length; i < imax; i ++) { 
            
                var s = clone[i];
            
                if ( s.split(";")[3] === "0" ) { 
                
                    var sx = parseInt(s.split(";")[2].split(",")[0]);
                    var sy = parseInt(s.split(";")[2].split(",")[1]);
                
                    if (Bubbles.SUPER_BUBBLES_BLINK_STATE === 1) { 
                        this.eraseBubble("s", sx, sy);
                    } else { 
                        var ctx = Bubbles.getCnavasContext;
                        ctx.fillStyle = "#dca5be";
                        ctx.beginPath();
                        ctx.arc(sx, sy, Bubbles.SUPER_BUBBLES_SIZE, 0, 2 * Math.PI, false);
                        ctx.fill();
                        ctx.closePath();
                    }
    
                }
            }
        }
    }
    
    setSuperBubbleOnXY( x, y, eat ) { 
    
        for (var i = 0, imax = Bubbles.SUPER_BUBBLES.length; i < imax; i ++) { 
            var bubbleParams = Bubbles.SUPER_BUBBLES[i].split( ";" );
            var testX = parseInt(bubbleParams[2].split( "," )[0]);
            var testY = parseInt(bubbleParams[2].split( "," )[1]);
            if ( testX === x && testY === y ) { 
                Bubbles.SUPER_BUBBLES[i] = Bubbles.SUPER_BUBBLES[i].substr( 0, Bubbles.SUPER_BUBBLES[i].length - 1 ) + "1";
                break;
            }
        }
    }
    
    getBubbleOnXY( x, y ) {     
        var bubble = null;
        for (var i = 0, imax = Bubbles.BUBBLES_ARRAY.length; i < imax; i ++) { 
            var bubbleParams = Bubbles.BUBBLES_ARRAY[i].split( ";" );
            var testX = parseInt(bubbleParams[0].split( "," )[0]);
            var testY = parseInt(bubbleParams[0].split( "," )[1]);
            if ( testX === x && testY === y ) { 
                bubble = Bubbles.BUBBLES_ARRAY[i];
                break;
            }
        }
        return bubble;
    }
    
    eraseBubble(t, x, y) { 
    
        let ctx = Bubbles.getCnavasContext;    
        let size:any = "";
        if (t === "s") { 
            size = Bubbles.SUPER_BUBBLES_SIZE;
        } else { 
            size = Bubbles.BUBBLES_SIZE;
        }
    
        ctx.clearRect(x - size, y - size, (size + 1) * 2, (size + 1) * 2);
    }
    
    isSuperBubble(line, bubble) { 
        if ( (line === 23 || line === 4) && (bubble === 1 || bubble === 26)) { 
            return true;
        }
        
        return false;
    }
    
    canAddBubble(line, bubble) {         
        // if ( ( ( line >= 1 && line <= 4) || (line >= 9 && line <= 10) || (line >= 20 && line <= 22) || (line >= 26 && line <= 28) ) && (bubble === 13 || bubble === 14)) {
        //     return false;
        // } else if ( ( (line >= 2 && line <= 4) || (line >= 21 && line <= 22) ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) { 
        //     return false;
        // } else if ( ( line >= 6 && line <= 7 ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) ||  (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) {
        //     return false;
        // } else if ( ( line === 8 ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 13 && bubble <= 14) || (bubble >= 19 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( (( line >= 9 &&  line <= 19) ) && ( (bubble >= 1 && bubble <= 5) || (bubble >= 22 && bubble <= 26) ) ) { 
        //     return false;
        // } else if ( ( line === 11 || line === 17 ) && ( (bubble >= 7 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( ( line === 9 || line === 10 ) && ( (bubble === 12 || bubble === 15) ) ) { 
        //     return false;
        // } else if ( ( (line >= 12 && line <= 13) || (line >= 15 && line <= 16) ) && ( (bubble === 9 || bubble === 18) ) ) { 
        //     return false;
        // } else if ( line === 14 && ( (bubble >= 7 && bubble <= 9) || (bubble >= 18 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( (line === 18 || line === 19) && ( bubble === 9 || bubble === 18) ) { 
        //     return false;
        // } else if ( ( line >= 9 && line <= 10 ) && ( (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( (( line >= 11 && line <= 13) || (line >= 15 && line <= 19) ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( ( (line >= 12 && line <= 16) || (line >= 18 && line <= 19) ) && ( bubble >= 10 && bubble <= 17) ) { 
        //     return false;
        // } else if ( (line === 23) && ( (bubble >= 4 && bubble <= 5) || (bubble >= 22 && bubble <= 23) ) ) { 
        //     return false;
        // } else if ( (line >= 24 && line <= 25) && ( (bubble >= 1 && bubble <= 2) || (bubble >= 4 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) || (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 23) || (bubble >= 25 && bubble <= 26) ) ) { 
        //     return false;
        // } else if ( (line === 26) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
        //     return false;
        // } else if ( (line >= 27 && line <= 28) && ( (bubble >= 2 && bubble <= 11) || (bubble >= 16 && bubble <= 25) ) ) { 
        //     return false;
        // }else if((line==5) || (line==8)){
        //   return false ;
        // }else if()

        console.log(line +" Bubble: "+ bubble);
        return true;
    }
    
    correctionX(x, bubble) { 
        
        if (bubble === 3) { 
            return x + 1;
        } else if (bubble === 6) { 
            return x + 1;
        } else if (bubble === 15) { 
            return x + 1;
        } else if (bubble === 18) { 
            return x + 1;
        } else if (bubble === 21) { 
            return x + 2;
        } else if (bubble === 24) { 
            return x + 2;
        } else if (bubble === 26) { 
            return x + 1;
        }
        return x;
    }
    
    getYFromLine(line) { 
        var y = Bubbles.BUBBLES_Y_START;
        if (line < 8) { 
            y = Bubbles.BUBBLES_Y_START + ( (line - 1) * 18 );
        } else if (line > 7 && line < 15) { 
            y = 150 + ( (line - 8) * 18 );
        } else if (line > 14 && line < 21) { 
            y = 256 + ( (line - 14) * 18 );
        } else if (line > 20 && line < 26) { 
            y = 362 + ( (line - 20) * 18 );
        } else if (line > 25 && line < 29) { 
            y = 452 + ( (line - 25) * 18 );
        } else if (line === 29) { 
            y = Bubbles.BUBBLES_Y_END;
        }
    
        return y;
    }
}