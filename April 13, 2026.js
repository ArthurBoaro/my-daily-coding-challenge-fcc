function getInitials(name) {

  const names = name.split(" ");
  const nameInitials = names.map((name) => name[0] + ".").join("");

  return nameInitials;
}