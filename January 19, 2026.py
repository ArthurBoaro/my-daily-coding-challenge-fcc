def compare_energy(calories_burned, watt_hours_used):

    calories_joules = calories_burned * 4184;
    watt_hours_joules = watt_hours_used * 3600;

    return "Workout" if calories_joules > watt_hours_joules else "Devices" if calories_joules < watt_hours_joules else "Equal"