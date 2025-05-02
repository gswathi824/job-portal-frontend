import logo from './logo.svg';
import './App.css';
import './index.css'
import CreateJob from './components/CreateJob'
import EditJob from './components/EditJob';
import ViewJob from './components/ViewJob';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminHomePage from './components/AdminHomePAge';
import UserHomePage from './components/UserHomePage';
import JobDetails from './components/JobDetails';
import ViewProfiles from './components/ViewProfiles';
import UserProfile from './components/UserProfile';

function App() {
  const routes=createBrowserRouter([
    {path:"/",element:<AdminHomePage/>,children:[
      {path:"/admin/home",element:<JobDetails/>},
      {
        path:"admin/edit-job/:id",element:<EditJob/>
      },
      {
        path:"admin/create-job",element:<CreateJob/>
      },
        {
          path:"admin/view-job/:id",element:<ViewJob/>
        }
    ]},
      
    {
      path:"/user",element:<UserHomePage/>,children:[
        {path:"view-profiles",element:<ViewProfiles/>},
        {path:"create-profile",element:<UserProfile/>}
      ]
    }
   
    
  ])
  return (
     <RouterProvider router={routes}>

     </RouterProvider>
  );
}

export default App;
