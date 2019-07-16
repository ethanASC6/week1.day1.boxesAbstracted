const number_of_boxes_in_row = 30;
const number_of_boxes_in_column = 30;

let box_width, box_height;

function setup(){
    createCanvas(600,600);
    box_height = (height / number_of_boxes_in_column);
    box_width = (width / number_of_boxes_in_row);
}

function draw(){
    for(let i = 0; i < number_of_boxes_in_row; i++){
        //const y = 0;
        const x = i * box_width;

        // TASK #8 - Create another for loop under this task that
        // loops through each box in the column, using "j" as the 
        // iterator.
        // HINT: the code will look very similar to the first "for"
        // loop. 

        for(let j=0; j<number_of_boxes_in_column; j++){
            const y = j * box_height;
            customFill(i,y);
            rect(x,y,box_width,box_height);
        }

        // TASK #9 - comment out the "const y" from earlier
        
        // TASK #10 - In the setup function, change the value of 
        // "box_height" to the height of the canvas divided by the
        // number of boxes in a column.

        // TASK #11 - Within the second "for" loop, create a
        // "const y" as the y-coordinate for the current box
        // HINT: this changes with each box in the column depending
        // on it's place. Think about how the box_height plays a
        // role with this.

        // TASK #12 - cut and paste the code for drawing the box into the 2nd "for" loop

        // EXTRA CREDIT - Replace the code for drawing boxes with your
        // own code that allows a mouse click on the box to change
        // the color of that specific box
    }
}

/**
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */
function customFill(i,y){
    const j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}
