const remoteURL = "https://localhost:5001/api";
export default {
  getAll: () => {
    return fetch(`${remoteURL}/trainingprogram`).then(programs =>
      programs.json()
    )
  }
}

//   getSingle: id =>
//     fetch(`${remoteURL}/trainingPrograms/${id}`).then(animal => animal.json()),
//   put(editedAnimal) {
//     return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editedAnimal)
//     }).then(data => data.json());
//   },
//   deleteAnimal: id => {
//     return fetch(`http://localhost:5002/animals/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => fetch(`http://localhost:5002/animals`))
//       .then(e => e.json());
//   },
//   postAnimal(newAnimal) {
//     return fetch(`${remoteURL}/animals`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newAnimal)
//     }).then(data => data.json());
//   }
// }
//