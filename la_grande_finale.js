var customData = {
    teams : [
    [{name: "Rank #1", flag: 'saab'}, null],
    [{name: "Rank #9", flag: 'saab'}, {name: "Rank #8", flag: 'combitech'}],
    [{name: "Rank #5", flag: 'saab'}, {name: "Rank #12", flag: 'combitech'}],
    [{name: "Rank #13", flag: 'saab'}, {name: "Rank #4", flag: 'combitech'}],
    [{name: "Rank #3", flag: 'saab'}, {name: "Rank #14", flag: 'combitech'}],
    [{name: "Rank #6", flag: 'saab'}, {name: "Rank #11", flag: 'combitech'}],
    [{name: "Rank #7", flag: 'saab'}, {name: "Rank #10", flag: 'combitech'}],
    [{name: "Rank #2", flag: 'saab'}, null]
    ],
  results : [
    [ /* WINNER BRACKET */
      [[], [], [], [0,1], [1,0], [], [], []],
    ], 
    [         /* LOSER BRACKET */
    ], 
    [         /* FINALS */
    
    ]
  ]
  }
 
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
      //container.append("Gräddfilen")
      return;
    case "empty-tbd":
      container.append("Ej klart")
      return;
 
    case "entry-no-score":
    case "entry-default-win":
    case "entry-complete":
      container.append(data.name)      
      return;
  }
}
 

$(function() {
  $('div#endgame-show').bracket({
    init: customData,
    disableToolbar: true,
    disableTeamEdit: true,
    teamWidth: 120,
    scoreWidth: 20,
    matchMargin: 50,
    save: function(){}, /* without save() labels are disabled */
    decorator: {edit: edit_fn,
                render: render_fn}})
  })
