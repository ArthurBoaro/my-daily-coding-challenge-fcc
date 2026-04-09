function compareEnergy(caloriesBurned, wattHoursUsed) {

  const caloriesJoules = caloriesBurned * 4184;
  const wattHoursJoules = wattHoursUsed * 3600;

  return caloriesJoules > wattHoursJoules ? "Workout" : caloriesJoules < wattHoursJoules ? "Devices" : "Equal";
}