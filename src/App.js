import logo from './logo.svg';
import './App.css';
import './Design.css'

import ListOfFruits from './components/ListOfFruits';
import Button from './components/Button';
import CountIncrement from './components/CountIncrement';
import Form from './components/Form';
import ReactFag from './components/ReactFrag';
import TaskManager from './components/TaskManager';
import AddTask from './components/todo-application/AddTask';
import DisplayTask from './components/todo-application/DisplayTask';
import DeleteTask from './components/todo-application/DeleteTask';
import EditTask from './components/todo-application/EditTask';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './components/todo-application/Home';
import './Todo-Design.css'


function App() {
  return (
    <div className="App">

      {/* <Form /> */}
      {/* <ReactFag /> */}
      {/* <TaskManager /> */}

      {/* <ListOfFruits /> */}
      {/* <Button  /> */}
      {/* <CountIncrement intialValue={0} /> */}

      <BrowserRouter>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TODO-APPLICATION</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
              <Link to='/addtask'class="nav-link" >ADD TASK</Link>
              <Link to='/displaytask'class="nav-link" >DISPLAY TASK</Link>
              <Link to='/edittask'class="nav-link" >UPDATE TASK</Link>
              <Link to='/deletetask'class="nav-link" >DELETE TASK</Link>

            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/addtask' element={<AddTask />}></Route>
        <Route path='/displaytask' element={<DisplayTask />}></Route>
        <Route path='/edittask' element={<EditTask />}></Route>
        <Route path='/deletetask' element={<DeleteTask />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
