function isValidTrick(trickName) {
  const validFirstWords = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen", "Polar"]
  
  const validSecondWords = ["Twister", "Icequake", "Avalanche", "Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"]
  
  let arr = trickName.split(" ")

  if (validFirstWords.includes(arr[0]) && validSecondWords.includes(arr[1])) {
    return true
  }

  return false;
}