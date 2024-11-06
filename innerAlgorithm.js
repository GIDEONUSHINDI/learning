function nextFunction(notes, currentIndex, currentIndex2){
    currentIndex = (currentIndex + 1) % notesArray.length;
    currentIndex2 = (currentIndex2 + 1) % notesHeading.length;
    notes.textContent = notesArray[currentIndex];
    heading.textContent = notesHeading[currentIndex2];
}
function backFunction(notes, currentIndex, currentIndex2){
    currentIndex = (currentIndex - 1 + notesArray.length) % notesArray.length;
    currentIndex2 = (currentIndex2 - 1 + notesHeading.length) % notesHeading.length;
    notes.textContent = notesArray[currentIndex];
    heading.textContent = notesHeading[currentIndex2];
    
}