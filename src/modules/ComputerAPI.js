const remoteURL = "https://localhost:5001/api";
export default {
  getAll: () => {
    return fetch("https://localhost:5001/api/computer")
    .then(computers =>
      computers.json()
    );
  },
  getOne: id =>
    fetch(`${remoteURL}/computer/${id}`).then(computer => computer.json()),
  put(editedComputer) {
    return fetch(`${remoteURL}/computer/${editedComputer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedComputer)
    }).then(data => data.json());
  },
  deleteComputer: id => {
    return fetch(`https://localhost:5001/api/computer/${id}`, {
      method: "DELETE"
    })
      .then(() => fetch(`https://localhost:5001/api/computer`))
      .then(e => e.json());
  },
  postComputer(newComputer) {
    return fetch(`${remoteURL}/computer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(newComputer)
    }).then(data => data.json());
  }
};