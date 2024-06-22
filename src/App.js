import './App.css';
import Login from './Component/Login';
import RegistrationForm from './Component/Register';
import AddMemberForm from './Component/AddMember';
import AddExpenseForm from './Component/AddExpense';
import Home from './Component/Home';
import FriendCirclePage from './Component/CreateFriendCircle';
import DisplayFriendList from './Component/DisplayFriendList';
import Error from './Component/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friendcirclepage" element={<FriendCirclePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/addmember" element={<AddMemberForm />} />
          <Route path="/addexpense" element={<AddExpenseForm />} />
          <Route path="/displayfriendlist" element={<DisplayFriendList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
