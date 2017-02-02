/* Edit function is called when team label is clicked */
function edit_fn(container, data, doneCb) {
 
}  

/* Render function is called for each team label when data is changed, data
 * contains the data object given in init and belonging to this slot.
 *
 * 'state' is one of the following strings:
 * - empty-bye: No data or score and there won't team advancing to this place
 * - empty-tbd: No data or score yet. A team will advance here later
 * - entry-no-score: Data available, but no score given yet
 * - entry-default-win: Data available, score will never be given as opponent is BYE
 * - entry-complete: Data and score available
 */
function render_fn(container, data, score, state) {
  switch(state) {
    case "empty-bye":
      container.append("");
      return;
    case "empty-tbd":
      container.append("Ej avgjort");
      return;
 
    case "entry-no-score":
    case "entry-default-win":
    case "entry-complete":
      container.append('<img src="'+data.flag+'.png" /> ').append(data.name);
      return;
  }
}
 

