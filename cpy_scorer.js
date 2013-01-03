var Scorer = {

  // Uncomment the following function to further tweak the score for each result
  // The function takes a result array [filename, title, anchor, descr, score]
  // and returns the new score.
  /*
  score: function(result) {
    return result[4];
  },
  */

  // query matches the full name of an object
  objFullMatch: 11,
  // or a part of it (delimited between .)
  objPartialMatch: 6,
  // Additive scores depending on the priority of the object
  objPrio: {0:  10,   // used to be importantResults
            1:   0,   // used to be objectResults
            2: -10},  // used to be unimportantResults
  //  Used when the priority is not in the mapping.
  objPrioDefault: 0,

  // query found in title
  title: 5,
  // query found in terms
  term: 0
};

