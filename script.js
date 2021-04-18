/**
 * DONE: Create a keydown listener to track what keys are hit
 * DONE: Create a Beat class to represent the beat object in utils.js
 * DONE: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * TODO: Button pt1: Initialize color and element values
 * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * TODO: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
	65: {
		beat: new Beat('./assets/Piano_Chord_331.mp3'),
	},
	83: {
		beat: new Beat('./assets/Piano_Chord_209.mp3'),
	},
	68: {
		beat: new Beat('./assets/Piano_Chord_208.mp3'),
	},
	70: {
		beat: new Beat('./assets/Drum_Sticks_Hit_3.mp3'),
	},
	71: {
		beat: new Beat('./assets/Drum_Snare_Roll.mp3'),
	},
	72: {
		beat: new Beat('./assets/PREL_Musical_57.mp3'),
	},
	74: {
		beat: new Beat('./assets/Cymbal_Suspended_2.mp3'),
	},
	75: {
		beat: new Beat('./assets/Musical_Compos_33.mp3'),
	},
	76: {
		beat: new Beat('./assets/Musical_Orches_4.mp3'),
	},
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
	const keyCode = event.keyCode;
	if (keyCode in beats) {
		let keyPress = beats[keyCode];
		keyPress.beat.play();
	}
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
document.addEventListener('keydown', triggerBeat);
