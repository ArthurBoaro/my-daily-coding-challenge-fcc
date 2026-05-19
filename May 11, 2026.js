function getOldest(people) {

  const maxAge = Math.max(...people.map(person => person.age))
  const oldest = people.filter(person => person.age == maxAge).map(person => person.name);

  return oldest;
}