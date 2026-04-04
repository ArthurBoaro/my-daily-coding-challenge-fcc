function getBrowserHistory(commands) {

    const history = [];
    let current = -1;

    for (let command of commands) {
        if (command == "Back") {
            if (current > 0) {
                current--;
            }
        } else if (command == "Forward") {
            if (current < history.length - 1) {
                current++;
            }
        } else {
      
        history.splice(current + 1);
      
        history.push(command);
        current++;
    }
  }

  return [history, current];
}