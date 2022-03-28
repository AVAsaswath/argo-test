import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className='backy'>
      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => login(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://52.141.216.5:9000/login', request)
  .then( resp => {
    alert(resp.data.message);
  })
  .catch( err => {
    console.log(err);
  })
}

export default App;
